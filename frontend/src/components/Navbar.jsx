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
  const [visible,   setVisible]   = useState(true)   // drives fade
  const timerRef = useRef(null)

  useEffect(() => {
    const cycle = () => {
      // fade out
      setVisible(false)
      timerRef.current = setTimeout(() => {
        setNameIndex((p) => (p + 1) % clubNames.length)
        setVisible(true)          // fade in with new name
        timerRef.current = setTimeout(cycle, 3000)
      }, 350)
    }
    timerRef.current = setTimeout(cycle, 3000)
    return () => clearTimeout(timerRef.current)
  }, [])

  const { main, sub } = clubNames[nameIndex]

  return (
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
          {/* Animated text */}
          <div
            className="flex flex-col leading-tight overflow-hidden"
            style={{
              opacity:    visible ? 1 : 0,
              transform:  visible ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            <span className="text-lg font-black tracking-tight text-gray-900 leading-none">
              {main}
            </span>
            <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-orange-500 mt-0.5">
              {sub}
            </span>
          </div>
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
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-800 transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-800 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-800 transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-700 hover:text-orange-500 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 text-center hover:bg-orange-600 transition-colors mt-2"
            >
              JOIN NOW
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
