import imgIndependence from '../assets/images/independance_day_image.jpg'

const leftEvents = [
  { label: 'Club organizes its annual sports day', href: '#' },
  { label: 'Football team wins district championship', href: '#' },
  { label: 'Blood donation camp organized by the club', href: '#' },
]

const rightEvents = [
  { num: '02', label: 'Upcoming events this month', sub: 'Register now to participate in the upcoming club events.' },
  { num: '25', label: 'Past events this year', sub: 'Browse through the highlights of what we\'ve done so far.' },
  { num: '200+', label: 'People served through service drives', sub: 'Community outreach programs impacting hundreds of lives.' },
]

export default function EventsSection() {
  return (
    <section id="festivals" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: News/Notices */}
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Latest updates</p>
            {/* Independence Day image banner */}
            <div className="overflow-hidden rounded-sm h-36 mb-6">
              <img
                src={imgIndependence}
                alt="Independence Day celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <ul className="divide-y divide-gray-100">
              {leftEvents.map((ev, i) => (
                <li key={i} className="py-4 flex items-center justify-between gap-4 group">
                  <p className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors">{ev.label}</p>
                  <a href={ev.href} className="text-orange-500 text-lg leading-none flex-shrink-0">›</a>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-block mt-4 text-xs text-orange-500 border border-orange-500 px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors">
              All updates
            </a>
          </div>

          {/* Right: Upcoming & past stats */}
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">At a glance</p>
            <ul className="divide-y divide-gray-100">
              {rightEvents.map((ev, i) => (
                <li key={i} className="py-4 flex items-start gap-5 group">
                  <span className="text-2xl font-black text-orange-500 w-12 flex-shrink-0">{ev.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{ev.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{ev.sub}</p>
                  </div>
                  <a href="#" className="ml-auto text-orange-500 text-lg flex-shrink-0">›</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
