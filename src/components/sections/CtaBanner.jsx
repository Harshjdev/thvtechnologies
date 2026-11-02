import { Link } from 'react-router-dom'
import Reveal from '../Reveal'

export default function CtaBanner() {
  return (
    <section className="cta">
      <Reveal className="container">
        <h2>Have an idea? Let's build it together.</h2>
        <p>Tell us about your project and get a free consultation within 24 hours.</p>
        <Link to={{ pathname: '/', hash: '#contact' }} className="btn btn--light">Get a Free Quote</Link>
      </Reveal>
    </section>
  )
}
