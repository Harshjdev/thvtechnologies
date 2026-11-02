import { Link } from 'react-router-dom'
import useTyped from '../../hooks/useTyped'
import useCountUp from '../../hooks/useCountUp'
import { STATS, TYPED_WORDS } from '../../data/site'

function Stat({ value, label }) {
  const n = useCountUp(value)
  return (
    <div>
      <b>{n}</b>+<small>{label}</small>
    </div>
  )
}

export default function Hero() {
  const word = useTyped(TYPED_WORDS)
  return (
    <section className="hero" id="home">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="container hero__in">
        <div className="hero__text">
          <span className="pill">🚀 Full-cycle software development company</span>
          <h1>
            We build <span className="grad">{word}</span>
            <br />
            that grow your business.
          </h1>
          <p>
            From idea to launch — THV Technologies designs and develops websites, web apps, mobile apps and digital
            marketing solutions that look great and perform even better.
          </p>
          <div className="hero__cta">
            <Link to={{ pathname: '/', hash: '#contact' }} className="btn">Start Your Project</Link>
            <Link to={{ pathname: '/', hash: '#portfolio' }} className="btn btn--ghost">View Portfolio →</Link>
          </div>
          <div className="trust">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="window">
            <div className="window__bar"><i></i><i></i><i></i></div>
            <pre>
              <code>
                <span className="c1">const</span> <span className="c2">project</span> = {'{'}
                {'\n  '}<span className="c3">type</span>: <span className="c4">"Web + Mobile"</span>,
                {'\n  '}<span className="c3">design</span>: <span className="c4">"UI/UX first"</span>,
                {'\n  '}<span className="c3">quality</span>: <span className="c4">"Tested"</span>,
                {'\n  '}<span className="c3">launch</span>: <span className="c4">"On time 🚀"</span>
                {'\n};\n\n'}
                <span className="c1">await</span> THV.<span className="c2">build</span>(project);
              </code>
            </pre>
          </div>
          <div className="float f1">📱 Mobile Apps</div>
          <div className="float f2">🎨 UI/UX Design</div>
          <div className="float f3">📈 SEO Growth</div>
        </div>
      </div>
    </section>
  )
}
