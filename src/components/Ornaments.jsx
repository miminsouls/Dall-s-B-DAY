/* Ornamentos SVG reutilizables (todos heredan currentColor). */

export function Divider({ className = '' }) {
  return (
    <svg className={`divider ${className}`} viewBox="0 0 240 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M8 12 H92" />
        <path d="M148 12 H232" />
        <path d="M92 12 C100 4, 108 4, 112 12 C108 20, 100 20, 92 12" />
        <path d="M148 12 C140 4, 132 4, 128 12 C132 20, 140 20, 148 12" />
      </g>
      <path d="M120 4 L127 12 L120 20 L113 12 Z" fill="currentColor" />
      <circle cx="8" cy="12" r="2" fill="currentColor" />
      <circle cx="232" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}

export function CornerFlourish({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 60 60" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 56 V14 Q4 4 14 4 H56" />
        <path d="M12 46 Q12 12 46 12" />
        <path d="M20 30 Q20 20 30 20 Q36 20 36 26 Q36 30 31 30 Q28 30 28 27" />
      </g>
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  )
}
