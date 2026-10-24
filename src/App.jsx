import { useState } from 'react'
import { album } from './data/album.js'
import Book from './components/Book.jsx'
import LetterModal from './components/LetterModal.jsx'
import MusicToggle from './components/MusicToggle.jsx'
import { useMediaQuery, useReducedMotion } from './hooks/useMediaQuery.js'

export default function App() {
  const single = useMediaQuery('(max-width: 760px), (max-aspect-ratio: 4/5)')
  const reduced = useReducedMotion()
  const [letter, setLetter] = useState(null)

  return (
    <div className="scene">
      <div className="scene-glow" aria-hidden="true" />

      <header className="topbar">
        <MusicToggle config={album.music} />
      </header>

      <main className={`stage ${single ? 'single' : 'double'}`}>
        <Book
          album={album}
          single={single}
          reduced={reduced}
          modalOpen={!!letter}
          onOpenLetter={setLetter}
        />
      </main>

      {letter && <LetterModal letter={letter} onClose={() => setLetter(null)} />}
    </div>
  )
}
