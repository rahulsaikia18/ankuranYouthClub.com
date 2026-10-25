import { useState, useEffect, useRef } from 'react'
import clubLogo from '../assets/club_logo.png'

const navLinks = [
  { label: 'Home',    href: '#' },
  { label: 'Festivals', href: '#festivals' },
  { label: 'About',   href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'History', href: '#history' },
  { label: 'Members', href: '#members' },
]

const clubNames = [
  { main: 'Ankuran',  sub: 'Youth Club' },
  { main: 'আংকুৰণ',  sub: 'যুৱ সংঘ'   },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [nameIndex, setNameIndex] = useState(0)
  const [namePhase, setNamePhase] = useState('enter') // 'enter' | 'exit'
  const nameTimer = useRef(null)

  // Exactly identical to HeroSection animation cycle
  useEffect(() => {
    const cycle = () => {
      setNamePhase('exit')
      nameTimer.current = setTimeout(() => {
        setNameIndex((p) => (p + 1) % clubNames.length)
        setNamePhase('enter')
        nameTimer.current = setTimeout(cycle, 3000)
      }, 420) // matches flipOut duration
    }
    nameTimer.current = setTimeout(cycle, 3000)
    return () => clearTimeout(nameTimer.current)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const { main, sub } = clubNames[nameIndex]

  // Reusable animated name block using the exact same classes as HeroSection
  const AnimatedName = ({ size = 'default' }) => (
    <div
      key={nameIndex}
      className={`flex flex-col leading-tight select-none ${
        namePhase === 'enter' ? 'hero-name-enter' : 'hero-name-exit'
      }`}
    >
      <span
        className={`font-black tracking-tight text-gray-900 leading-none ${
          size === 'large' ? 'text-xl' : 'text-lg'
        }`}
        style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
      >
        {main}
      </span>
      <span
        className={`font-semibold tracking-widest uppercase text-orange-500 mt-0.5 ${
          size === 'large' ? 'text-xs' : 'text-[0.65rem]'
        }`}
      >
        {sub}
      </span>
    </div>
  )

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
        {/* ── Main bar ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">

          {/* Logo + animated club name */}
          <a href="#" className="flex items-center gap-3 no-underline">
            <img
              src={clubLogo}
              alt="Ankuran Youth Club logo"
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <AnimatedName />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-gray-600 hover:text-orange-500 transition-colors font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Join CTA */}
          <a
            href="#join"
            className="hidden md:inline-block bg-orange-500 text-white text-xs font-semibold px-5 py-2.5 hover:bg-orange-600 transition-colors"
          >
            JOIN NOW
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-2 z-[60] relative"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </header>

      {/* ── Off-canvas backdrop ── */}
      <div
        className={`fixed inset-0 bg-black/40 z-[55] md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ── Off-canvas drawer (slides from right) ── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[58] shadow-2xl md:hidden
                    flex flex-col transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header: logo + animated name + close */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src={clubLogo}
              alt="Ankuran Youth Club logo"
              className="h-10 w-10 object-contain flex-shrink-0"
            />
            <AnimatedName size="large" />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col gap-1 px-4 py-6 overflow-y-auto">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-700
                         hover:bg-orange-50 hover:text-orange-500 transition-colors"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(24px)',
                transition: `opacity 0.3s ease ${0.1 + i * 0.04}s, transform 0.3s ease ${0.1 + i * 0.04}s`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-8">
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="block w-full bg-orange-500 text-white text-sm font-semibold px-4 py-3
                       text-center rounded-lg hover:bg-orange-600 transition-colors"
          >
            JOIN NOW
          </a>
          <p className="text-[0.6rem] text-gray-400 text-center mt-3 tracking-wide">
            © {new Date().getFullYear()} Ankuran Youth Club
          </p>
        </div>
      </div>
    </>
  )
}
