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
  const [showTopBar, setShowTopBar] = useState(true)
  const nameTimer = useRef(null)

  // Hide top bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowTopBar(false)
      } else {
        setShowTopBar(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          size === 'large'
            ? 'text-xl sm:text-2xl'
            : 'text-lg sm:text-xl md:text-2xl'
        }`}
        style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
      >
        {main}
      </span>
      <span
        className={`font-semibold tracking-widest uppercase text-orange-500 mt-0.5 ${
          size === 'large'
            ? 'text-xs sm:text-sm'
            : 'text-[0.65rem] sm:text-xs'
        }`}
      >
        {sub}
      </span>
    </div>
  )

  return (
    <>
      {/* ── Top Bar (Orange) - Hides on scroll ── */}
      <div
        className={`w-full bg-orange-500 text-white transition-all duration-300 overflow-hidden ${
          showTopBar ? 'max-h-12 opacity-100 py-1.5' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between text-xs gap-4">
          {/* Left: Location Pin + Marquee (right to left) */}
          <div className="flex items-center gap-2 overflow-hidden flex-1 min-w-0">
            <div className="flex items-center gap-1 flex-shrink-0 z-10 bg-orange-500 pr-1 font-semibold text-white">
              <svg
                className="w-4 h-4 flex-shrink-0 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="hidden sm:inline">Location:</span>
            </div>

            {/* Marquee Track moving from Right to Left */}
            <div className="overflow-hidden flex-1 relative whitespace-nowrap select-none">
              <div className="topbar-marquee-track items-center">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="inline-block tracking-wide font-medium mr-12">
                    Gobindapur Majuli Gaon, Golaghat, Assam, 785613 &nbsp;•&nbsp;
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Instagram & Facebook Icons (Increased size) */}
          <div className="flex items-center gap-4 flex-shrink-0 z-10 bg-orange-500 pl-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ankuronyouthclub/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-white/80 hover:scale-115 transition-transform p-0.5"
            >
              <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/BidyutBikash647"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-white/80 hover:scale-115 transition-transform p-0.5"
            >
              <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
        {/* ── Main bar ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">

          {/* Logo + animated club name */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-2 no-underline min-w-0">
            <img
              src={clubLogo}
              alt="Ankuran Youth Club logo"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain flex-shrink-0"
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
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <img
              src={clubLogo}
              alt="Ankuran Youth Club logo"
              className="h-12 w-12 object-contain flex-shrink-0"
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
