import { useEffect, useRef } from 'react'

export default function LetterModal({ letter, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)

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
          {letter.signature && <p className="letter-signature">{letter.signature}</p>}
        </div>
      </div>
    </div>
  )
}
