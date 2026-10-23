/* Flores prensadas en SVG, con colores desvaídos. */

function Rose() {
  const outer = Array.from({ length: 8 }, (_, i) => i * 45)
  const inner = Array.from({ length: 5 }, (_, i) => i * 72 + 20)
  return (
    <svg viewBox="0 0 100 130" aria-hidden="true" focusable="false">
      <path d="M50 42 C52 70, 46 95, 56 126" stroke="#6f7a4c" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <ellipse cx="38" cy="80" rx="12" ry="5.5" fill="#7d8758" opacity=".75" transform="rotate(-35 38 80)" />
      <ellipse cx="62" cy="98" rx="11" ry="5" fill="#76804f" opacity=".7" transform="rotate(30 62 98)" />
      <path d="M38 80 L48 78 M62 98 L52 100" stroke="#5c6640" strokeWidth=".8" />
      <g transform="translate(50 32)">
        {outer.map((a) => (
          <ellipse key={a} cx="0" cy="-11" rx="10" ry="14" fill="#b4646d" opacity=".5" transform={`rotate(${a})`} />
        ))}
        {inner.map((a) => (
          <ellipse key={a} cx="0" cy="-6" rx="6.5" ry="9" fill="#93404f" opacity=".55" transform={`rotate(${a})`} />
        ))}
        <path d="M-3 0 C-3 -4, 4 -4, 4 0 C4 4, -5 4, -5 -1" stroke="#6b2534" strokeWidth="1.3" fill="none" />
      </g>
    </svg>
  )
}

function Lavender() {
  const stems = [
    { x: 50, rot: 0 },
    { x: 50, rot: -9 },
    { x: 50, rot: 9 },
  ]
  return (
    <svg viewBox="0 0 60 120" aria-hidden="true" focusable="false">
      {stems.map((s, k) => (
        <g key={k} transform={`rotate(${s.rot} 30 118)`}>
          <path d="M30 118 L30 30" stroke="#7b8460" strokeWidth="1.4" />
          {Array.from({ length: 9 }, (_, i) => (
            <g key={i}>
              <ellipse cx={27.5} cy={12 + i * 4.2} rx="2.6" ry="3.6" fill="#8b77a8" opacity=".7" />
              <ellipse cx={32.5} cy={14 + i * 4.2} rx="2.6" ry="3.6" fill="#7a6798" opacity=".7" />
            </g>
          ))}
        </g>
      ))}
      <path d="M22 100 C28 96, 34 96, 40 100" stroke="#c9b48a" strokeWidth="3" fill="none" opacity=".8" />
    </svg>
  )
}

function Fern() {
  return (
    <svg viewBox="0 0 60 120" aria-hidden="true" focusable="false">
      <path d="M30 118 C30 80, 31 40, 30 6" stroke="#5f6d42" strokeWidth="1.6" fill="none" />
      {Array.from({ length: 11 }, (_, i) => {
        const y = 12 + i * 9.5
        const len = 5 + i * 1.6
        return (
          <g key={i} fill="#71804d" opacity=".72">
            <ellipse cx={30 - len / 2 - 1} cy={y} rx={len / 2} ry="2.6" transform={`rotate(24 ${30 - len / 2} ${y})`} />
            <ellipse cx={30 + len / 2 + 1} cy={y} rx={len / 2} ry="2.6" transform={`rotate(-24 ${30 + len / 2} ${y})`} />
          </g>
        )
      })}
    </svg>
  )
}

const VARIANTS = { rose: Rose, lavender: Lavender, fern: Fern }

export default function PressedFlower({ variant = 'rose' }) {
  const Flower = VARIANTS[variant] ?? Rose
  return (
    <div className={`pressed-flower flower-${variant}`}>
      <Flower />
    </div>
  )
}
