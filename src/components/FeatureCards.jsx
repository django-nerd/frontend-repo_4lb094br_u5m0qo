import { motion } from 'framer-motion'
import { Sparkles, NotebookPen, Map, HeartHandshake, Search, Tags } from 'lucide-react'

const items = [
  {
    icon: NotebookPen,
    title: 'Daily Journal',
    desc: 'A cozy, scrapbook-style space to write, paste photos, and reflect with prompts.',
  },
  {
    icon: Sparkles,
    title: 'Habit Tracker',
    desc: 'Soft streaks, gentle reminders, and a calm overview of your routines.',
  },
  {
    icon: Map,
    title: 'Journey Map',
    desc: 'A visual path that grows with you — celebrate milestones along a warm timeline.',
  },
  {
    icon: Tags,
    title: 'Tags & Categories',
    desc: 'Organize entries and habits with elegant labels and filtered views.',
  },
  {
    icon: HeartHandshake,
    title: 'Emotional Reflection',
    desc: 'Track moods with gentle palettes and nuanced feelings, not just numbers.',
  },
  {
    icon: Search,
    title: 'Smart Search',
    desc: 'Find moments, tags, or reflections instantly with a soothing search flow.',
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-brand-soft to-brand-accent/30 blur-2xl opacity-60"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight">All your mindful tools in one place</h2>
          <p className="text-brand-dark/70 mt-2">Designed to be warm, minimal, and softly animated.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl bg-brand-beige/70 border border-brand-accent/30 p-5 hover:shadow-[0_12px_40px_rgba(198,169,143,0.25)] transition relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-brand-soft to-brand-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand-dark flex items-center justify-center shadow">{<item.icon className="w-5 h-5"/>}</div>
              <h3 className="mt-4 font-semibold text-brand-dark">{item.title}</h3>
              <p className="text-sm text-brand-dark/75 mt-1">{item.desc}</p>
              <div className="mt-4 text-sm text-brand-dark/60">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
