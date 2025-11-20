import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function JourneyMap() {
  const nodes = useMemo(() => [
    { id: 1, label: 'Start', x: 0 },
    { id: 2, label: 'First Entry', x: 20 },
    { id: 3, label: '7-day Streak', x: 45 },
    { id: 4, label: 'Milestone', x: 70 },
    { id: 5, label: 'Present', x: 100 },
  ], [])

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight">Your warm Journey Map</h2>
          <p className="text-brand-dark/70 mt-2">A softly glowing path that grows with your moments.</p>
        </div>

        <div className="relative rounded-3xl p-8 bg-brand-beige/70 border border-brand-accent/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
          </div>

          <div className="relative">
            <svg viewBox="0 0 100 20" className="w-full h-40">
              <path d="M0,15 C20,5 40,25 60,10 80,-2 90,30 100,15" stroke="#C6A98F" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="-mt-24 grid grid-cols-5">
              {nodes.map((n, i) => (
                <motion.div key={n.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="grid place-items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-dark shadow-[0_0_0_6px_rgba(198,169,143,0.25)]"></div>
                  <div className="mt-2 text-xs text-brand-dark/70">{n.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
