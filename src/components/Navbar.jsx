import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/team', label: 'Team' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-brand-beige/80 border-b border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-brand-dark text-brand-beige flex items-center justify-center font-bold tracking-tight">
              M
            </div>
            <span className="text-brand-dark font-semibold text-lg tracking-tight group-hover:opacity-80 transition">MineO</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-brand-dark' : 'text-brand-dark/70 hover:text-brand-dark'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/" className="ml-2 inline-flex items-center justify-center rounded-2xl px-4 py-2 bg-brand-dark text-brand-beige shadow-[0_0_0_0_rgba(0,0,0,0)] hover:bg-brand-beige hover:text-brand-dark border border-brand-dark hover:border-brand-dark transition shadow-brand-accent/30 hover:shadow-[0_8px_30px_rgba(58,58,58,0.25)]">
              Install App
            </Link>
          </nav>

          <button onClick={() => setOpen((o) => !o)} className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-brand-dark hover:bg-brand-soft">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-accent/20 bg-brand-beige">
          <div className="px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block rounded-xl px-3 py-2 ${isActive ? 'bg-brand-soft text-brand-dark' : 'text-brand-dark/80 hover:bg-brand-soft hover:text-brand-dark'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link onClick={() => setOpen(false)} to="/" className="mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-2 bg-brand-dark text-brand-beige hover:bg-brand-beige hover:text-brand-dark border border-brand-dark transition">
              Install App
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
