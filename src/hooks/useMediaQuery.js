import { useEffect, useRef, useState } from 'react'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setMatches(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [query])
  return matches
}

export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

/** Detecta deslizamientos horizontales con el dedo. */
export function useSwipe(ref, { onLeft, onRight, enabled = true }) {
  const handlers = useRef({ onLeft, onRight })
  handlers.current = { onLeft, onRight }

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    let x0 = null
    let y0 = 0
    let t0 = 0
    const start = (e) => {
      if (e.touches.length !== 1) return
      x0 = e.touches[0].clientX
      y0 = e.touches[0].clientY
      t0 = Date.now()
    }
    const end = (e) => {
      if (x0 === null) return
      const t = e.changedTouches[0]
      const dx = t.clientX - x0
      const dy = t.clientY - y0
      x0 = null
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4 && Date.now() - t0 < 800) {
        if (dx < 0) handlers.current.onLeft?.()
        else handlers.current.onRight?.()
      }
    }
    el.addEventListener('touchstart', start, { passive: true })
    el.addEventListener('touchend', end, { passive: true })
    return () => {
      el.removeEventListener('touchstart', start)
      el.removeEventListener('touchend', end)
    }
  }, [ref, enabled])
}
