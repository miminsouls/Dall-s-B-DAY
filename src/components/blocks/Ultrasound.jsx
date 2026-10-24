import { playSfx, withBase } from '../../audio/engine.js'

export default function Ultrasound({ src, caption, header = [], ratio, fit, rotate, onOpenPhoto }) {
  const handleInspect = () => {
    if (!src || !onOpenPhoto) return
    playSfx('envelope')
    onOpenPhoto({ type: 'ultrasound', src, caption, header, ratio, fit, rotate })
  }

  return (
    <figure
      className={`ultrasound ${src && onOpenPhoto ? 'block-interactive is-zoomable' : ''}`}
      onClick={src && onOpenPhoto ? handleInspect : undefined}
      onKeyDown={
        src && onOpenPhoto
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleInspect()
              }
            }
          : undefined
      }
      tabIndex={src && onOpenPhoto ? 0 : undefined}
      role={src && onOpenPhoto ? 'button' : undefined}
      aria-label={src && onOpenPhoto ? `Ampliar ecografía: ${caption || 'mellizos'}` : undefined}
    >
      <div className="us-print">
        <div className="us-header" aria-hidden="true">
          <span>{header[0]}</span>
          <span>{header[1]}</span>
        </div>
        <div className="us-screen" style={ratio ? { aspectRatio: ratio } : undefined}>
          {src ? (
            <img
              src={withBase(src)}
              alt={caption || 'Ecografía'}
              loading="lazy"
              style={fit ? { objectFit: fit } : undefined}
            />
          ) : (
            <div className="us-fan" role="img" aria-label="Ecografía provisional">
              <span className="us-tag">Ecografía provisional</span>
            </div>
          )}
        </div>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
