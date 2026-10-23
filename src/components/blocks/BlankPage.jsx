import { Divider } from '../Ornaments.jsx'

export default function BlankPage({ title, text }) {
  return (
    <div className="blank-page">
      <h2 className="blank-title">{title}</h2>
      <Divider className="blank-divider" />
      <div className="blank-slots" aria-hidden="true">
        {[0, 1].map((i) => (
          <div key={i} className={`blank-slot s${i}`}>
            {['tl', 'tr', 'bl', 'br'].map((c) => (
              <span key={c} className={`photo-corner ghost ${c}`} />
            ))}
          </div>
        ))}
      </div>
      <p className="blank-text">{text}</p>
      <div className="blank-lines" aria-hidden="true" />
    </div>
  )
}
