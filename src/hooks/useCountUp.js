import { useEffect, useState } from 'react'

/** Counts from 0 up to `target` on mount. */
export default function useCountUp(target) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let v = 0
    let frame
    const step = () => {
      v = Math.min(v + Math.ceil(target / 60), target)
      setValue(v)
      if (v < target) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return value
}
