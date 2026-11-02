import Reveal from '../Reveal'
import SectionHead from '../SectionHead'
import { FAQS } from '../../data/site'

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container narrow">
        <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
        {FAQS.map((f) => (
          <Reveal as="details" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
