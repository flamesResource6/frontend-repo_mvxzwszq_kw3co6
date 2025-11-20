import { useState, useEffect } from 'react'
import { Menu, X, Wallet, Github, Linkedin } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-slate-950/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-500 animate-pulse" />
          <span className="font-semibold tracking-tight">web3folio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white">
              <Linkedin size={18} />
            </a>
            <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
              <Wallet size={16} />
              <span>Connect</span>
            </button>
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200/90 hover:text-white">
                {l.label}
              </a>
            ))}
            <button className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
              <Wallet size={16} />
              <span>Connect</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
