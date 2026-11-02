import Reveal from '../Reveal'
import SectionHead from '../SectionHead'
import { PROCESS } from '../../data/site'

export default function Process() {
  return (
    <section className="section alt" id="process">
      <div className="container">
        <SectionHead eyebrow="How we work" title="A simple, transparent process" />
        <div className="steps">
          {PROCESS.map((s) => (
            <Reveal className="step" key={s.no}>
              <b>{s.no}</b>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
