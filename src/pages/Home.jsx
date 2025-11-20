import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import JourneyMap from '../components/JourneyMap'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-beige">
      <Navbar/>
      <main>
        <Hero/>
        <FeatureCards/>
        <JourneyMap/>
      </main>
      <Footer/>
    </div>
  )
}
