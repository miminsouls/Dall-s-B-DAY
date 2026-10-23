import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Page from './Page.jsx'
import Cover from './Cover.jsx'
import NavControls from './NavControls.jsx'
import { useSwipe } from '../hooks/useMediaQuery.js'

const FLIP_MS = 900
const OPEN_MS = 1400

/**
 * Lista plana de caras de página:
 * [guarda (reverso de la cubierta), portadilla, página 1, página 2, …]
 * En escritorio se agrupan en pliegos de dos.
 */
export function buildFlat(album) {
  const flat = [{ kind: 'endpaper' }, { kind: 'title' }]
  album.pages.forEach((page, i) => flat.push({ kind: 'content', page, number: i + 1 }))
  if (flat.length % 2) flat.push({ kind: 'endpaper', back: true })
  return flat
}

export default function Book({ album, single, reduced, onOpenLetter, modalOpen }) {
  const flat = useMemo(() => buildFlat(album), [album])
  const spreadCount = flat.length / 2
  const lastPage = album.pages.length + 1 // índice plano de la última página con contenido

  const [stage, setStage] = useState('closed') // closed | opening | open | closing
  const [pos, setPos] = useState(0)
  const [flip, setFlip] = useState(null) // { from, to }
  const [slide, setSlide] = useState(null) // 'next' | 'prev'
  const bookRef = useRef(null)
  const coverBtnRef = useRef(null)
  const timers = useRef([])

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms))
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const spread = Math.floor(pos / 2)
  const page = Math.min(Math.max(1, pos), lastPage)

  /* ── Abrir / cerrar ───────────────────────────────────── */
  const openAlbum = () => {
    if (stage !== 'closed') return
    setPos(0)
    setSlide(null)
    setStage('opening')
    later(() => {
      setStage('open')
      bookRef.current?.focus({ preventScroll: true })
    }, reduced ? 350 : OPEN_MS)
  }

  const closeAlbum = () => {
    if (stage !== 'open' || flip) return
    setPos(0)
    setSlide(null)
    setStage('closing')
  }

  useEffect(() => {
    if (stage !== 'closing') return
    let r2
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => {
        setStage('closed')
        later(() => coverBtnRef.current?.focus({ preventScroll: true }), 60)
      })
    })
    return () => {
      cancelAnimationFrame(r1)
      cancelAnimationFrame(r2)
    }
  }, [stage])

  /* ── Navegación ───────────────────────────────────────── */
  const goSpread = useCallback(
    (t) => {
      if (flip || t < 0 || t >= spreadCount || t === spread) return
      if (reduced) {
        setSlide(t > spread ? 'next' : 'prev')
        setPos(t * 2)
        return
      }
      setFlip({ from: spread, to: t })
      later(() => {
        setPos(t * 2)
        setFlip(null)
      }, FLIP_MS)
    },
    [flip, spread, spreadCount, reduced],
  )

  const goPage = useCallback(
    (t) => {
      if (t < 1 || t > lastPage || t === page) return
      setSlide(t > page ? 'next' : 'prev')
      setPos(t)
    },
    [page, lastPage],
  )

  const next = useCallback(() => (single ? goPage(page + 1) : goSpread(spread + 1)), [single, goPage, goSpread, page, spread])
  const prev = useCallback(() => (single ? goPage(page - 1) : goSpread(spread - 1)), [single, goPage, goSpread, page, spread])
  const first = useCallback(() => (single ? goPage(1) : goSpread(0)), [single, goPage, goSpread])
  const last = useCallback(() => (single ? goPage(lastPage) : goSpread(spreadCount - 1)), [single, goPage, goSpread, lastPage, spreadCount])

  const chapterStart = (id) => flat.findIndex((f) => f.kind === 'content' && f.page.chapter === id)
  const goChapter = (id) => {
    const idx = chapterStart(id)
    if (idx < 0) return
    single ? goPage(idx) : goSpread(Math.floor(idx / 2))
  }

  const canPrev = single ? page > 1 : spread > 0
  const canNext = single ? page < lastPage : spread < spreadCount - 1

  // Teclado
  useEffect(() => {
    if (stage !== 'open' || modalOpen) return
    const onKey = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev() }
      else if (e.key === 'Home') { e.preventDefault(); first() }
      else if (e.key === 'End') { e.preventDefault(); last() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [stage, modalOpen, next, prev, first, last])

  // Gestos táctiles
  useSwipe(bookRef, { onLeft: next, onRight: prev, enabled: stage === 'open' && !modalOpen })

  /* ── Estado visible ───────────────────────────────────── */
  const visible = single ? [flat[page]] : [flat[spread * 2], flat[spread * 2 + 1]]
  const firstContent = visible.find((f) => f?.kind === 'content')
  const currentChapter = firstContent?.page.chapter ?? null
  const chapterObj = album.chapters.find((c) => c.id === currentChapter)
  const totalPages = album.pages.length

  let status
  if (single) {
    status = flat[page].kind === 'title' ? 'Portadilla' : `Página ${flat[page].number} de ${totalPages}`
  } else {
    const nums = visible.filter((f) => f?.kind === 'content').map((f) => f.number)
    status = nums.length ? `Páginas ${nums.join('–')} de ${totalPages}` : 'Portadilla'
  }
  const announce = chapterObj ? `${status}. Capítulo ${chapterObj.numeral}: ${chapterObj.title}` : status

  /* ── Render de caras ─────────────────────────────────── */
  const sp = (i) => ({ left: flat[i * 2], right: flat[i * 2 + 1] })
  let staticLeft
  let staticRight
  let leaf = null
  if (flip) {
    const A = sp(flip.from)
    const B = sp(flip.to)
    if (flip.to > flip.from) {
      staticLeft = A.left
      staticRight = B.right
      leaf = { front: A.right, back: B.left, dir: 'fwd' }
    } else {
      staticLeft = B.left
      staticRight = A.right
      leaf = { front: B.right, back: A.left, dir: 'back' }
    }
  } else {
    staticLeft = sp(spread).left
    staticRight = sp(spread).right
  }

  const isOpen = stage === 'open'
  const pageProps = { album, onOpenLetter }
  const slideClass = slide ? `slide-${slide}` : ''

  const singleClick = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    if (x < 0.3) prev()
    else if (x > 0.7) next()
  }

  return (
    <>
      <div
        ref={bookRef}
        className={`book stage-${stage}`}
        tabIndex={-1}
        role="region"
        aria-roledescription="álbum"
        aria-label="Álbum de Morphine y Dalliancé"
      >
        <div className="board board-right leather" aria-hidden="true" />
        {!single && <div className={`board board-left leather ${isOpen ? '' : 'is-hidden'}`} aria-hidden="true" />}

        {single ? (
          <div className="half solo">
            <div key={page} className={`face-wrap ${isOpen ? slideClass : ''}`}>
              <Page {...pageProps} desc={flat[page]} side="right" onBackgroundClick={isOpen ? singleClick : null} />
            </div>
          </div>
        ) : (
          <>
            {isOpen && (
              <div className="half left">
                <div key={`l${spread}`} className={`face-wrap ${reduced ? slideClass : ''}`}>
                  <Page {...pageProps} desc={staticLeft} side="left" onBackgroundClick={prev} />
                </div>
              </div>
            )}
            <div className="half right">
              <div key={`r${flip ? 'f' : spread}`} className={`face-wrap ${reduced && isOpen ? slideClass : ''}`}>
                <Page {...pageProps} desc={staticRight} side="right" onBackgroundClick={isOpen ? next : null} />
              </div>
            </div>
            {leaf && (
              <div className={`leaf leaf-${leaf.dir}`} aria-hidden="true">
                <div className="leaf-face front">
                  <Page {...pageProps} desc={leaf.front} side="right" />
                </div>
                <div className="leaf-face back">
                  <Page {...pageProps} desc={leaf.back} side="left" />
                </div>
              </div>
            )}
            {isOpen && <div className="spine-shadow" aria-hidden="true" />}
          </>
        )}

        <Cover album={album} stage={stage} onOpen={openAlbum} buttonRef={coverBtnRef} />

        {isOpen && !single && (
          <div className="ribbons">
            {album.chapters.map((c, i) => (
              <button
                key={c.id}
                className={`ribbon ribbon-${i}`}
                aria-current={c.id === currentChapter ? 'true' : undefined}
                aria-label={`Ir al capítulo ${c.numeral}: ${c.title}`}
                title={c.title}
                onClick={() => goChapter(c.id)}
              >
                <span aria-hidden="true">{c.numeral}</span>
              </button>
            ))}
          </div>
        )}

        {isOpen && (
          <>
            {canPrev && <button className="corner-btn prev" onClick={prev} aria-label="Página anterior" />}
            {canNext && <button className="corner-btn next" onClick={next} aria-label="Página siguiente" />}
          </>
        )}

        {stage === 'closed' && (
          <p className="open-hint" aria-hidden="true">
            Pulsa el álbum para abrirlo
          </p>
        )}
      </div>

      {isOpen && (
        <>
          <button className="close-album" onClick={closeAlbum}>
            <span aria-hidden="true">✕</span> Cerrar álbum
          </button>
          <NavControls
            chapters={album.chapters}
            currentChapter={currentChapter}
            status={status}
            canPrev={canPrev}
            canNext={canNext}
            onPrev={prev}
            onNext={next}
            onChapter={goChapter}
          />
        </>
      )}

      <p className="sr-only" aria-live="polite">
        {isOpen ? announce : ''}
      </p>
    </>
  )
}
