import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import SectionHead from '../SectionHead'
import { PLANS } from '../../data/site'

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead
          eyebrow="Engagement models"
          title="Flexible ways to work with us"
          text="Pick the model that fits your budget and stage. Final pricing depends on scope — get a free estimate."
        />
        <div className="cards three">
          {PLANS.map((p) => (
            <Reveal as="article" className={`card plan${p.featured ? ' featured' : ''}`} key={p.name}>
              {p.featured && <span className="badge">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="tagline">{p.tagline}</p>
              <ul className="ticks">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to={{ pathname: '/', hash: '#contact' }} className={`btn${p.ghost ? ' btn--ghost' : ''}`}>
                {p.cta}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
