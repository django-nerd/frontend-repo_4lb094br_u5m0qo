import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const team = [
  { name: 'Ava Hart', role: 'Founder & Product', img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop' },
  { name: 'Milo Chen', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop' },
  { name: 'Noor Ali', role: 'Engineering', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Leo Park', role: 'Community', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight">Meet the team</h1>
          <p className="mt-2 text-brand-dark/75">A small, warm crew crafting MineO with care.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div key={m.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded-2xl overflow-hidden bg-brand-beige/80 border border-brand-accent/30 group">
              <div className="relative">
                <img src={m.img} alt={m.name} className="h-60 w-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition"/>
              </div>
              <div className="p-4">
                <p className="font-semibold text-brand-dark">{m.name}</p>
                <p className="text-sm text-brand-dark/70">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  )
}
