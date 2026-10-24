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

function Tulip() {
  return (
    <svg viewBox="0 0 90 135" aria-hidden="true" focusable="false">
      {/* Tallo principal ligeramente curvado */}
      <path
        d="M45 48 C44 76, 47 102, 42 130"
        stroke="#657347"
        strokeWidth="2.1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Hojas largas y envolventes típicas del tulipán */}
      <path
        d="M43 118 C26 98, 22 72, 32 54 C35 74, 38 94, 44 110 Z"
        fill="#738152"
        opacity=".72"
      />
      <path
        d="M45 122 C62 102, 66 78, 57 58 C53 78, 50 96, 45 114 Z"
        fill="#697748"
        opacity=".68"
      />
      {/* Nervaduras sutiles de las hojas */}
      <path
        d="M43 114 C33 96, 30 76, 33 58 M45 118 C55 100, 58 82, 56 62"
        stroke="#525f36"
        strokeWidth=".7"
        fill="none"
        opacity=".65"
      />
      {/* Cáliz y pétalos prensados del tulipán en tonos borgoña/rosa antiguo */}
      <g transform="translate(45 34)">
        {/* Pétalo central posterior */}
        <path
          d="M0 -22 C10 -18, 12 -2, 0 14 C-12 -2, -10 -18, 0 -22 Z"
          fill="#9d4452"
          opacity=".62"
        />
        {/* Pétalo izquierdo */}
        <path
          d="M-2 14 C-16 10, -20 -8, -9 -20 C-2 -14, -1 -2, -2 14 Z"
          fill="#b86874"
          opacity=".72"
        />
        {/* Pétalo derecho */}
        <path
          d="M2 14 C16 10, 20 -8, 9 -20 C2 -14, 1 -2, 2 14 Z"
          fill="#ae5966"
          opacity=".72"
        />
        {/* Pétalo frontal central con pliegue */}
        <path
          d="M0 -18 C8 -12, 9 4, 0 15 C-9 4, -8 -12, 0 -18 Z"
          fill="#c77b85"
          opacity=".58"
        />
        {/* Trazo botánico fino en tinta sepia */}
        <path
          d="M0 -22 C10 -18, 12 -2, 0 14 C-12 -2, -10 -18, 0 -22 M-2 14 C-16 10, -20 -8, -9 -20 M2 14 C16 10, 20 -8, 9 -20"
          stroke="#5c222d"
          strokeWidth=".75"
          fill="none"
          opacity=".55"
        />
      </g>
    </svg>
  )
}

function Wildflower() {
  const petals = [0, 60, 120, 180, 240, 300]
  return (
    <svg viewBox="0 0 85 115" aria-hidden="true" focusable="false">
      {/* Tallos finos ramificados */}
      <g fill="none" stroke="#6d7a4e" strokeLinecap="round">
        <path d="M42 110 C40 82, 44 54, 34 26" strokeWidth="1.5" />
        <path d="M41 84 C50 70, 56 56, 60 40" strokeWidth="1.2" />
        <path d="M40 94 C30 82, 24 68, 22 54" strokeWidth="1.1" />
      </g>
      {/* Hojitas silvestres */}
      <g fill="#758355" opacity=".7">
        <ellipse cx="34" cy="72" rx="7" ry="2.6" transform="rotate(-32 34 72)" />
        <ellipse cx="49" cy="78" rx="6.5" ry="2.4" transform="rotate(28 49 78)" />
      </g>
      {/* Florecita principal (manzanilla/nomeolvides prensada) */}
      <g transform="translate(34 24)">
        {petals.map((a) => (
          <ellipse key={a} cx="0" cy="-6.5" rx="3.4" ry="5.8" fill="#dfd2b5" stroke="#9e8a66" strokeWidth=".4" opacity=".88" transform={`rotate(${a})`} />
        ))}
        <circle r="3.4" fill="#c49a4e" />
      </g>
      {/* Florecita secundaria derecha */}
      <g transform="translate(60 38) scale(0.78)">
        {petals.map((a) => (
          <ellipse key={a} cx="0" cy="-6" rx="3.2" ry="5.4" fill="#c58b93" opacity=".78" transform={`rotate(${a})`} />
        ))}
        <circle r="3" fill="#9c6e34" />
      </g>
      {/* Capullo izquierdo */}
      <g transform="translate(22 52) rotate(-22)">
        <ellipse cx="0" cy="-3" rx="3.2" ry="4.8" fill="#b86b77" opacity=".75" />
        <path d="M-3 0 Q0 3 3 0" stroke="#5e6b40" strokeWidth="1.1" fill="none" />
      </g>
    </svg>
  )
}

function TulipBud() {
  return (
    <svg viewBox="0 0 75 120" aria-hidden="true" focusable="false">
      <path d="M34 114 C32 86, 36 58, 43 34" stroke="#667449" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M34 104 C24 84, 24 62, 31 46 C31 64, 32 82, 35 98 Z" fill="#728052" opacity=".7" />
      <g transform="translate(44 30) rotate(14)">
        <path d="M0 -16 C7 -12, 8 0, 0 10 C-8 0, -7 -12, 0 -16 Z" fill="#8f3241" opacity=".78" />
        <path d="M-1 10 C-10 7, -12 -5, -5 -14 C-1 -9, 0 -1, -1 10 Z" fill="#b6626f" opacity=".8" />
        <path d="M1 10 C10 7, 12 -5, 5 -14 C1 -9, 0 -1, 1 10 Z" fill="#a44d5b" opacity=".75" />
      </g>
    </svg>
  )
}

const VARIANTS = {
  rose: Rose,
  lavender: Lavender,
  fern: Fern,
  tulip: Tulip,
  wildflower: Wildflower,
  tulipBud: TulipBud,
}

export default function PressedFlower({ variant = 'rose' }) {
  const Flower = VARIANTS[variant] ?? Rose
  return (
    <div className={`pressed-flower flower-${variant}`}>
      <Flower />
    </div>
  )
}
