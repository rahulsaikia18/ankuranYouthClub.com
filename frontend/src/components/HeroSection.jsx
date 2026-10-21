export default function HeroSection() {
  return (
    <section className="bg-white pt-8 pb-0">
      {/* Orange full-width nav strip */}
      <div className="bg-orange-500 text-white text-xs flex items-center justify-between px-4 sm:px-8 lg:px-16 h-9 max-w-full">
        <div className="flex items-center gap-6 md:gap-10">
          <span className="font-semibold tracking-wide">Home</span>
          <span className="hidden sm:inline">Festivals</span>
          <span className="hidden sm:inline">Service</span>
          <span className="hidden sm:inline">—</span>
        </div>
        <span className="font-bold tracking-widest uppercase text-xs border border-white px-3 py-1">
          JOIN NOW
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Welcome to</p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight">
            Ankuran
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 italic mt-1 mb-6">
            youth club
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Ankuran is a social, cultural, and service-oriented youth club based in a local community,
            dedicated to bringing people together through sports, festivals, and voluntary service.
          </p>
        </div>

        {/* Right: Image placeholder with orange accent */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80">
            {/* Orange background accent block */}
            <div className="absolute top-4 right-0 w-5/6 h-full bg-orange-500 rounded-sm z-0" />
            {/* Main image box */}
            <div className="absolute top-0 left-0 w-5/6 h-full bg-orange-100 z-10 flex items-center justify-center rounded-sm overflow-hidden">
              {/* Image placeholder icon */}
              <svg className="w-12 h-12 text-orange-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 18h16.5M3.75 4.5h16.5A1.5 1.5 0 0121.75 6v12a1.5 1.5 0 01-1.5 1.5H3.75A1.5 1.5 0 012.25 18V6a1.5 1.5 0 011.5-1.5z" />
              </svg>
            </div>
          </div>
          {/* Small caption */}
          <p className="absolute bottom-0 right-2 text-xs text-gray-400">Est. 1990</p>
        </div>
      </div>
    </section>
  )
}
