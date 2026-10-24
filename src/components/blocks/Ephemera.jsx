/**
 * Elementos efímeros de scrapbook artesanal:
 *  - bow: pequeño lazo de cinta de satén borgoña o rosa antiguo
 *  - lace: fragmento de encaje vintage calado en marfil envejecido
 *  - stamp: estampilla postal ficticia con borde dentado y matasellos
 *  - waxSeal: pequeño sello de lacre borgoña o dorado envejecido
 *  - scrap: recorte de papel antiguo (fragmento de partitura / herbario)
 */

function RibbonBow({ tone = 'wine' }) {
  const main = tone === 'blush' ? '#b56e78' : '#7a2230'
  const dark = tone === 'blush' ? '#8c4b55' : '#4e121b'
  const light = tone === 'blush' ? '#cfadc0' : '#a13d4c'
  return (
    <svg viewBox="0 0 110 78" aria-hidden="true" focusable="false">
      <g stroke={dark} strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
        {/* Cintas que caen */}
        <path
          d="M52 34 C44 48, 34 60, 22 72 L33 70 L37 75 C44 62, 50 48, 55 36 Z"
          fill={dark}
          opacity="0.9"
        />
        <path
          d="M58 34 C66 48, 76 60, 88 72 L77 70 L73 75 C66 62, 60 48, 55 36 Z"
          fill={dark}
          opacity="0.9"
        />
        {/* Lazada izquierda */}
        <path
          d="M53 31 C36 14, 12 16, 14 31 C16 44, 38 42, 53 33 Z"
          fill={main}
        />
        <path
          d="M22 26 C30 22, 40 25, 49 31"
          fill="none"
          stroke={light}
          strokeWidth="1.1"
          opacity="0.65"
        />
        {/* Lazada derecha */}
        <path
          d="M57 31 C74 14, 98 16, 96 31 C94 44, 72 42, 57 33 Z"
          fill={main}
        />
        <path
          d="M88 26 C80 22, 70 25, 61 31"
          fill="none"
          stroke={light}
          strokeWidth="1.1"
          opacity="0.65"
        />
        {/* Nudo central */}
        <ellipse cx="55" cy="32" rx="6.2" ry="5.2" fill={main} />
        <path d="M51 30 C54 29, 56 29, 59 30" fill="none" stroke={light} strokeWidth="0.9" opacity="0.7" />
      </g>
    </svg>
  )
}

function VintageLace() {
  const scallops = [18, 42, 66, 90, 114, 138]
  return (
    <svg viewBox="0 0 156 48" aria-hidden="true" focusable="false">
      <g fill="none" stroke="#c8b89a" strokeLinecap="round">
        {/* Banda superior tejida */}
        <rect x="6" y="4" width="144" height="12" rx="1.5" fill="#f7f0e2" fillOpacity="0.72" strokeWidth="0.8" />
        <path d="M8 8 H148 M8 12 H148" strokeWidth="0.55" strokeDasharray="2 2.5" />
        {/* Ondas festoneadas de encaje */}
        {scallops.map((cx) => (
          <g key={cx}>
            <path
              d={`M${cx - 12} 16 C${cx - 12} 36, ${cx + 12} 36, ${cx + 12} 16`}
              fill="#f7f0e2"
              fillOpacity="0.65"
              strokeWidth="0.9"
            />
            <path
              d={`M${cx - 8} 16 C${cx - 8} 29, ${cx + 8} 29, ${cx + 8} 16`}
              strokeWidth="0.6"
              strokeDasharray="1.4 2"
            />
            <circle cx={cx} cy="22" r="2.2" fill="#dfd2b8" strokeWidth="0.6" />
            <circle cx={cx - 6} cy="32" r="1" fill="#c8b89a" stroke="none" />
            <circle cx={cx} cy="34.5" r="1.1" fill="#c8b89a" stroke="none" />
            <circle cx={cx + 6} cy="32" r="1" fill="#c8b89a" stroke="none" />
          </g>
        ))}
      </g>
    </svg>
  )
}

function PostageStamp({ label = 'ETERNITY', sub = '23 · X', motif = 'tulip' }) {
  return (
    <div className="ephemera-stamp">
      <div className="stamp-inner">
        <span className="stamp-top">{label}</span>
        <svg className="stamp-art" viewBox="0 0 48 48" aria-hidden="true">
          {motif === 'sun' ? (
            <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <circle cx="24" cy="24" r="8" fill="currentColor" fillOpacity="0.18" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                <line key={a} x1="24" y1="8" x2="24" y2="12" transform={`rotate(${a} 24 24)`} />
              ))}
            </g>
          ) : motif === 'pagoda' ? (
            <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <path d="M10 34 H38 M14 27 H34 M17 20 H31 M24 11 V38" />
              <path d="M9 34 Q24 30 39 34 M13 27 Q24 23 35 27 M16 20 Q24 16 32 20" />
            </g>
          ) : (
            <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <path d="M24 39 V22" />
              <path d="M24 11 C19 14, 18 22, 24 26 C30 22, 29 14, 24 11 Z" fill="currentColor" fillOpacity="0.22" />
              <path d="M24 26 C17 24, 15 17, 19 12 M24 26 C31 24, 33 17, 29 12" />
              <path d="M24 36 C18 31, 17 26, 20 22 M24 37 C30 32, 31 27, 28 23" />
            </g>
          )}
        </svg>
        <span className="stamp-sub">{sub}</span>
      </div>
      {/* Matasellos circular */}
      <svg className="stamp-postmark" viewBox="0 0 80 50" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.62">
          <circle cx="24" cy="25" r="18" />
          <circle cx="24" cy="25" r="14" strokeDasharray="2 2" />
          <path d="M44 17 Q56 13 76 17 M44 25 Q56 21 76 25 M44 33 Q56 29 76 33" />
        </g>
      </svg>
    </div>
  )
}

function WaxSeal({ emblem = 'M&D', tone = 'wine' }) {
  return (
    <div className={`ephemera-seal seal-${tone}`}>
      <span className="seal-ring">{emblem}</span>
    </div>
  )
}

function PaperScrap({ kind = 'music', text = '23 · Oct' }) {
  return (
    <div className={`ephemera-scrap scrap-${kind}`}>
      {kind === 'music' ? (
        <svg viewBox="0 0 130 48" aria-hidden="true">
          <g stroke="#7a654b" strokeWidth="0.65" opacity="0.65">
            {[10, 16, 22, 28, 34].map((y) => (
              <line key={y} x1="6" y1={y} x2="124" y2={y} />
            ))}
          </g>
          <g fill="#5a4330" stroke="#5a4330" strokeWidth="1.1" strokeLinecap="round" opacity="0.78">
            <ellipse cx="28" cy="28" rx="3.4" ry="2.4" transform="rotate(-18 28 28)" />
            <line x1="31" y1="27" x2="31" y2="12" />
            <ellipse cx="52" cy="22" rx="3.4" ry="2.4" transform="rotate(-18 52 22)" />
            <line x1="55" y1="21" x2="55" y2="8" />
            <ellipse cx="74" cy="25" rx="3.4" ry="2.4" transform="rotate(-18 74 25)" />
            <line x1="77" y1="24" x2="77" y2="10" />
            <path d="M55 8 L77 10" strokeWidth="2" />
            <ellipse cx="102" cy="19" rx="3.4" ry="2.4" transform="rotate(-18 102 19)" />
            <line x1="105" y1="18" x2="105" y2="6" />
          </g>
        </svg>
      ) : (
        <span className="scrap-text">{text}</span>
      )}
    </div>
  )
}

const VARIANTS = {
  bow: RibbonBow,
  lace: VintageLace,
  stamp: PostageStamp,
  waxSeal: WaxSeal,
  scrap: PaperScrap,
}

export default function Ephemera(props) {
  const { variant = 'bow' } = props
  const Comp = VARIANTS[variant] ?? RibbonBow
  return (
    <div className={`ephemera ephemera-${variant}`} aria-hidden="true">
      <Comp {...props} />
    </div>
  )
}
