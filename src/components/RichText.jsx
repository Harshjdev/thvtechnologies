import { useNavigate } from 'react-router-dom'

/**
 * Renders trusted, static inline HTML (<b>, <a>) from src/data/legal.js.
 * Internal links ("/refund", "/#contact") are routed through React Router.
 */
export default function RichText({ html, as: Tag = 'p' }) {
  const navigate = useNavigate()

  const onClick = (e) => {
    const a = e.target.closest('a')
    const href = a?.getAttribute('href')
    if (href && href.startsWith('/')) {
      e.preventDefault()
      navigate(href)
    }
  }

  return <Tag onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
