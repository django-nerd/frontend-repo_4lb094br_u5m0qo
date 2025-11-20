import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-brand-soft to-brand-accent/40 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-brand-soft to-brand-accent/30 blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/70 text-brand-dark px-3 py-1 text-xs border border-brand-accent/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-dark"></span>
              Now available on iOS & Android
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-brand-dark leading-[1.1]">
              Grow softly, daily — with a journaling-inspired companion
            </h1>
            <p className="mt-4 text-brand-dark/80 text-lg">
              MineO blends mindful journaling, habit tracking, and a playful journey map so your progress feels warm, intentional, and beautifully yours.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#" className="rounded-2xl px-6 py-3 bg-brand-dark text-brand-beige border border-brand-dark hover:bg-brand-beige hover:text-brand-dark transition shadow-[0_12px_40px_rgba(58,58,58,0.25)]">Install App</a>
              <a href="#features" className="rounded-2xl px-6 py-3 bg-brand-soft text-brand-dark border border-brand-accent/40 hover:border-brand-dark transition">Explore features</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-soft/50 to-brand-accent/30 blur-2xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <PhoneMock className="translate-y-6"/>
              <PhoneMock/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PhoneMock({ className = '' }) {
  return (
    <div className={`aspect-[9/19] rounded-[2rem] bg-brand-beige border-4 border-brand-dark/90 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.2),0_30px_80px_rgba(58,58,58,0.25)] ${className}`}>
      <div className="h-8 rounded-t-[1.5rem] bg-brand-dark/90 flex items-center justify-center text-[10px] text-brand-beige tracking-widest">MINEO</div>
      <div className="p-4 grid gap-3">
        <div className="h-24 rounded-xl bg-gradient-to-br from-brand-soft to-brand-accent/30"></div>
        <div className="h-14 rounded-xl bg-brand-soft"></div>
        <div className="h-14 rounded-xl bg-brand-soft"></div>
        <div className="h-24 rounded-xl bg-brand-soft"></div>
      </div>
    </div>
  )
}
