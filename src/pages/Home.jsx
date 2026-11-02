import Hero from '../components/sections/Hero'
import Marquee from '../components/sections/Marquee'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import WhyUs from '../components/sections/WhyUs'
import Portfolio from '../components/sections/Portfolio'
import Process from '../components/sections/Process'
import Industries from '../components/sections/Industries'
import Pricing from '../components/sections/Pricing'
import Faq from '../components/sections/Faq'
import CtaBanner from '../components/sections/CtaBanner'
import Contact from '../components/sections/Contact'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle('THV Technologies – Software, Web & Mobile App Development')
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <Industries />
      <Pricing />
      <Faq />
      <CtaBanner />
      <Contact />
    </main>
  )
}
