import SectionHead from '../SectionHead'
import { PORTFOLIO } from '../../data/site'

function WorkCard({ w }) {
  const primary = w.links[0]
  return (
    <article className="work">
      {w.type === 'shot' ? (
        <a className="work__img shot" href={primary.url} target="_blank" rel="noopener noreferrer">
          <img src={`/images/portfolio/${w.image}`} alt={`${w.name} website screenshot`} loading="lazy" />
          <em>Visit ↗</em>
        </a>
      ) : null}
      <div className="work__body">
        <small>{w.kind}</small>
        <h3>{w.name}</h3>
        <p>{w.desc}</p>
        <div className="tags">
          {w.tags.map((t) => (
            <i key={t}>{t}</i>
          ))}
        </div>
        {w.links.map((l) => (
          <a key={l.url} className="more" href={l.url} target="_blank" rel="noopener noreferrer">
            {l.label} →
          </a>
        ))}
      </div>
    </article>
  )
}

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <SectionHead
          eyebrow="Our portfolio"
          title="Recent work we're proud of"
          text="Live websites and apps we've designed and developed. Click any project to visit it."
        />
        <div className="works">
          {PORTFOLIO.map((w) => (
            <WorkCard key={w.name} w={w} />
          ))}
        </div>
      </div>
    </section>
  )
}
