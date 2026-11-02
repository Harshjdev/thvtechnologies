import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found – THV Technologies')
  return (
    <main className="legal not-found">
      <div>
        <h1 className="grad">404</h1>
        <h2>Page not found</h2>
        <p>The page you’re looking for doesn’t exist or has moved.</p>
        <Link className="btn" to="/">Back to Home</Link>
      </div>
    </main>
  )
}
