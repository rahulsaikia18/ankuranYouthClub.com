import imgFootball1 from "../assets/images/football_tournament_image.jpg";
import imgFootball2 from "../assets/images/football_tournament_img2.jpg";
import imgCarom from "../assets/images/carom_sports_image.jpg";
import imgSportsDay from "../assets/images/sports_day_image.jpg";
import imgPractice from "../assets/images/practice_time.jpg";

const sportsData = [
  {
    title: "Annual Football Championship",
    season: "Winter Tournament",
    desc: "Our marquee event featuring over 16 local and district teams. Ankuran Youth Club ground transforms into a high-energy arena where young athletes showcase teamwork, stamina, and competitive spirit.",
    img: imgFootball1,
    tag: "Football",
  },
  {
    title: "Youth Football League & Training",
    season: "Year-round Coaching",
    desc: "Grassroots football camps for local village kids and teenagers, providing basic fitness, team discipline, sports kits, and training under senior players.",
    img: imgFootball2,
    tag: "Football Academy",
  },
  {
    title: "Indoor Carrom & Table Championships",
    season: "Monsoon League",
    desc: "Singles and doubles carrom tournaments organized inside the club house for people of all ages, promoting sharp focus, hand-eye coordination, and indoor sports passion.",
    img: imgCarom,
    tag: "Carrom",
  },
  {
    title: "Annual Sports Day & Athletics",
    season: "January - Annual Event",
    desc: "100m sprint, relay race, high jump, tug-of-war, and community race events for children, girls, women, and seniors, celebrating active living and community camaraderie.",
    img: imgSportsDay,
    tag: "Athletics",
  },
  {
    title: "Daily Practice & Fitness Drills",
    season: "Daily Evenings",
    desc: "Club members and locality children assemble daily at 4:30 PM for group workout drills, warm-ups, football practice, and cricket matches.",
    img: imgPractice,
    tag: "Fitness",
  },
];

export default function SportsPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-2">
          Athletics & Fitness
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Sports & <span className="text-orange-500">Outdoor Activities</span>
        </h1>
        <p className="text-sm text-gray-500 mt-3 max-w-2xl">
          Fostering physical vitality, teamwork, and championship mentality among youth through football, carrom, cricket, and annual sports meets.
        </p>
      </div>

      {/* Grid of Sports */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsData.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {s.tag}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-orange-500 font-semibold mb-1">
                    {s.season}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
