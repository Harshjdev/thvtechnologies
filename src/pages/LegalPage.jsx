import { Link, Navigate } from 'react-router-dom'
import RichText from '../components/RichText'
import usePageTitle from '../hooks/usePageTitle'
import { CONTACT_EMAIL, UPDATED, legalPages } from '../data/legal'

export default function LegalPage({ slug }) {
  const page = legalPages[slug]
  usePageTitle(page ? `${page.title} – THV Technologies` : 'THV Technologies')
  if (!page) return <Navigate to="/404" replace />

  return (
    <main className="legal">
      <div className="container narrow">
        <span className="eyebrow">Legal</span>
        <h1>{page.title}</h1>
        <p className="upd">Last updated: {UPDATED}</p>
        <p className="lead">{page.intro}</p>

        <nav className="toc" aria-label="Contents">
          <b>Contents</b>
          <ol>
            {page.sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s${i + 1}`}>{s.heading}</a>
              </li>
            ))}
          </ol>
        </nav>

        {page.sections.map((s, i) => (
          <section key={s.heading} id={`s${i + 1}`}>
            <h2>{i + 1}. {s.heading}</h2>
            {s.blocks.map((b, j) =>
              b.p ? (
                <RichText key={j} html={b.p} />
              ) : (
                <ul key={j}>
                  {b.ul.map((li, k) => (
                    <RichText as="li" key={k} html={li} />
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}

        <div className="legal-contact">
          <h2>Contact us</h2>
          <p>
            Questions about this document? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use our{' '}
            <Link to={{ pathname: '/', hash: '#contact' }}>contact form</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}
