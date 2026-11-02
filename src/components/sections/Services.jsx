import Reveal from '../Reveal'
import SectionHead from '../SectionHead'
import { SERVICES } from '../../data/site'

export default function Services() {
  return (
    <section className="section alt" id="services">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title="Services built for modern businesses"
          text="Everything you need to design, build, launch and promote your digital product."
        />
        <div className="cards">
          {SERVICES.map((s) => (
            <Reveal as="article" className="card" key={s.title}>
              <div className="ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
