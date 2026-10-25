import imgClubBoys from "../assets/icons8-user-96.png";
import imgPractice from "../assets/icons8-user-96.png";

const stats = [
  { value: "52", label: "Members" },
  { value: "24", label: "Events held" },
  { value: "11", label: "Years" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-6 text-center md:text-left">
          About us
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Large A drop cap + paragraph + stats */}
          <div className="text-center md:text-left">
            <div className="flex gap-4 items-start mb-6 justify-center md:justify-start">
              <p className="text-sm text-gray-600 leading-relaxed mt-1 text-justify">
                <span className="text-6xl font-black text-orange-500 leading-none select-none float-left mr-2">
                  A
                </span>
                nkuran is a social, cultural and community-welfare club formed
                by the youth of the local area. It was established with the
                mission to foster unity, promote cultural activities, and serve
                the community. Over the years, the club has hosted numerous
                festivals, sporting events, and social service programs that
                have made a positive impact on the neighborhood. We believe in
                the power of youth and their ability to bring about lasting
                social change.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-6 mb-8 justify-center md:justify-start">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-black text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* President quote box */}
            <div className="border border-gray-200 p-5 max-w-xs mx-auto md:mx-0">
              <p className="text-lg font-light text-gray-700 leading-snug italic">
                "Because of the club, our children have a ground and a reason to stay in the village."
              </p>
            </div>
          </div>

          {/* Right: President + Vice president images */}
          <div className="grid grid-cols-2 gap-4">
            {/* President */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative group">
                {/* Anime-style glowing shadow */}
                <div className="absolute -inset-3 rounded-lg bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400 opacity-50 blur-xl group-hover:opacity-75 animate-anime-glow transition-opacity duration-500" />
                <div className="relative w-full h-48 rounded-sm overflow-hidden ring-2 ring-orange-400/30">
                  <img
                    src={imgClubBoys}
                    alt="Club members"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                Dijen Bora
              </p>
              <p className="text-xs text-orange-500 uppercase tracking-wider">
                PRESIDENT
              </p>
            </div>

            {/* Secretary */}
            <div className="flex flex-col items-center gap-2 mt-8">
              <div className="relative group">
                {/* Anime-style glowing shadow */}
                <div className="absolute -inset-3 rounded-lg bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 opacity-50 blur-xl group-hover:opacity-75 animate-anime-glow-alt transition-opacity duration-500" />
                <div className="relative w-full h-48 rounded-sm overflow-hidden ring-2 ring-indigo-400/30">
                  <img
                    src={imgPractice}
                    alt="Practice session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                Omprokas Saikia
              </p>
              <p className="text-xs text-orange-500 uppercase tracking-wider">
                Secreary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
