import { Divider } from './Ornaments.jsx'
import Block from './blocks/Block.jsx'

export default function Page({ desc, side, album, onOpenLetter, onBackgroundClick }) {
  if (!desc) return <div className={`page paper side-${side}`} aria-hidden="true" />

  if (desc.kind === 'endpaper') {
    return (
      <div className={`page endpaper side-${side}`} aria-hidden="true">
        <div className="endpaper-frame" />
      </div>
    )
  }

  const handleClick = (e) => {
    if (!onBackgroundClick) return
    if (e.target.closest('button, a, .block-interactive')) return
    onBackgroundClick(e)
  }

  let content
  if (desc.kind === 'title') {
    const t = album.titlePage
    content = (
      <div className="title-page">
        <Divider className="tp-divider" />
        <h1 className="tp-heading">
          <span>{t.heading[0]}</span>
          <span className="tp-amp">&amp;</span>
          <span>{t.heading[1]}</span>
        </h1>
        <Divider className="tp-divider" />
        <p className="tp-dedication">{t.dedication}</p>
        <p className="tp-date">{t.date}</p>
      </div>
    )
  } else {
    const { page, number } = desc
    const chapter = album.chapters.find((c) => c.id === page.chapter)
    const hasTitle = page.blocks.some((b) => b.type === 'chapterTitle')
    content = (
      <>
        {!hasTitle && chapter && (
          <p className="running-head" aria-hidden="true">
            {chapter.numeral} · {chapter.title}
          </p>
        )}
        {page.blocks.map((b, i) => (
          <Block key={i} block={b} chapter={chapter} onOpenLetter={onOpenLetter} />
        ))}
        <span className="page-number">{number}</span>
      </>
    )
  }

  return (
    <div
      className={`page paper side-${side} ${onBackgroundClick ? 'is-clickable' : ''}`}
      onClick={handleClick}
    >
      <div className="page-content">{content}</div>
      <div className="page-gutter" aria-hidden="true" />
    </div>
  )
}
