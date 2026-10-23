import { CornerFlourish, Divider } from './Ornaments.jsx'

export default function Cover({ album, stage, onOpen, buttonRef }) {
  const { kicker, names, subtitle } = album.cover
  const interactive = stage === 'closed'

  return (
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

        <div className="cover-title" aria-hidden="true">
          <span className="ct-kicker gilded">{kicker}</span>
          <span className="ct-name gilded">{names[0]}</span>
          <span className="ct-amp gilded">&amp;</span>
          <span className="ct-name gilded">{names[1]}</span>
          <Divider className="ct-divider" />
          <span className="ct-sub">{subtitle}</span>
        </div>

        <button
          ref={buttonRef}
          className="cover-button"
          onClick={onOpen}
          disabled={!interactive}
          tabIndex={interactive ? 0 : -1}
          aria-label={`Abrir el álbum: ${kicker} ${names[0]} y ${names[1]}`}
        />
      </div>

      <div className="cover-face cover-back leather" aria-hidden="true">
        <div className="endpaper endpaper-inset" />
      </div>
    </div>
  )
}
