/**
 * Motor de audio:
 *  1) Si existe el archivo configurado (p. ej. /audio/ambient.mp3) lo reproduce en bucle.
 *  2) Si no, y fallbackMusicBox está activo, genera una "caja de música"
 *     provisional con Web Audio (sin archivos ni derechos de autor).
 */
export async function createAudioEngine({ src, volume = 0.35, fallbackMusicBox = true }) {
  if (src && (await fileExists(src))) return createFileEngine(src, volume)
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
