import Reveal from '../Reveal'
import SectionHead from '../SectionHead'
import { INDUSTRIES } from '../../data/site'

export default function Industries() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Industries" title="Experience across sectors" />
        <Reveal className="chips">
          {INDUSTRIES.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
