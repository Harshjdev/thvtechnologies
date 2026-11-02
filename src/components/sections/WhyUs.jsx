import Reveal from '../Reveal'
import SectionHead from '../SectionHead'
import { WHY_US } from '../../data/site'

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <SectionHead
          eyebrow="Why THV"
          title="Why businesses choose us"
          text="We don't just write code — we act as your product partner from the first sketch to long-term growth."
        />
        <div className="cards three">
          {WHY_US.map((w) => (
            <Reveal as="article" className="card" key={w.title}>
              <div className="ico">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
