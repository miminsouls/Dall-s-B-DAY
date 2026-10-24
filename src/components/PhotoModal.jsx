import { useEffect, useRef } from 'react'
import { withBase } from '../audio/engine.js'

/**
 * Vista ampliada al tocar cualquier fotografía o ecografía:
 * conserva su marco artesanal, su pie de foto y se endereza suavemente.
 */
export default function PhotoModal({ item, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      previous?.focus?.({ preventScroll: true })
    }
  }, [onClose])

  if (!item) return null

  const isUltrasound = item.type === 'ultrasound'
  const frame = item.frame || 'corners'
  const ratio = item.ratio || (isUltrasound ? '4 / 3' : '4 / 5')
  // Se endereza casi por completo al sostenerla frente a los ojos
  const gentleTilt = item.rotate ? Math.max(-1.2, Math.min(1.2, item.rotate * 0.2)) : 0

  return (
    <div className="modal-backdrop photo-backdrop" onClick={onClose}>
      <div
        className="photo-modal"
        role="dialog"
        aria-modal="true"
        aria-label={item.caption || 'Fotografía ampliada'}
        style={{ '--modal-tilt': `${gentleTilt}deg` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="photo-modal-close"
          onClick={onClose}
          aria-label="Cerrar fotografía"
        >
          ✕
        </button>

        {isUltrasound ? (
          <figure className="ultrasound photo-modal-figure">
            <div className="us-print">
              <div className="us-header" aria-hidden="true">
                <span>{item.header?.[0]}</span>
                <span>{item.header?.[1]}</span>
              </div>
              <div className="us-screen" style={{ aspectRatio: ratio }}>
                <img
                  src={withBase(item.src)}
                  alt={item.caption || 'Ecografía'}
                  style={item.fit ? { objectFit: item.fit } : undefined}
                />
              </div>
            </div>
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ) : (
          <figure className={`photo frame-${frame} photo-modal-figure`}>
            <div className="photo-inner" style={{ aspectRatio: ratio }}>
              <div className="photo-image">
                <img
                  src={withBase(item.src)}
                  alt={item.alt || item.caption || ''}
                  style={item.fit ? { objectPosition: item.fit } : undefined}
                />
              </div>
              {frame === 'corners' &&
                ['tl', 'tr', 'bl', 'br'].map((c) => (
                  <span key={c} className={`photo-corner ${c}`} aria-hidden="true" />
                ))}
              {frame === 'tape' && (
                <>
                  <span className="tape a" aria-hidden="true" />
                  <span className="tape b" aria-hidden="true" />
                </>
              )}
              {frame === 'polaroid' && <span className="tape polaroid-tape" aria-hidden="true" />}
            </div>
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        )}
      </div>
    </div>
  )
}
