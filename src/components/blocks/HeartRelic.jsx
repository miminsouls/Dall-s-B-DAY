/**
 * Ilustración botánico-anatómica vintage para la página "The Gift of My Heart":
 * el corazón que Morphine le entregó a Dalliancé, rodeado de flores y filigrana dorada.
 */
export default function HeartRelic({ caption, subtitle }) {
  return (
    <figure className="heart-relic">
      <div className="hr-card">
        <span className="hr-corner tl" aria-hidden="true" />
        <span className="hr-corner tr" aria-hidden="true" />
        <span className="hr-corner bl" aria-hidden="true" />
        <span className="hr-corner br" aria-hidden="true" />

        <p className="hr-plate">FIG. I · COR MEUM</p>

        <svg className="hr-svg" viewBox="0 0 220 250" role="img" aria-label={caption || 'Ilustración anatómica vintage del corazón de Morphine'}>
          <defs>
            <radialGradient id="hrGlow" cx="50%" cy="52%" r="48%">
              <stop offset="0%" stopColor="#d9b26f" stopOpacity="0.32" />
              <stop offset="70%" stopColor="#8a2c3b" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hrCrimson" x1="25%" y1="15%" x2="80%" y2="90%">
              <stop offset="0%" stopColor="#9e3547" />
              <stop offset="52%" stopColor="#6e1b2a" />
              <stop offset="100%" stopColor="#3f0d17" />
            </linearGradient>
            <linearGradient id="hrGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5c888" />
              <stop offset="50%" stopColor="#b58d48" />
              <stop offset="100%" stopColor="#7a5b28" />
            </linearGradient>
          </defs>

          {/* Halo y doble elipse grabada */}
          <circle cx="110" cy="130" r="88" fill="url(#hrGlow)" />
          <ellipse cx="110" cy="128" rx="82" ry="96" fill="none" stroke="#b58d48" strokeWidth="0.9" strokeDasharray="2 3" opacity="0.7" />
          <ellipse cx="110" cy="128" rx="76" ry="90" fill="none" stroke="#8c6734" strokeWidth="0.6" opacity="0.5" />

          {/* Rayos finos tipo grabado antiguo */}
          <g stroke="#b58d48" strokeWidth="0.55" opacity="0.45">
            {Array.from({ length: 16 }, (_, i) => {
              const a = (i * 22.5 * Math.PI) / 180
              const x1 = 110 + Math.cos(a) * 52
              const y1 = 132 + Math.sin(a) * 52
              const x2 = 110 + Math.cos(a) * 72
              const y2 = 132 + Math.sin(a) * 72
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            })}
          </g>

          {/* Ramas botánicas que abrazan el corazón */}
          <g fill="none" stroke="#5e6b46" strokeWidth="1.2" strokeLinecap="round">
            <path d="M76 202 C54 176, 48 136, 62 96" />
            <path d="M144 202 C166 176, 172 136, 158 96" />
          </g>
          <g fill="#738057" opacity="0.75">
            <ellipse cx="54" cy="162" rx="7" ry="3.2" transform="rotate(-35 54 162)" />
            <ellipse cx="50" cy="138" rx="7" ry="3.2" transform="rotate(-20 50 138)" />
            <ellipse cx="55" cy="114" rx="6.5" ry="3" transform="rotate(-10 55 114)" />
            <ellipse cx="166" cy="162" rx="7" ry="3.2" transform="rotate(35 166 162)" />
            <ellipse cx="170" cy="138" rx="7" ry="3.2" transform="rotate(20 170 138)" />
            <ellipse cx="165" cy="114" rx="6.5" ry="3" transform="rotate(10 165 114)" />
          </g>

          {/* Vasos superiores (aorta, arteria pulmonar y cava) */}
          <g stroke="#3a1219" strokeWidth="1.1" fill="url(#hrCrimson)">
            {/* Vena cava superior */}
            <path d="M84 96 C82 78, 82 64, 86 54 L96 56 C94 66, 94 78, 96 94 Z" />
            {/* Arco aórtico con tres ramas */}
            <path d="M100 94 C98 68, 108 50, 126 52 C138 54, 144 64, 142 78 L131 78 C132 68, 128 63, 121 63 C112 63, 109 74, 111 94 Z" />
            <path d="M108 56 L106 42 L112 41 L114 54 Z" />
            <path d="M117 53 L118 39 L124 40 L123 53 Z" />
            <path d="M126 55 L130 43 L135 45 L131 57 Z" />
            {/* Tronco pulmonar */}
            <path d="M116 98 C122 82, 136 74, 152 76 L150 86 C138 85, 129 91, 125 103 Z" />
          </g>

          {/* Aberturas de los vasos */}
          <g fill="#2b0910" stroke="#c9a463" strokeWidth="0.6">
            <ellipse cx="91" cy="55" rx="5" ry="2.2" />
            <ellipse cx="109" cy="41.5" rx="3" ry="1.4" />
            <ellipse cx="121" cy="39.5" rx="3" ry="1.4" />
            <ellipse cx="132.5" cy="44" rx="2.8" ry="1.3" />
            <ellipse cx="151" cy="81" rx="2.2" ry="5" />
          </g>

          {/* Aurículas */}
          <path
            d="M78 108 C66 102, 66 86, 82 86 C90 86, 94 92, 94 100 Z"
            fill="#7d2232"
            stroke="#3a1219"
            strokeWidth="1.1"
          />
          <path
            d="M140 106 C152 100, 152 86, 138 86 C130 86, 126 92, 126 100 Z"
            fill="#7d2232"
            stroke="#3a1219"
            strokeWidth="1.1"
          />

          {/* Cuerpo principal del corazón anatómico */}
          <path
            d="M82 96
               C64 104, 62 132, 72 158
               C82 182, 102 200, 114 210
               C124 198, 146 174, 152 146
               C158 120, 148 98, 128 94
               C116 92, 94 91, 82 96 Z"
            fill="url(#hrCrimson)"
            stroke="#2f0b12"
            strokeWidth="1.3"
          />

          {/* Sombreado de grabado (líneas de contorno) */}
          <g fill="none" stroke="#2a080f" strokeWidth="0.65" opacity="0.55">
            <path d="M74 118 C82 114, 92 114, 100 118" />
            <path d="M71 130 C82 126, 94 126, 104 132" />
            <path d="M73 142 C84 138, 96 140, 106 146" />
            <path d="M78 156 C88 152, 98 154, 108 160" />
            <path d="M86 170 C95 167, 104 169, 111 174" />
          </g>

          {/* Arterias coronarias en hilo de oro (kintsugi / reliquia inmortal) */}
          <g fill="none" stroke="url(#hrGold)" strokeLinecap="round">
            <path d="M106 98 C108 122, 104 150, 113 198" strokeWidth="1.6" />
            <path d="M107 120 C96 128, 86 138, 80 152" strokeWidth="1.1" />
            <path d="M106 142 C96 150, 90 162, 88 174" strokeWidth="0.95" />
            <path d="M108 114 C122 122, 134 134, 140 150" strokeWidth="1.15" />
            <path d="M126 132 C132 144, 132 158, 126 172" strokeWidth="0.9" />
            <path d="M109 162 C118 168, 124 176, 126 186" strokeWidth="0.85" />
          </g>

          {/* Pequeñas rosas nacidas del corazón */}
          <g transform="translate(76 92)">
            <circle r="6.5" fill="#b45767" opacity="0.85" />
            <circle r="3.8" fill="#8b2939" />
            <circle r="1.5" fill="#e5c888" />
          </g>
          <g transform="translate(144 96)">
            <circle r="5.5" fill="#b45767" opacity="0.85" />
            <circle r="3" fill="#8b2939" />
            <circle r="1.3" fill="#e5c888" />
          </g>

          {/* Cinta con inscripción */}
          <path
            d="M52 222 Q110 234 168 222"
            fill="none"
            stroke="#b58d48"
            strokeWidth="0.8"
            opacity="0.75"
          />
          <text
            x="110"
            y="220"
            textAnchor="middle"
            fontFamily="IM Fell English SC, Georgia, serif"
            fontSize="7.5"
            letterSpacing="2.2"
            fill="#5e3a2e"
          >
            {subtitle || 'STILL BEATING FOR YOU'}
          </text>
        </svg>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
