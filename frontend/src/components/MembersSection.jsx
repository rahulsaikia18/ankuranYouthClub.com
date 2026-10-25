import imgKidsWinning from '../assets/images/kids_with_their_winning_certificates.jpg'

const memberStats = [
  { label: 'Active members', value: 'Present' },
  { label: 'New joiners this year', value: 'Numbers' },
  { label: 'Female members', value: 'Numbers' },
]

export default function MembersSection() {
  return (
    <section id="members" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Big stat + member list */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <p className="text-7xl font-black text-gray-900">52</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Total members</p>
            </div>
            <ul className="divide-y divide-gray-100 mb-6">
              {memberStats.map((s) => (
                <li key={s.label} className="py-3 flex items-center justify-between">
                  <span className="text-sm text-gray-600">{s.label}</span>
                  <span className="text-sm font-semibold text-gray-900">{s.value}</span>
                </li>
              ))}
            </ul>
            <a
              href="#join"
              className="inline-block bg-orange-500 text-white text-xs font-semibold px-5 py-2.5 hover:bg-orange-600 transition-colors"
            >
              JOIN US →
            </a>
          </div>

          {/* Right: Winning kids image + Testimonial quote */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-sm h-52">
              <img
                src={imgKidsWinning}
                alt="Kids with winning certificates"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-50 p-8 border-l-4 border-orange-500">
              <blockquote>
                <p className="text-xl md:text-2xl font-light italic text-gray-700 leading-relaxed">
                  "Because of the club, our children have a ground and a reason to stay in the village."
                </p>
                <footer className="mt-4 text-xs text-gray-400">— A local resident</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
