import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar/>
      <main className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-brand-soft to-brand-accent/30 blur-3xl opacity-70"/>
        </div>
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight">About MineO</motion.h1>
          <p className="mt-4 text-brand-dark/80">MineO was born from a simple desire: make self-growth feel warm, playful, and deeply personal. We blended the mindful ritual of journaling with gentle habit tracking and a visual journey map so progress feels like a story — not a chore.</p>

          <div className="mt-10 grid gap-6">
            <div className="rounded-2xl p-6 bg-brand-beige/80 border border-brand-accent/30">
              <h3 className="font-semibold text-brand-dark">Mission</h3>
              <p className="text-brand-dark/75 text-sm mt-1">Help people grow with kindness — through small, reflective moments that add up.</p>
            </div>
            <div className="rounded-2xl p-6 bg-brand-beige/80 border border-brand-accent/30">
              <h3 className="font-semibold text-brand-dark">Vision</h3>
              <p className="text-brand-dark/75 text-sm mt-1">A world where self-improvement feels soft, cozy, and sustainable. No burnout, just presence.</p>
            </div>
            <div className="rounded-2xl p-6 bg-brand-beige/80 border border-brand-accent/30">
              <h3 className="font-semibold text-brand-dark">Brand Identity</h3>
              <p className="text-brand-dark/75 text-sm mt-1">Warm beiges, soft browns, gentle glows — inspired by notebooks, sunlight, and quiet mornings. Typography pairs Plus Jakarta/Inter for clear, modern voice.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
