import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="THV Technologies home">
      <img className="logo__img" src="/images/logo.svg" alt="" width="34" height="34" />
      THV Technologies
    </Link>
  )
}
