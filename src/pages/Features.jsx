import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { NotebookPen, CalendarCheck2, MapPinned, Tags, Search, Heart } from 'lucide-react'

const blocks = [
  { icon: NotebookPen, title: 'Scrapbook Journal', desc: 'Mixed-media entries with photos, stickers, and prompts in a warm paper-like canvas.' },
  { icon: CalendarCheck2, title: 'Habit Tracker', desc: 'Gentle streaks, soft calendars, and flexible habits that adapt to your rhythm.' },
  { icon: MapPinned, title: 'Journey Map', desc: 'A softly glowing path marking milestones and moments you add along the way.' },
  { icon: Tags, title: 'Tags & Categories', desc: 'Organize entries with elegant tags and switch views by mood, habit, or topic.' },
  { icon: Heart, title: 'Emotional Reflection', desc: 'Track moods with nuanced palettes, journaling prompts, and insights over time.' },
  { icon: Search, title: 'Search & Filters', desc: 'Instantly find entries, tags, or feelings with a calm and focused search flow.' },
]

export default function Features() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar/>
      <main className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-brand-soft to-brand-accent/30 blur-3xl opacity-70"/>
          <div className="absolute bottom-10 right-10 w-[22rem] h-[22rem] rounded-full bg-gradient-to-tr from-brand-soft to-brand-accent/30 blur-3xl opacity-70"/>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight">
            Features that feel mindful
          </motion.h1>
          <p className="mt-3 text-brand-dark/75 max-w-2xl">Every interaction in MineO is designed to be soft and intentional — from journaling to tracking your steps forward.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((b, i) => (
              <motion.div key={b.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded-2xl bg-brand-beige/80 border border-brand-accent/30 p-6 hover:shadow-[0_12px_40px_rgba(198,169,143,0.25)] transition">
                <div className="w-11 h-11 rounded-2xl bg-brand-soft text-brand-dark grid place-items-center">
                  <b.icon className="w-5 h-5"/>
                </div>
                <h3 className="mt-4 font-semibold text-brand-dark">{b.title}</h3>
                <p className="text-sm text-brand-dark/75 mt-1">{b.desc}</p>
                <div className="mt-4 flex gap-2">
                  <button className="rounded-xl px-3 py-2 text-xs bg-brand-dark text-brand-beige hover:bg-brand-beige hover:text-brand-dark border border-brand-dark transition">Try it</button>
                  <button className="rounded-xl px-3 py-2 text-xs bg-brand-soft text-brand-dark border border-brand-accent/40 hover:border-brand-dark transition">Learn more</button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl p-8 bg-brand-soft border border-brand-accent/30">
            <h2 className="text-2xl font-semibold text-brand-dark">Journey Map live preview</h2>
            <p className="text-brand-dark/70">Add moments to a warm, glowing path.</p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-4 bg-brand-beige/80 border border-brand-accent/30">
                <p className="text-sm text-brand-dark/70">Add a Moment</p>
                <input placeholder="Title" className="mt-2 w-full rounded-xl px-3 py-2 bg-brand-soft text-brand-dark placeholder:text-brand-dark/50 focus:outline-none"/>
                <button className="mt-3 w-full rounded-xl px-3 py-2 bg-brand-dark text-brand-beige hover:bg-brand-beige hover:text-brand-dark border border-brand-dark transition">Add</button>
              </div>
              <div className="md:col-span-2 rounded-2xl p-4 bg-brand-beige/80 border border-brand-accent/30">
                <svg viewBox="0 0 100 20" className="w-full h-40">
                  <path d="M0,15 C20,5 40,25 60,10 80,-2 90,30 100,15" stroke="#C6A98F" strokeWidth="1.5" fill="none" />
                </svg>
                <div className="-mt-24 grid grid-cols-5">
                  {["Start","Entry","Streak","Milestone","Now"].map((l)=> (
                    <div key={l} className="grid place-items-center">
                      <div className="w-4 h-4 rounded-full bg-brand-dark shadow-[0_0_0_6px_rgba(198,169,143,0.25)]"></div>
                      <div className="mt-2 text-xs text-brand-dark/70">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
