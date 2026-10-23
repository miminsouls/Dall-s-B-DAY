import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useMediaQuery.js'

export default function Envelope({ label, seal = 'M', letter, onOpenLetter }) {
  const [opened, setOpened] = useState(false)
  const reduced = useReducedMotion()
  const timer = useRef()
  useEffect(() => () => clearTimeout(timer.current), [])

  const handleClick = () => {
    if (!letter) return
    if (opened || reduced) {
      setOpened(true)
      onOpenLetter?.(letter)
      return
    }
    setOpened(true)
    timer.current = setTimeout(() => onOpenLetter?.(letter), 850)
  }

  return (
    <button
      type="button"
      className={`envelope block-interactive ${opened ? 'is-open' : ''}`}
      onClick={handleClick}
      aria-haspopup="dialog"
      aria-label={`${opened ? 'Leer' : 'Abrir'} carta: ${letter?.title ?? label}`}
    >
      <span className="env-back" aria-hidden="true" />
      <span className="env-letter" aria-hidden="true">
        <span className="env-letter-title">{letter?.title}</span>
        <span className="env-letter-lines" />
      </span>
      <span className="env-front" aria-hidden="true" />
      <span className="env-flap" aria-hidden="true" />
      <span className="env-seal" aria-hidden="true">
        {seal}
      </span>
      <span className="env-label" aria-hidden="true">
        {label}
      </span>
    </button>
  )
}
