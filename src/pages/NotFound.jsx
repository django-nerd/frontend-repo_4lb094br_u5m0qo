import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound(){
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar/>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 text-center">
        <h1 className="text-5xl font-semibold text-brand-dark">404</h1>
        <p className="mt-2 text-brand-dark/70">This page wandered off your Journey Map.</p>
        <a href="/" className="inline-block mt-6 rounded-2xl px-6 py-3 bg-brand-dark text-brand-beige hover:bg-brand-beige hover:text-brand-dark border border-brand-dark transition">Go home</a>
      </main>
      <Footer/>
    </div>
  )
}
