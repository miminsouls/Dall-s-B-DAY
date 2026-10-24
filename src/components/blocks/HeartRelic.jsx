import { withBase } from '../../audio/engine.js'

/**
 * Reliquia romántica para la página "The Gift of My Heart":
 * enmarca la ilustración del corazón que Morphine le entregó a Dalliancé
 * con filigrana dorada y placa de época.
 */
export default function HeartRelic({
  src = '/photos/CORAZÓN/HER HEART.png',
  caption,
  subtitle,
}) {
  return (
    <figure className="heart-relic">
      <div className="hr-card">
        <span className="hr-corner tl" aria-hidden="true" />
        <span className="hr-corner tr" aria-hidden="true" />
        <span className="hr-corner bl" aria-hidden="true" />
        <span className="hr-corner br" aria-hidden="true" />

        <p className="hr-plate">FIG. I · COR MEUM</p>

        <div className="hr-artwork">
          <svg className="hr-halo" viewBox="0 0 220 240" aria-hidden="true" focusable="false">
            <defs>
              <radialGradient id="hrGlow" cx="50%" cy="50%" r="48%">
                <stop offset="0%" stopColor="#d9b26f" stopOpacity="0.32" />
                <stop offset="70%" stopColor="#8a2c3b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="110" cy="120" r="90" fill="url(#hrGlow)" />
            <ellipse
              cx="110"
              cy="120"
              rx="86"
              ry="100"
              fill="none"
              stroke="#b58d48"
              strokeWidth="0.9"
              strokeDasharray="2 3"
              opacity="0.7"
            />
            <ellipse
              cx="110"
              cy="120"
              rx="80"
              ry="94"
              fill="none"
              stroke="#8c6734"
              strokeWidth="0.6"
              opacity="0.48"
            />
          </svg>

          <img
            className="hr-img"
            src={withBase(src)}
            alt={caption || 'El corazón que Morphine le regaló a Dalliancé'}
            loading="lazy"
          />
        </div>

        <p className="hr-subtitle">{subtitle || 'STILL BEATING FOR YOU'}</p>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
