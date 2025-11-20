import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar/>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight">Contact us</h1>
          <p className="mt-2 text-brand-dark/75">We’d love to hear from you. No backend required — this is a demo form.</p>
        </div>

        <motion.form initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} onSubmit={(e)=>{e.preventDefault(); alert('Thanks for reaching out!')}} className="mt-10 rounded-3xl p-6 bg-brand-beige/80 border border-brand-accent/30 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-brand-dark/80">Name</label>
              <input required className="mt-1 w-full rounded-xl px-3 py-2 bg-brand-soft text-brand-dark placeholder:text-brand-dark/50 focus:outline-none" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-sm text-brand-dark/80">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl px-3 py-2 bg-brand-soft text-brand-dark placeholder:text-brand-dark/50 focus:outline-none" placeholder="you@mineo.app"/>
            </div>
          </div>
          <div>
            <label className="text-sm text-brand-dark/80">Message</label>
            <textarea required rows="5" className="mt-1 w-full rounded-xl px-3 py-2 bg-brand-soft text-brand-dark placeholder:text-brand-dark/50 focus:outline-none" placeholder="Tell us about your story..."/>
          </div>
          <button className="mt-2 w-full md:w-auto rounded-2xl px-6 py-3 bg-brand-dark text-brand-beige hover:bg-brand-beige hover:text-brand-dark border border-brand-dark transition">Send message</button>
        </motion.form>
      </main>
      <Footer/>
    </div>
  )
}
