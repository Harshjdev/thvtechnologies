import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS } from '../data/site'

export default function Navbar() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const solid = stuck || pathname !== '/'

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${solid ? ' stuck' : ''}`}>
      <div className="container nav__in">
        <Logo />
        <nav className={`menu${open ? ' open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <Link key={l.hash} to={{ pathname: '/', hash: `#${l.hash}` }} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link to={{ pathname: '/', hash: '#contact' }} className="btn btn--sm" onClick={close}>
            Get a Quote
          </Link>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span>
        </button>
      </div>
    </header>
  )
}
