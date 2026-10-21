import imgClubBoys from '../assets/images/club_boys.jpg'
import imgPractice from '../assets/images/practice_time.jpg'

const stats = [
  { value: '52', label: 'Members' },
  { value: '24', label: 'Events held' },
  { value: '11', label: 'Years' },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">About us</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Large A drop cap + paragraph + stats */}
          <div>
            <div className="flex gap-4 items-start mb-6">
              {/* Drop-cap A */}
              <span className="text-6xl font-black text-orange-500 leading-none mt-1 select-none">A</span>
              <p className="text-sm text-gray-600 leading-relaxed">
                nkuran is a social, cultural and community-welfare club formed by the youth of the
                local area. It was established with the mission to foster unity, promote cultural
                activities, and serve the community. Over the years, the club has hosted numerous
                festivals, sporting events, and social service programs that have made a positive
                impact on the neighborhood. We believe in the power of youth and their ability to
                bring about lasting social change.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-black text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* President quote box */}
            <div className="border border-gray-200 p-5 max-w-xs">
              <p className="text-lg font-light text-gray-700 leading-snug italic">
                "One line from the president about why the club exists"
              </p>
            </div>
          </div>

          {/* Right: President + Vice president images */}
          <div className="grid grid-cols-2 gap-4">
            {/* President */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-full h-48 rounded-sm overflow-hidden">
                <img src={imgClubBoys} alt="Club members" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Full name</p>
              <p className="text-xs text-orange-500 uppercase tracking-wider">PRESIDENT</p>
            </div>

            {/* Vice president */}
            <div className="flex flex-col items-center gap-2 mt-8">
              <div className="w-full h-48 rounded-sm overflow-hidden">
                <img src={imgPractice} alt="Practice session" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Full name</p>
              <p className="text-xs text-orange-500 uppercase tracking-wider">VICE PRESIDENT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
