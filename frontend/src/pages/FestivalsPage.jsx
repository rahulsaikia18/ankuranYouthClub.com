import imgBihu from "../assets/images/bihu_dance.jpg";
import imgIndependence from "../assets/images/independance_day_image.jpg";
import imgTribute from "../assets/images/tribute_to_zubeen_garg.jpg";
import imgTraditional from "../assets/images/club_members_group_image_in_traditional_dress.jpg";
import EventsSection from "../components/EventsSection";

const festivalsData = [
  {
    title: "Rongali & Bhogali Bihu Celebrations",
    date: "Every Assamese New Year & Magh",
    desc: "Bihu is the heartbeat of Assam. Every year our club organizes vibrant cultural evenings featuring traditional Husori, Bihu dance competitions, Dhol badon, and traditional Assamese feasts uniting villagers of all age groups.",
    img: imgBihu,
    tag: "Cultural Festival",
  },
  {
    title: "Independence & Republic Day",
    date: "August 15 & January 26",
    desc: "National flag hoisting, patriotic parade, community breakfast, sports day ceremonies, and cultural performances by local school children and club members to honor the nation.",
    img: imgIndependence,
    tag: "National Day",
  },
  {
    title: "Cultural Tributes & Musical Evenings",
    date: "Annual Special Events",
    desc: "Special cultural tributes and musical nights celebrating cultural icons like Zubeen Garg and traditional Assamese artists, inspiring our younger generation to preserve folk heritage.",
    img: imgTribute,
    tag: "Music & Culture",
  },
  {
    title: "Traditional Heritage Day",
    date: "Community Day",
    desc: "A day dedicated to wearing traditional attire, cooking ethnic recipes, conducting folklore storytelling, and preserving indigenous handicrafts and traditions.",
    img: imgTraditional,
    tag: "Heritage",
  },
];

export default function FestivalsPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-2">
          Cultural Heritage & Celebrations
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Festivals & <span className="text-orange-500">Cultural Events</span>
        </h1>
        <p className="text-sm text-gray-500 mt-3 max-w-2xl">
          Celebrating the spirit of Assam, national pride, and local traditions through art, dance, and joyous community gatherings.
        </p>
      </div>

      {/* Grid of Festivals */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {festivalsData.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {f.tag}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-orange-500 font-semibold mb-1">
                    {f.date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events announcements */}
      <EventsSection />
    </div>
  );
}
