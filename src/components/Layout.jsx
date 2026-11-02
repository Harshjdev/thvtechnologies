import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollManager from './ScrollManager'

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
