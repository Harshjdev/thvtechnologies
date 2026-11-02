import { CONTACT } from '../data/site'

export default function WhatsAppButton() {
  return (
    <a className="wa" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      💬
    </a>
  )
}
