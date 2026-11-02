import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function Blog() {
  usePageTitle('Blogs – THV Technologies')
  return (
    <main className="legal not-found">
      <div>
        <h1 className="grad">Coming Soon</h1>
        <h2>Our blog is on the way</h2>
        <p>We&rsquo;re working on helpful articles about web, app and digital growth. Check back soon.</p>
        <Link className="btn" to="/">Back to Home</Link>
      </div>
    </main>
  )
}
