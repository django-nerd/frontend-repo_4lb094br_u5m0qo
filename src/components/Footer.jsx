export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-dark text-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-xl bg-brand-beige text-brand-dark flex items-center justify-center font-bold">M</div>
            <span className="font-semibold">MineO</span>
          </div>
          <p className="text-brand-beige/80 text-sm">A warm, journaling-inspired self-growth app to help you reflect, track habits, and map your journey.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold mb-2">Explore</p>
          <ul className="space-y-1 text-brand-beige/80">
            <li>Home</li>
            <li>Features</li>
            <li>Team</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Stay in the loop</p>
          <p className="text-brand-beige/80 text-sm">Join our newsletter for product updates and mindful prompts.</p>
          <div className="mt-3 flex gap-2">
            <input placeholder="Email" className="flex-1 rounded-xl px-3 py-2 bg-brand-soft text-brand-dark placeholder:text-brand-dark/50 focus:outline-none"/>
            <button className="rounded-2xl px-4 py-2 bg-brand-beige text-brand-dark hover:bg-brand-soft transition">Notify me</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-beige/70">© {new Date().getFullYear()} MineO. All rights reserved.</div>
    </footer>
  )
}
