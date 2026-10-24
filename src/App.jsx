import { useState } from 'react'
import { album } from './data/album.js'
import Book from './components/Book.jsx'
import LetterModal from './components/LetterModal.jsx'
import PhotoModal from './components/PhotoModal.jsx'
import MusicToggle from './components/MusicToggle.jsx'
import { useMediaQuery, useReducedMotion } from './hooks/useMediaQuery.js'

// Pocas motas de polvo dorado en la periferia exterior (nunca sobre las páginas)
const EXTERIOR_MOTES = [
  { x: '6%', y: '18%', size: '2.5px', dur: '14s', delay: '0s' },
  { x: '11%', y: '46%', size: '2px', dur: '17s', delay: '-4s' },
  { x: '8%', y: '76%', size: '2.8px', dur: '15s', delay: '-7s' },
  { x: '18%', y: '12%', size: '2px', dur: '18s', delay: '-2s' },
  { x: '16%', y: '86%', size: '2.2px', dur: '16s', delay: '-9s' },
  { x: '84%', y: '14%', size: '2.4px', dur: '16s', delay: '-3s' },
  { x: '91%', y: '28%', size: '2px', dur: '19s', delay: '-11s' },
  { x: '93%', y: '58%', size: '2.6px', dur: '15s', delay: '-5s' },
  { x: '88%', y: '82%', size: '2px', dur: '17s', delay: '-8s' },
  { x: '78%', y: '90%', size: '2.3px', dur: '16s', delay: '-6s' },
  { x: '48%', y: '6%', size: '2px', dur: '18s', delay: '-10s' },
  { x: '52%', y: '93%', size: '2.2px', dur: '15s', delay: '-1s' },
]

export default function App() {
  const single = useMediaQuery('(max-width: 760px), (max-aspect-ratio: 4/5)')
  const reduced = useReducedMotion()
  const [letter, setLetter] = useState(null)
  const [photo, setPhoto] = useState(null)
  const [autoStartSignal, setAutoStartSignal] = useState(0)

  return (
    <div className="scene">
      <div className="scene-glow" aria-hidden="true" />

      {!reduced && (
        <div className="dust-field" aria-hidden="true">
          {EXTERIOR_MOTES.map((m, i) => (
            <span
              key={i}
              className="dust-mote"
              style={{
                left: m.x,
                top: m.y,
                width: m.size,
                height: m.size,
                '--m-dur': m.dur,
                '--m-delay': m.delay,
              }}
            />
          ))}
        </div>
      )}

      <header className="topbar">
        <MusicToggle config={album.music} autoStartSignal={autoStartSignal} />
      </header>

      <main className={`stage ${single ? 'single' : 'double'}`}>
        <Book
          album={album}
          single={single}
          reduced={reduced}
          modalOpen={!!letter || !!photo}
          onOpenLetter={setLetter}
          onOpenPhoto={setPhoto}
          onAlbumOpen={() => setAutoStartSignal((n) => n + 1)}
        />
      </main>

      {letter && <LetterModal letter={letter} onClose={() => setLetter(null)} />}
      {photo && <PhotoModal item={photo} onClose={() => setPhoto(null)} />}
    </div>
  )
}
