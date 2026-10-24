import { useEffect, useState } from 'react'
import { withBase } from '../../audio/engine.js'

/**
 * Reliquia romántica para la página "The Gift of My Heart":
 * enmarca la ilustración del corazón que Morphine le entregó a Dalliancé
 * con filigrana dorada, placa de época y un latido lub-dub vivo y sutil.
 */
export default function HeartRelic({
  src = '/photos/CORAZÓN/HER HEART.png',
  caption,
  subtitle,
}) {
  // Al llegar a la página late ligeramente más marcado durante los primeros ~2.2s
  // y después se estabiliza en un ritmo tranquilo y orgánico.
  const [phase, setPhase] = useState('awakening')

  useEffect(() => {
    setPhase('awakening')
    const t = setTimeout(() => setPhase('steady'), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <figure className={`heart-relic is-${phase}`}>
      <div className="hr-card">
        <span className="hr-corner tl" aria-hidden="true" />
        <span className="hr-corner tr" aria-hidden="true" />
        <span className="hr-corner bl" aria-hidden="true" />
        <span className="hr-corner br" aria-hidden="true" />

        <p className="hr-plate">FIG. I · COR MEUM</p>

        <svg
          className="hr-artwork"
          viewBox="235 400 810 1045"
          role="img"
          aria-label={caption || 'El corazón que Morphine le regaló a Dalliancé'}
        >
          <defs>
            <radialGradient id="hrGlow" cx="50%" cy="50%" r="48%">
              <stop offset="0%" stopColor="#d9b26f" stopOpacity="0.34" />
              <stop offset="70%" stopColor="#8a2c3b" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hrPulseGlow" cx="50%" cy="50%" r="46%">
              <stop offset="0%" stopColor="#e8ba78" stopOpacity="0.42" />
              <stop offset="55%" stopColor="#a8384b" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Halo y doble óvalo grabado alrededor del corazón */}
          <circle cx="640" cy="922" r="365" fill="url(#hrGlow)" />
          <circle className="hr-pulse-aura" cx="640" cy="922" r="355" fill="url(#hrPulseGlow)" />
          <ellipse
            cx="640"
            cy="922"
            rx="376"
            ry="494"
            fill="none"
            stroke="#b58d48"
            strokeWidth="3.4"
            strokeDasharray="8 11"
            opacity="0.72"
          />
          <ellipse
            cx="640"
            cy="922"
            rx="354"
            ry="470"
            fill="none"
            stroke="#8c6734"
            strokeWidth="2.2"
            opacity="0.48"
          />

          {/* Ilustración original de Morphine con latido lub-dub suave */}
          <g className="hr-beat-group">
            <image
              className="hr-img"
              href={withBase(src)}
              x="0"
              y="0"
              width="1286"
              height="1800"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </svg>

        <p className="hr-subtitle">{subtitle || 'STILL BEATING FOR YOU'}</p>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
