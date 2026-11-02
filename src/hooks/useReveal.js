import { useEffect, useRef, useState } from 'react'

/** Returns [ref, shown]; `shown` flips to true once the element scrolls into view. */
export default function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [shown, setShown] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, shown]
}
