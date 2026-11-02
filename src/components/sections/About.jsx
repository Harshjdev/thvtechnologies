import Reveal from '../Reveal'
import { ABOUT_CARDS, ABOUT_POINTS } from '../../data/site'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container grid2">
        <Reveal>
          <span className="eyebrow">About us</span>
          <h2>A team of engineers, designers & marketers under one roof</h2>
          <p>
            THV Technologies is a software development company helping startups, SMEs and enterprises turn ideas into
            reliable digital products. We combine clean engineering, thoughtful design and data-driven marketing so your
            product doesn't just launch — it grows.
          </p>
          <ul className="ticks">
            {ABOUT_POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="cards-mini">
          {ABOUT_CARDS.map((c) => (
            <div className="mini" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
