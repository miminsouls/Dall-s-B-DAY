/**
 * Motor de audio:
 *  1) Si existe el archivo configurado (p. ej. /audio/ambient.mp3) lo reproduce en bucle.
 *  2) Si no, y fallbackMusicBox está activo, genera una "caja de música"
 *     provisional con Web Audio (sin archivos ni derechos de autor).
 */
export function withBase(path) {
  if (!path || /^(https?:|data:|blob:)/.test(path)) return path
  const base = import.meta.env.BASE_URL || '/'
  if (path.startsWith(base)) return path
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

export async function createAudioEngine({ src, volume = 0.35, fallbackMusicBox = true }) {
  const resolvedSrc = withBase(src)
  if (resolvedSrc && (await fileExists(resolvedSrc))) return createFileEngine(resolvedSrc, volume)
  if (fallbackMusicBox) return createMusicBox(volume)
  return null
}

async function fileExists(src) {
  try {
    const res = await fetch(src, { method: 'HEAD' })
    const type = res.headers.get('content-type') || ''
    return res.ok && type.startsWith('audio')
  } catch {
    return false
  }
}

function createFileEngine(src, volume) {
  const audio = new Audio(src)
  audio.loop = true
  audio.preload = 'auto'
  audio.volume = 0
  let fade
  const fadeTo = (target, ms, done) => {
    clearInterval(fade)
    const from = audio.volume
    const t0 = performance.now()
    fade = setInterval(() => {
      const k = Math.min(1, (performance.now() - t0) / ms)
      audio.volume = from + (target - from) * k
      if (k >= 1) {
        clearInterval(fade)
        done?.()
      }
    }, 40)
  }
  return {
    kind: 'file',
    async start() {
      await audio.play()
      fadeTo(volume, 1500)
    },
    stop() {
      fadeTo(0, 600, () => audio.pause())
    },
  }
}

/* ── Caja de música provisional ─────────────────────────── */

const CHORDS = {
  Am: [57, 64, 69, 72],
  F: [53, 60, 65, 69],
  C: [48, 55, 64, 67],
  E: [52, 59, 64, 68],
  Dm: [50, 57, 62, 65],
}
const PROGRESSION = ['Am', 'F', 'C', 'E', 'Am', 'Dm', 'E', 'Am']
const MELODY = [
  [76, null, 74],
  [72, null, 69],
  [67, 72, 76],
  [74, null, 71],
  [72, 76, 81],
  [77, 76, 74],
  [76, 74, 71],
  [69, null, null],
]
const ARP = [0, 1, 2, 3, 2, 1]
const STEP = 0.34 // segundos por corchea (vals lento 3/4)

function createMusicBox(volume) {
  const Ctx = window.AudioContext || window.webkitAudioContext
  const ctx = new Ctx()
  const master = ctx.createGain()
  master.gain.value = 0.0001
  master.connect(ctx.destination)

  const tone = ctx.createBiquadFilter()
  tone.type = 'lowpass'
  tone.frequency.value = 3400

  const reverb = ctx.createConvolver()
  reverb.buffer = impulse(ctx, 3.2, 2.4)
  const wet = ctx.createGain()
  wet.gain.value = 0.5
  const dry = ctx.createGain()
  dry.gain.value = 0.7

  tone.connect(dry).connect(master)
  tone.connect(reverb).connect(wet).connect(master)

  const pluck = (t, midi, vel, dur) => {
    const f = 440 * Math.pow(2, (midi - 69) / 12)
    const env = ctx.createGain()
    env.gain.setValueAtTime(0.0001, t)
    env.gain.exponentialRampToValueAtTime(vel, t + 0.006)
    env.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    env.connect(tone)
    ;[
      [1, 1],
      [2, 0.3],
      [3.01, 0.1],
      [5.4, 0.04],
    ].forEach(([ratio, amp]) => {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = f * ratio
      const g = ctx.createGain()
      g.gain.value = amp
      osc.connect(g).connect(env)
      osc.start(t)
      osc.stop(t + dur + 0.05)
    })
  }

  let step = 0
  let nextTime = 0
  let timer = null
  let suspendTimer = null

  const tick = () => {
    while (nextTime < ctx.currentTime + 0.5) {
      const bar = Math.floor(step / 6) % PROGRESSION.length
      const s = step % 6
      const chord = CHORDS[PROGRESSION[bar]]
      pluck(nextTime, chord[ARP[s]], s === 0 ? 0.07 : 0.04, 2.6)
      if (s % 2 === 0) {
        const m = MELODY[bar][s / 2]
        if (m) pluck(nextTime + 0.012, m, 0.1, 3.2)
      }
      nextTime += STEP
      step++
    }
  }

  return {
    kind: 'musicbox',
    async start() {
      clearTimeout(suspendTimer)
      await ctx.resume()
      if (!timer) {
        nextTime = ctx.currentTime + 0.1
        timer = setInterval(tick, 120)
        tick()
      }
      master.gain.cancelScheduledValues(ctx.currentTime)
      master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), ctx.currentTime)
      master.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 2)
    },
    stop() {
      master.gain.cancelScheduledValues(ctx.currentTime)
      master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), ctx.currentTime)
      master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6)
      suspendTimer = setTimeout(() => {
        clearInterval(timer)
        timer = null
        ctx.suspend()
      }, 700)
    },
  }
}

function impulse(ctx, seconds, decay) {
  const rate = ctx.sampleRate
  const length = Math.floor(rate * seconds)
  const buffer = ctx.createBuffer(2, length, rate)
  for (let c = 0; c < 2; c++) {
    const data = buffer.getChannelData(c)
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay)
  }
  return buffer
}

/* ── Efectos de sonido físicos (Foley artesanal con Web Audio) ───────── */

let sfxCtx = null
let sfxNoiseBuffer = null
let sfxMuted = false
const lastSfxAt = {}

export function setSfxMuted(muted) {
  sfxMuted = !!muted
}

export function isSfxMuted() {
  return sfxMuted
}

function getSfxContext() {
  const Ctx = window.AudioContext || window.webkitAudioContext
  if (!Ctx) return null
  if (!sfxCtx) {
    sfxCtx = new Ctx()
    // Buffer corto de ruido suave reutilizable para roce de papel
    const rate = sfxCtx.sampleRate
    const len = Math.floor(rate * 0.45)
    sfxNoiseBuffer = sfxCtx.createBuffer(1, len, rate)
    const data = sfxNoiseBuffer.getChannelData(0)
    let b0 = 0, b1 = 0, b2 = 0
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1
      b0 = 0.997 * b0 + w * 0.029
      b1 = 0.985 * b1 + w * 0.032
      b2 = 0.950 * b2 + w * 0.048
      data[i] = (b0 + b1 + b2 + w * 0.018) * 0.9
    }
  }
  if (sfxCtx.state === 'suspended') {
    sfxCtx.resume().catch(() => {})
  }
  return sfxCtx
}

/**
 * Reproduce un efecto físico muy sutil:
 *  - 'clasp': clic cálido de bronce antiguo y cuero al desabrochar
 *  - 'page': susurro suave de hoja de papel antiguo al pasar página
 *  - 'envelope': roce delicado de papel al abrir un sobre
 */
export function playSfx(kind) {
  if (sfxMuted) return
  const nowMs = performance.now()
  if (lastSfxAt[kind] && nowMs - lastSfxAt[kind] < 180) return
  lastSfxAt[kind] = nowMs

  try {
    const ctx = getSfxContext()
    if (!ctx) return
    const t = ctx.currentTime

    if (kind === 'clasp') {
      // 1) Cuerpo suave de cuero/madera al soltar la correa
      const bodyOsc = ctx.createOscillator()
      const bodyGain = ctx.createGain()
      bodyOsc.type = 'triangle'
      bodyOsc.frequency.setValueAtTime(145, t)
      bodyOsc.frequency.exponentialRampToValueAtTime(58, t + 0.075)
      bodyGain.gain.setValueAtTime(0.0001, t)
      bodyGain.gain.linearRampToValueAtTime(0.045, t + 0.006)
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08)
      bodyOsc.connect(bodyGain).connect(ctx.destination)
      bodyOsc.start(t)
      bodyOsc.stop(t + 0.085)

      // 2) Pequeño clic metálico amortiguado del broche de latón
      const clickOsc = ctx.createOscillator()
      const clickFilter = ctx.createBiquadFilter()
      const clickGain = ctx.createGain()
      clickOsc.type = 'sine'
      clickOsc.frequency.setValueAtTime(1480, t + 0.012)
      clickOsc.frequency.exponentialRampToValueAtTime(820, t + 0.055)
      clickFilter.type = 'bandpass'
      clickFilter.frequency.value = 1200
      clickFilter.Q.value = 2.2
      clickGain.gain.setValueAtTime(0.0001, t + 0.012)
      clickGain.gain.linearRampToValueAtTime(0.026, t + 0.016)
      clickGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.058)
      clickOsc.connect(clickFilter).connect(clickGain).connect(ctx.destination)
      clickOsc.start(t + 0.012)
      clickOsc.stop(t + 0.062)
      return
    }

    if (kind === 'page' && sfxNoiseBuffer) {
      const src = ctx.createBufferSource()
      src.buffer = sfxNoiseBuffer
      const filter = ctx.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.setValueAtTime(520, t)
      filter.frequency.exponentialRampToValueAtTime(880, t + 0.14)
      filter.frequency.exponentialRampToValueAtTime(460, t + 0.28)
      filter.Q.value = 1.4

      const lowpass = ctx.createBiquadFilter()
      lowpass.type = 'lowpass'
      lowpass.frequency.value = 1650

      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.0001, t)
      gain.gain.linearRampToValueAtTime(0.042, t + 0.055)
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28)

      src.connect(filter).connect(lowpass).connect(gain).connect(ctx.destination)
      src.start(t)
      src.stop(t + 0.29)
      return
    }

    if (kind === 'envelope' && sfxNoiseBuffer) {
      const src = ctx.createBufferSource()
      src.buffer = sfxNoiseBuffer
      const filter = ctx.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.setValueAtTime(780, t)
      filter.frequency.exponentialRampToValueAtTime(1180, t + 0.16)
      filter.Q.value = 1.8

      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.0001, t)
      gain.gain.linearRampToValueAtTime(0.032, t + 0.035)
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.19)

      src.connect(filter).connect(gain).connect(ctx.destination)
      src.start(t)
      src.stop(t + 0.2)
    }
  } catch {
    // Ignorar silenciosamente si el navegador bloquea Web Audio antes de interacción
  }
}
