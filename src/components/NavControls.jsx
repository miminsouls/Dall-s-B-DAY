export default function NavControls({
  chapters,
  currentChapter,
  status,
  canPrev,
  canNext,
  onPrev,
  onNext,
  onChapter,
}) {
  return (
    <nav className="nav" aria-label="Navegación del álbum">
      <button className="nav-arrow" onClick={onPrev} disabled={!canPrev} aria-label="Página anterior">
        <span aria-hidden="true">‹</span>
      </button>

      <div className="nav-center">
        <span className="nav-status">{status}</span>
        <div className="nav-chapters" role="group" aria-label="Capítulos">
          {chapters.map((c) => (
            <button
              key={c.id}
              className="nav-chip"
              onClick={() => onChapter(c.id)}
              aria-current={c.id === currentChapter ? 'true' : undefined}
              title={c.title}
            >
              <span aria-hidden="true">{c.numeral}</span>
              <span className="sr-only">
                Capítulo {c.numeral}: {c.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button className="nav-arrow" onClick={onNext} disabled={!canNext} aria-label="Página siguiente">
        <span aria-hidden="true">›</span>
      </button>
    </nav>
  )
}
