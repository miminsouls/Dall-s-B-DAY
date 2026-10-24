import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useMediaQuery.js'

const FINAL_PETALS = [
  { left: '7%', delay: '0.08s', dur: '3.4s', drift: '18px', rot: '-28deg', scale: 0.95 },
  { left: '15%', delay: '0.35s', dur: '3.8s', drift: '-14px', rot: '34deg', scale: 0.8 },
  { left: '24%', delay: '0.65s', dur: '3.5s', drift: '12px', rot: '-18deg', scale: 0.72 },
  { left: '76%', delay: '0.22s', dur: '3.6s', drift: '-16px', rot: '26deg', scale: 0.85 },
  { left: '85%', delay: '0.5s', dur: '3.9s', drift: '15px', rot: '-32deg', scale: 0.9 },
  { left: '92%', delay: '0.15s', dur: '3.3s', drift: '-12px', rot: '22deg', scale: 0.76 },
]

export default function LetterModal({ letter, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const reduced = useReducedMotion()
  const showPetals = !reduced && letter?.title === 'One Last Letter…'

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'Tab') {
        // Mantener el foco dentro de la carta
        const focusables = dialogRef.current.querySelectorAll('button, [tabindex="0"]')
        const firstEl = focusables[0]
        const lastEl = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault()
          lastEl.focus()
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault()
          firstEl.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      previous?.focus?.({ preventScroll: true })
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      {showPetals && (
        <div className="tulip-petals" aria-hidden="true">
          {FINAL_PETALS.map((p, i) => (
            <span
              key={i}
              className="tulip-petal"
              style={{
                left: p.left,
                '--p-delay': p.delay,
                '--p-dur': p.dur,
                '--p-drift': p.drift,
                '--p-rot': p.rot,
                '--p-scale': p.scale,
              }}
            >
              <svg viewBox="0 0 28 38" focusable="false">
                <path
                  d="M14 2 C22 8, 25 22, 14 36 C3 22, 6 8, 14 2 Z"
                  fill="url(#petalGrad)"
                />
                <path
                  d="M14 5 C13 15, 13 24, 14 34"
                  stroke="rgba(90, 22, 32, 0.35)"
                  strokeWidth="0.7"
                  fill="none"
                />
                <defs>
                  <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d18892" stopOpacity="0.85" />
                    <stop offset="60%" stopColor="#a84c5b" stopOpacity="0.82" />
                    <stop offset="100%" stopColor="#7a2433" stopOpacity="0.75" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          ))}
        </div>
      )}
      <div
        ref={dialogRef}
        className="letter"
        role="dialog"
        aria-modal="true"
        aria-labelledby="letter-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="letter-close" onClick={onClose} aria-label="Cerrar carta">
          ✕
        </button>
        <div className="letter-scroll" tabIndex={0}>
          <h2 id="letter-title" className="letter-title">
            {letter.title}
          </h2>
          {letter.greeting && <p className="letter-greeting">{letter.greeting}</p>}
          {letter.body?.map((p, i) => (
            <p key={i} className="letter-body">
              {p}
            </p>
          ))}
          {letter.closing && <p className="letter-closing">{letter.closing}</p>}
          {letter.signature && <p className="letter-signature">{letter.signature}</p>}
        </div>
      </div>
    </div>
  )
}
