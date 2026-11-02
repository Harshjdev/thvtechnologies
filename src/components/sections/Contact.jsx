import { useState } from 'react'
import Reveal from '../Reveal'
import { CONTACT, SERVICE_OPTIONS } from '../../data/site'

const EMPTY = { name: '', email: '', service: SERVICE_OPTIONS[0], msg: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [note, setNote] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Front-end only: connect to your backend / email service (Formspree, EmailJS, own API...).
  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !/\S+@\S+\.\S+/.test(form.email) || !form.msg.trim()) {
      setNote({ ok: false, text: 'Please fill in all fields with a valid email.' })
      return
    }
    setNote({ ok: true, text: 'Thanks! We will contact you within 24 hours.' })
    setForm(EMPTY)
  }

  return (
    <section className="section" id="contact">
      <div className="container grid2">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2>Let's talk about your project</h2>
          <p>Fill in the form and our team will get back to you shortly.</p>
          <ul className="contact">
            <li>📧 <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li>📞 <a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li>📍 {CONTACT.address}</li>
          </ul>
        </Reveal>
        <Reveal as="form" className="form" onSubmit={onSubmit} noValidate>
          <div className="row">
            <label>Name
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
            </label>
            <label>Email
              <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" required />
            </label>
          </div>
          <label>Service
            <select name="service" value={form.service} onChange={onChange}>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label>Project details
            <textarea name="msg" rows="4" value={form.msg} onChange={onChange} placeholder="Tell us what you need..." required />
          </label>
          <button className="btn" type="submit">Send Message</button>
          <p className="note" style={{ color: note?.ok ? '#4ade80' : '#f87171' }} role="status">{note?.text}</p>
        </Reveal>
      </div>
    </section>
  )
}
