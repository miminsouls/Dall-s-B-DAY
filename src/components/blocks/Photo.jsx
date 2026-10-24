import { withBase } from '../../audio/engine.js'

export function Placeholder({ label }) {
  return (
    <div className="placeholder" role="img" aria-label={`Imagen provisional: ${label || 'sin descripción'}`}>
      <svg viewBox="0 0 48 36" aria-hidden="true" focusable="false">
        <rect x="1" y="1" width="46" height="34" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="34" cy="11" r="4" fill="currentColor" opacity=".7" />
        <path d="M3 32 L17 16 L27 26 L33 20 L45 32 Z" fill="currentColor" opacity=".7" />
      </svg>
      <span className="placeholder-tag">Imagen provisional</span>
      {label && <span className="placeholder-label">{label}</span>}
    </div>
  )
}

export default function Photo({ src, alt, caption, placeholder, frame = 'corners', ratio = '4 / 5' }) {
  return (
    <figure className={`photo frame-${frame}`}>
      <div className="photo-inner" style={{ aspectRatio: ratio }}>
        <div className="photo-image">
          {src ? <img src={withBase(src)} alt={alt || caption || ''} loading="lazy" /> : <Placeholder label={placeholder} />}
        </div>
        {frame === 'corners' &&
          ['tl', 'tr', 'bl', 'br'].map((c) => <span key={c} className={`photo-corner ${c}`} aria-hidden="true" />)}
        {frame === 'tape' && (
          <>
            <span className="tape a" aria-hidden="true" />
            <span className="tape b" aria-hidden="true" />
          </>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
