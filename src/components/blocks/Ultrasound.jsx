import { withBase } from '../../audio/engine.js'

export default function Ultrasound({ src, caption, header = [], ratio, fit }) {
  return (
    <figure className="ultrasound">
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
