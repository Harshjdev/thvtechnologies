import { TECH_MARQUEE } from '../../data/site'

export default function Marquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__in">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
