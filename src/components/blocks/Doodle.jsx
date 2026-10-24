/**
 * Pequeños dibujos hechos a mano (doodles de sol, luna y estrellas)
 * con trazos orgánicos de tinta/lápiz sobre el papel del álbum.
 */

function SunDoodle() {
  return (
    <svg viewBox="0 0 90 90" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Doble trazo irregular del círculo central, como dibujado a mano */}
        <path
          d="M45 27 C55 26, 63 34, 63 45 C63 55, 54 63, 44 63 C34 63, 27 55, 27 44 C27 34, 35 27, 46 27"
          strokeWidth="1.5"
        />
        <path
          d="M43 29 C53 28, 61 36, 61 46 C60 55, 52 61, 43 61 C34 60, 29 53, 29 43 C30 35, 36 29, 45 29"
          strokeWidth="0.85"
          opacity="0.65"
        />
        {/* Rubor acuarelado muy sutil en el centro */}
        <circle cx="45" cy="45" r="15" fill="currentColor" opacity="0.08" stroke="none" />

        {/* Rayitos irregulares alternando trazos largos, cortos y ondulados */}
        <path d="M45 21 C44 15, 46 10, 45 5" strokeWidth="1.35" />
        <path d="M45 69 C46 74, 44 79, 45 84" strokeWidth="1.35" />
        <path d="M21 45 C15 46, 10 44, 5 45" strokeWidth="1.35" />
        <path d="M69 45 C75 44, 80 46, 85 45" strokeWidth="1.35" />

        {/* Rayos diagonales principales */}
        <path d="M62 28 C66 23, 70 19, 74 15" strokeWidth="1.25" />
        <path d="M28 62 C24 66, 19 71, 16 74" strokeWidth="1.25" />
        <path d="M28 28 C23 24, 19 19, 15 16" strokeWidth="1.25" />
        <path d="M62 62 C67 66, 71 71, 75 74" strokeWidth="1.25" />

        {/* Rayitos secundarios cortos */}
        <path d="M54 23 L57 14" strokeWidth="1" opacity="0.8" />
        <path d="M36 23 L33 14" strokeWidth="1" opacity="0.8" />
        <path d="M67 36 L76 32" strokeWidth="1" opacity="0.8" />
        <path d="M67 54 L76 57" strokeWidth="1" opacity="0.8" />
        <path d="M23 36 L14 33" strokeWidth="1" opacity="0.8" />
        <path d="M23 54 L14 57" strokeWidth="1" opacity="0.8" />
        <path d="M36 67 L33 76" strokeWidth="1" opacity="0.8" />
        <path d="M54 67 L57 76" strokeWidth="1" opacity="0.8" />
      </g>
      {/* Puntitos de tinta */}
      <g fill="currentColor" opacity="0.7">
        <circle cx="45" cy="2.5" r="1.1" />
        <circle cx="87" cy="45" r="1" />
        <circle cx="3" cy="45" r="1" />
        <circle cx="45" cy="87" r="1.1" />
      </g>
    </svg>
  )
}

function MoonDoodle() {
  return (
    <svg viewBox="0 0 84 84" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Luna creciente dibujada a pluma */}
        <path
          d="M52 14 C33 16, 20 31, 22 50 C24 66, 39 76, 56 71 C43 69, 34 58, 34 44 C34 30, 42 19, 52 14 Z"
          strokeWidth="1.45"
          fill="currentColor"
          fillOpacity="0.08"
        />
        {/* Sombreado de líneas finas (hatching) estilo grabado/lápiz */}
        <path
          d="M27 34 L34 32 M24 41 L33 39 M24 48 L33 46 M26 55 L35 53 M30 61 L39 59 M36 66 L44 64"
          strokeWidth="0.8"
          opacity="0.55"
        />
        {/* Estrellita superior derecha */}
        <path
          d="M64 20 C64 25, 64 25, 69 25 C64 25, 64 25, 64 30 C64 25, 64 25, 59 25 C64 25, 64 25, 64 20 Z"
          strokeWidth="1.1"
        />
        {/* Estrellita pequeña */}
        <path d="M58 42 L58 48 M55 45 L61 45" strokeWidth="1" opacity="0.8" />
      </g>
      <circle cx="68" cy="36" r="1.1" fill="currentColor" opacity="0.65" />
      <circle cx="48" cy="28" r="0.9" fill="currentColor" opacity="0.55" />
    </svg>
  )
}

function StarsDoodle() {
  return (
    <svg viewBox="0 0 90 70" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Estrella principal dibujada a mano */}
        <path
          d="M28 12 C28 23, 28 23, 39 23 C28 23, 28 23, 28 34 C28 23, 28 23, 17 23 C28 23, 28 23, 28 12 Z"
          strokeWidth="1.35"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <path d="M23 18 L33 28 M33 18 L23 28" strokeWidth="0.75" opacity="0.6" />

        {/* Segunda estrella mediana */}
        <path
          d="M64 26 C64 34, 64 34, 72 34 C64 34, 64 34, 64 42 C64 34, 64 34, 56 34 C64 34, 64 34, 64 26 Z"
          strokeWidth="1.2"
        />

        {/* Tercera estrellita de trazos cruzados */}
        <path d="M44 46 L44 56 M39 51 L49 51 M41 48 L47 54 M47 48 L41 54" strokeWidth="1" opacity="0.8" />
      </g>
      <g fill="currentColor" opacity="0.65">
        <circle cx="48" cy="18" r="1.2" />
        <circle cx="18" cy="44" r="1.1" />
        <circle cx="74" cy="18" r="1" />
        <circle cx="62" cy="54" r="1.1" />
      </g>
    </svg>
  )
}

function SunMoonDoodle() {
  return (
    <svg viewBox="0 0 100 90" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Luna creciente que abraza al sol */}
        <path
          d="M48 14 C27 16, 14 33, 17 53 C20 70, 37 80, 56 74 C41 72, 30 60, 30 45 C30 30, 38 19, 48 14 Z"
          strokeWidth="1.4"
          fill="currentColor"
          fillOpacity="0.08"
        />
        {/* Pequeño sol radiante junto a la luna */}
        <path
          d="M58 33 C65 33, 70 38, 70 45 C70 52, 64 57, 57 57 C50 57, 45 51, 45 44 C45 38, 51 33, 58 33"
          strokeWidth="1.35"
          fill="currentColor"
          fillOpacity="0.07"
        />
        {/* Rayitos del sol */}
        <path d="M58 28 L58 20" strokeWidth="1.2" />
        <path d="M68 32 L74 26" strokeWidth="1.2" />
        <path d="M74 41 L82 39" strokeWidth="1.2" />
        <path d="M74 49 L82 52" strokeWidth="1.2" />
        <path d="M68 57 L74 63" strokeWidth="1.2" />
        <path d="M58 61 L59 68" strokeWidth="1.15" />
        {/* Estrellita delicada */}
        <path d="M82 20 L82 26 M79 23 L85 23" strokeWidth="1" opacity="0.75" />
      </g>
      <circle cx="70" cy="16" r="1.1" fill="currentColor" opacity="0.65" />
      <circle cx="86" cy="45" r="1" fill="currentColor" opacity="0.65" />
    </svg>
  )
}

function ArrowDoodle() {
  return (
    <svg viewBox="0 0 110 54" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Trazo curvo con pequeño bucle hecho a mano */}
        <path
          d="M8 38 C26 42, 44 14, 34 12 C25 10, 26 30, 52 32 C72 34, 86 26, 98 20"
          strokeWidth="1.45"
        />
        {/* Punta de flecha dibujada a pluma */}
        <path d="M88 16 C93 18, 97 19, 100 19 C96 23, 94 27, 92 31" strokeWidth="1.45" />
      </g>
      <circle cx="5" cy="37" r="1.2" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

function UnderlineDoodle() {
  return (
    <svg viewBox="0 0 160 32" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 14 C46 8, 114 20, 154 12" strokeWidth="1.35" />
        <path d="M22 20 C58 16, 102 24, 138 18" strokeWidth="0.95" opacity="0.75" />
        <path d="M80 9 L80 23 M75 16 L85 16" strokeWidth="0.9" opacity="0.7" />
      </g>
      <circle cx="64" cy="16" r="1.1" fill="currentColor" opacity="0.65" />
      <circle cx="96" cy="16" r="1.1" fill="currentColor" opacity="0.65" />
    </svg>
  )
}

function SparkleDoodle() {
  return (
    <svg viewBox="0 0 76 76" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M38 10 C38 28, 38 28, 56 28 C38 28, 38 28, 38 46 C38 28, 38 28, 20 28 C38 28, 38 28, 38 10 Z"
          strokeWidth="1.3"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <path
          d="M56 44 C56 52, 56 52, 64 52 C56 52, 56 52, 56 60 C56 52, 56 52, 48 52 C56 52, 56 52, 56 44 Z"
          strokeWidth="1.1"
        />
        <path d="M22 48 L22 56 M18 52 L26 52" strokeWidth="1" opacity="0.8" />
      </g>
      <circle cx="58" cy="16" r="1.2" fill="currentColor" opacity="0.65" />
      <circle cx="18" cy="20" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="36" cy="62" r="1.1" fill="currentColor" opacity="0.65" />
    </svg>
  )
}

const VARIANTS = {
  sun: SunDoodle,
  moon: MoonDoodle,
  stars: StarsDoodle,
  sunMoon: SunMoonDoodle,
  arrow: ArrowDoodle,
  underline: UnderlineDoodle,
  sparkle: SparkleDoodle,
}

export default function Doodle({ variant = 'sun', tone = 'sepia' }) {
  const Shape = VARIANTS[variant] ?? SunDoodle
  return (
    <div className={`doodle doodle-${variant} tone-${tone}`} aria-hidden="true">
      <Shape />
    </div>
  )
}
