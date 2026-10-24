import Photo from './Photo.jsx'
import Note from './Note.jsx'
import PressedFlower from './PressedFlower.jsx'
import Envelope from './Envelope.jsx'
import Ultrasound from './Ultrasound.jsx'
import ChapterTitle from './ChapterTitle.jsx'
import BlankPage from './BlankPage.jsx'
import HeartRelic from './HeartRelic.jsx'
import Doodle from './Doodle.jsx'

const COMPONENTS = {
  photo: Photo,
  note: Note,
  flower: PressedFlower,
  envelope: Envelope,
  ultrasound: Ultrasound,
  chapterTitle: ChapterTitle,
  blank: BlankPage,
  heartRelic: HeartRelic,
  doodle: Doodle,
}

/** Posiciona un bloque dentro de la página según `pos` y `rotate`. */
export default function Block({ block, chapter, onOpenLetter }) {
  const Component = COMPONENTS[block.type]
  if (!Component) {
    if (import.meta.env.DEV) console.warn(`Tipo de bloque desconocido: ${block.type}`)
    return null
  }
  const { top, left, width } = block.pos ?? {}
  const style = {
    top,
    left,
    width,
    transform: block.rotate ? `rotate(${block.rotate}deg)` : undefined,
  }
  return (
    <div className={`block block-${block.type}`} style={style}>
      <Component {...block} chapter={chapter} onOpenLetter={onOpenLetter} />
    </div>
  )
}
