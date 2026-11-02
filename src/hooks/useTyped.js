import { useEffect, useState } from 'react'

/** Typewriter effect cycling through `words`. */
export default function useTyped(words) {
  const [text, setText] = useState('')

  useEffect(() => {
    let w = 0
    let c = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = words[w]
      setText(word.slice(0, c))
      if (!deleting && c === word.length) {
        deleting = true
        timer = setTimeout(tick, 1400)
        return
      }
      if (deleting && c === 0) {
        deleting = false
        w = (w + 1) % words.length
      }
      c += deleting ? -1 : 1
      timer = setTimeout(tick, deleting ? 45 : 90)
    }

    tick()
    return () => clearTimeout(timer)
  }, [words])

  return text
}
