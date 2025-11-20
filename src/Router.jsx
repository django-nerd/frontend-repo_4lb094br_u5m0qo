import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Team from './pages/Team'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
