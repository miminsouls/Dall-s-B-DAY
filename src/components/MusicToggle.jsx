import { useCallback, useEffect, useRef, useState } from 'react'
import { createAudioEngine, setSfxMuted } from '../audio/engine.js'

export default function MusicToggle({ config, autoStartSignal = 0 }) {
  const [on, setOn] = useState(false)
  const [busy, setBusy] = useState(false)
  const engine = useRef(null)
  const userMuted = useRef(false)

  useEffect(() => () => engine.current?.stop(), [])

  const startMusic = useCallback(async () => {
    if (busy || on) return
    setBusy(true)
    try {
      if (!engine.current) {
        engine.current = await createAudioEngine(config)
      }
      if (!engine.current) return
      setSfxMuted(false)
      await engine.current.start()
      setOn(true)
    } catch (err) {
      console.warn('No se pudo reproducir la música', err)
    } finally {
      setBusy(false)
    }
  }, [busy, on, config])

  // Al abrir el broche de la portada, inicia la melodía suavemente si el usuario no la silenció antes
  useEffect(() => {
    if (autoStartSignal > 0 && !userMuted.current && !on) {
      startMusic()
    }
  }, [autoStartSignal, on, startMusic])

  const toggle = async () => {
    if (busy) return
    setBusy(true)
    try {
      if (!engine.current) {
        engine.current = await createAudioEngine(config)
      }
      if (!engine.current) return
      if (on) {
        userMuted.current = true
        setSfxMuted(true)
        engine.current.stop()
        setOn(false)
      } else {
        userMuted.current = false
        setSfxMuted(false)
        await engine.current.start()
        setOn(true)
      }
    } catch (err) {
      console.warn('No se pudo reproducir la música', err)
    } finally {
      setBusy(false)
    }
  }

  const label = on ? 'Silenciar música y sonidos' : 'Activar música y sonidos'

  return (
    <button
      className={`music-toggle ${on ? 'is-on' : ''}`}
      onClick={toggle}
      aria-pressed={on}
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
        {on ? (
          <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M16 9.5a3.5 3.5 0 0 1 0 5" />
            <path d="M18.5 7a7 7 0 0 1 0 10" />
          </g>
        ) : (
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M16 9l5 6M21 9l-5 6" />
          </g>
        )}
      </svg>
      <span className="music-label">{on ? 'Música' : 'Silenciado'}</span>
    </button>
  )
}
