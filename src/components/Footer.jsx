import { Link } from 'react-router-dom'
import Logo from './Logo'
import { CONTACT, LEGAL_LINKS } from '../data/site'

const YEAR = new Date().getFullYear()
const hashLink = (hash) => ({ pathname: '/', hash: `#${hash}` })

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot">
        <div>
          <Logo />
          <p>Websites, web apps, mobile apps, UI/UX and digital marketing.</p>
          <ul className="foot__contact">
            <li>📧 <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li>📞 <a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li>📍 {CONTACT.address}</li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <Link to={hashLink('services')}>Web Development</Link>
          <Link to={hashLink('services')}>Mobile Apps</Link>
          <Link to={hashLink('services')}>UI/UX Design</Link>
          <Link to={hashLink('services')}>Digital Marketing</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to={hashLink('about')}>About</Link>
          <Link to={hashLink('portfolio')}>Portfolio</Link>
          <Link to={hashLink('process')}>Process</Link>
          <Link to={hashLink('contact')}>Contact</Link>
        </div>
        <div>
          <h4>Legal</h4>
          {LEGAL_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </div>
      </div>
      <div className="container copy">
        © {YEAR} THV Technologies. All rights reserved.
        <div className="legal-links">
          {LEGAL_LINKS.map((l, i) => (
            <span key={l.to}>
              {i > 0 && ' · '}
              <Link to={l.to}>{l.label}</Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
