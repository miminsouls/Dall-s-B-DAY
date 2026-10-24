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

/** Hoja de hiedra (❦) dibujada en SVG para que se vea igual en cualquier dispositivo. */
export function Fleuron({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 32" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M6 16 H40" />
        <path d="M80 16 H114" />
        <path d="M40 16 C46 6, 52 6, 54 12" />
        <path d="M80 16 C74 26, 68 26, 66 20" />
      </g>
      <path
        d="M60 5 C52 5, 47 11, 50 18 C52 23, 57 25, 60 29 C63 25, 68 23, 70 18 C73 11, 68 5, 60 5 Z"
        fill="currentColor"
      />
      <path d="M60 9 C58 13, 58 19, 60 25" fill="none" stroke="rgba(0,0,0,.35)" strokeWidth="1.1" />
      <circle cx="6" cy="16" r="1.8" fill="currentColor" />
      <circle cx="114" cy="16" r="1.8" fill="currentColor" />
    </svg>
  )
}

/** Cartela ovalada de doble filete para enmarcar el monograma. */
export function Cartouche({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 150" aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <ellipse cx="100" cy="75" rx="96" ry="71" strokeWidth="1.6" />
        <ellipse cx="100" cy="75" rx="89" ry="64" strokeWidth=".8" strokeDasharray="1.5 3.5" />
        <path d="M100 0 v8 M100 142 v8 M0 75 h8 M192 75 h8" strokeWidth="1.6" />
      </g>
      <g fill="currentColor">
        <circle cx="100" cy="4" r="2.4" />
        <circle cx="100" cy="146" r="2.4" />
      </g>
    </svg>
  )
}
