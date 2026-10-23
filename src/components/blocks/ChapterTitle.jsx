import { Divider } from '../Ornaments.jsx'

export default function ChapterTitle({ chapter, text }) {
  return (
    <header className="chapter-title">
      <p className="ch-kicker">Capítulo {chapter?.numeral}</p>
      <h2 className="ch-title">{text ?? chapter?.title}</h2>
      <Divider className="ch-divider" />
    </header>
  )
}
