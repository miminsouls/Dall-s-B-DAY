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
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true" focusable="false">
      {/* Filetes angulares de encuadernación antigua */}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 74 V16 Q4 4 16 4 H74" strokeWidth="1.5" />
        <path d="M10 62 V20 Q10 10 20 10 H62" strokeWidth="0.85" opacity="0.8" />
        {/* Volutas botánicas que nacen del ángulo */}
        <path d="M14 44 C14 26, 26 14, 44 14" strokeWidth="1.15" />
        <path d="M14 34 C22 34, 28 40, 26 47 C24 52, 18 51, 18 46" strokeWidth="1" opacity="0.85" />
        <path d="M34 14 C34 22, 40 28, 47 26 C52 24, 51 18, 46 18" strokeWidth="1" opacity="0.85" />
        {/* Tallo diagonal hacia el tulipán de esquina */}
        <path d="M12 12 L25 25" strokeWidth="1.2" />
        {/* Hojas largas envolventes del tulipán */}
        <path d="M18 18 C16 27, 20 34, 28 36 C25 29, 22 23, 18 18 Z" strokeWidth="0.9" fill="currentColor" fillOpacity="0.18" />
        <path d="M18 18 C27 16, 34 20, 36 28 C29 25, 23 22, 18 18 Z" strokeWidth="0.9" fill="currentColor" fillOpacity="0.18" />
      </g>
      {/* Cáliz de tulipán estilizado estampado en oro */}
      <g fill="currentColor" stroke="currentColor" strokeWidth="0.6" strokeLinejoin="round">
        <path d="M23 23 C26 20, 32 22, 35 28 C29 31, 23 29, 23 23 Z" fillOpacity="0.85" />
        <path d="M23 23 C20 26, 22 32, 28 35 C31 29, 29 23, 23 23 Z" fillOpacity="0.7" />
        <path d="M24 24 C29 24, 33 28, 34 34 C28 33, 24 29, 24 24 Z" fillOpacity="0.95" />
      </g>
      {/* Remates y diminuta estrella grabada */}
      <g fill="currentColor">
        <circle cx="5" cy="5" r="2.4" />
        <circle cx="68" cy="10" r="1.2" opacity="0.8" />
        <circle cx="10" cy="68" r="1.2" opacity="0.8" />
        <path d="M44 40 L45.2 43.2 L48.5 44.4 L45.2 45.6 L44 48.8 L42.8 45.6 L39.5 44.4 L42.8 43.2 Z" opacity="0.75" />
      </g>
    </svg>
  )
}

/** Hoja de hiedra y pequeños tulipanes laterales en SVG para la portada. */
export function Fleuron({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 150 34" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M10 17 H50" />
        <path d="M100 17 H140" />
        <path d="M50 17 C56 7, 63 7, 66 13" />
        <path d="M100 17 C94 27, 87 27, 84 21" />
        <path d="M34 17 C38 11, 44 11, 46 15" strokeWidth="0.9" opacity="0.8" />
        <path d="M116 17 C112 23, 106 23, 104 19" strokeWidth="0.9" opacity="0.8" />
      </g>
      {/* Tulipán central estilizado */}
      <path
        d="M75 5 C69 9, 68 16, 75 23 C82 16, 81 9, 75 5 Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      <path
        d="M75 23 C67 21, 64 14, 68 8 C70 13, 72 18, 75 23 Z M75 23 C83 21, 86 14, 82 8 C80 13, 78 18, 75 23 Z"
        fill="currentColor"
        fillOpacity="0.65"
      />
      {/* Capullos laterales y estrellitas */}
      <g fill="currentColor">
        <path d="M22 14 L24 17 L22 20 L17 17 Z" opacity="0.8" />
        <path d="M128 14 L133 17 L128 20 L126 17 Z" opacity="0.8" />
        <circle cx="8" cy="17" r="1.6" />
        <circle cx="142" cy="17" r="1.6" />
      </g>
    </svg>
  )
}

/**
 * Cartela ovalada de doble filete para enmarcar el monograma M & D,
 * coronada por un pequeño sol grabado arriba y una luna creciente abajo.
 * El centro geométrico del óvalo se mantiene exactamente en (110, 90) = (50%, 50%).
 */
export function Cartouche({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 220 180" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Doble óvalo principal más filete interior punteado */}
        <ellipse cx="110" cy="90" rx="92" ry="64" strokeWidth="1.5" />
        <ellipse cx="110" cy="90" rx="86" ry="58" strokeWidth="0.85" strokeDasharray="1.8 3.4" />
        <ellipse cx="110" cy="90" rx="96" ry="68" strokeWidth="0.55" opacity="0.55" />

        {/* Filigranas laterales con pequeños tulipanes que abrazan el óvalo */}
        <path d="M14 90 C6 78, 8 64, 18 56 M14 90 C6 102, 8 116, 18 124" strokeWidth="0.95" opacity="0.8" />
        <path d="M206 90 C214 78, 212 64, 202 56 M206 90 C214 102, 212 116, 202 124" strokeWidth="0.95" opacity="0.8" />

        {/* Volutas superiores que sostienen el sol */}
        <path d="M78 26 C88 18, 98 18, 102 23 M142 26 C132 18, 122 18, 118 23" strokeWidth="1" opacity="0.85" />
        {/* Volutas inferiores que sostienen la luna */}
        <path d="M82 154 C90 161, 98 161, 102 156 M138 154 C130 161, 122 161, 118 156" strokeWidth="1" opacity="0.85" />

        {/* Rayos grabados del sol superior (centro en 110, 14) */}
        <path
          d="M110 2 V5 M110 23 V26 M98 14 H101 M119 14 H122 M101.5 5.5 L104 8 M118.5 22.5 L116 20 M118.5 5.5 L116 8 M101.5 22.5 L104 20"
          strokeWidth="1.1"
        />
        <path
          d="M105 3.5 L106.5 6.5 M115 3.5 L113.5 6.5 M99.5 9.5 L102.5 11 M120.5 9.5 L117.5 11"
          strokeWidth="0.8"
          opacity="0.75"
        />
      </g>

      <g fill="currentColor">
        {/* Disco solar grabado sobre el monograma */}
        <circle cx="110" cy="14" r="5.2" />
        <circle cx="110" cy="14" r="3.2" fill="none" stroke="rgba(40,10,15,0.55)" strokeWidth="0.7" />

        {/* Luna creciente discreta debajo del monograma (centro en 110, 166) */}
        <path d="M114 159.5 C108.5 159.5, 104 163.8, 104 169 C104 174.2, 108.5 178, 114 177.5 C110.2 176.2, 108 172.8, 108 168.8 C108 164.8, 110.2 161.2, 114 159.5 Z" />

        {/* Capullos de tulipán en los flancos izquierdo y derecho del óvalo */}
        <path d="M8 90 L14 86.5 L17 90 L14 93.5 Z" />
        <path d="M212 90 L206 86.5 L203 90 L206 93.5 Z" />

        {/* Diminutas estrellitas grabadas con moderación */}
        <path d="M64 31 L65 33.5 L67.5 34.5 L65 35.5 L64 38 L63 35.5 L60.5 34.5 L63 33.5 Z" opacity="0.8" />
        <path d="M156 31 L157 33.5 L159.5 34.5 L157 35.5 L156 38 L155 35.5 L152.5 34.5 L155 33.5 Z" opacity="0.8" />
        <circle cx="92" cy="14" r="1.1" opacity="0.7" />
        <circle cx="128" cy="14" r="1.1" opacity="0.7" />
        <circle cx="96" cy="168" r="1.1" opacity="0.7" />
        <circle cx="122" cy="168" r="1.1" opacity="0.7" />
      </g>
    </svg>
  )
}
