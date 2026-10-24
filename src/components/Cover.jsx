import { useEffect, useState } from 'react'
import { Cartouche, CornerFlourish, Fleuron } from './Ornaments.jsx'

/**
 * Portada del álbum (diseño de morphine_album_base adaptado):
 * cuero borgoña, dorados, monograma M & D y un broche que se presiona para abrir.
 * Solo el broche abre el álbum; la cubierta en sí no es un botón.
 */
export default function Cover({ album, stage, onOpen, buttonRef }) {
  const { monogram, title, date, ariaLabel } = album.cover
  const clasped = stage === 'closed'
  const showThickness = stage === 'closed' || stage === 'unclasping' || stage === 'closing'

  // Tras cerrar el álbum, el broche vuelve a abrocharse cuando la tapa termina de girar
  const [returning, setReturning] = useState(false)
  useEffect(() => {
    if (stage === 'closing') setReturning(true)
    else if (stage !== 'closed') setReturning(false)
  }, [stage])
  const claspState = clasped ? (returning ? 'is-returning' : '') : 'is-released'

  return (
    <>
      {/* Canto de las hojas visible con el álbum cerrado */}
      <div className={`book-block ${showThickness ? '' : 'is-hidden'}`} aria-hidden="true" />

      <div className="cover">
        <div className="cover-face cover-front leather">
          <div className="cover-hinge" aria-hidden="true" />
          <div className="cover-tooling" aria-hidden="true">
            <CornerFlourish className="co tl" />
            <CornerFlourish className="co tr" />
            <CornerFlourish className="co bl" />
            <CornerFlourish className="co br" />
          </div>
          <span className="cover-metal tr" aria-hidden="true" />
          <span className="cover-metal br" aria-hidden="true" />

          <div className="cover-title">
            <Fleuron className="ct-fleuron" />
            <div className="ct-monogram-wrap">
              <Cartouche className="ct-cartouche" />
              <p className="ct-monogram">
                <span className="gilded">{monogram[0]}</span>
                <span className="ct-amp gilded">&amp;</span>
                <span className="gilded">{monogram[1]}</span>
              </p>
            </div>
            <span className="ct-rule" aria-hidden="true" />
            <p className="ct-title gilded">
              {title[0]}
              <br />
              {title[1]}
            </p>
            <p className="ct-date">{date}</p>
            <Fleuron className="ct-fleuron flip" />
          </div>
        </div>

        <div className="cover-face cover-back leather" aria-hidden="true">
          <div className="endpaper endpaper-inset" />
        </div>
      </div>

      {/* Broche: correa de cuero que viene de la contratapa y cierra con una placa dorada */}
      <button
        ref={buttonRef}
        type="button"
        className={`clasp ${claspState}`}
        onClick={onOpen}
        disabled={!clasped}
        tabIndex={clasped ? 0 : -1}
        aria-label={ariaLabel}
      >
        <span className="clasp-strap leather" aria-hidden="true" />
        <span className="clasp-plate" aria-hidden="true">
          <span className="clasp-stud">
            <svg viewBox="0 0 24 24" focusable="false">
              <g fill="currentColor">
                {[0, 72, 144, 216, 288].map((a) => (
                  <ellipse key={a} cx="12" cy="6.6" rx="3.2" ry="4.6" transform={`rotate(${a} 12 12)`} />
                ))}
              </g>
              <circle cx="12" cy="12" r="2.4" fill="#f6e2b0" />
            </svg>
          </span>
        </span>
      </button>
    </>
  )
}
