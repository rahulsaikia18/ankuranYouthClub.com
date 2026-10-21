import imgCarom from '../assets/images/carom_sports_image.jpg'
import imgFootball from '../assets/images/football_tournament_image.jpg'
import imgSummer from '../assets/images/summer_vacation_free_tution_time.jpg'

const categories = [
  {
    id: 'sports',
    title: 'Sports',
    sub: 'Cricket, Football, Carrom & more',
    href: '#sports',
    img: imgCarom,
    imgAlt: 'Carom sports event',
  },
  {
    id: 'festivals',
    title: 'Festivals',
    sub: 'Durga Puja, Saraswati Puja & more',
    href: '#festivals',
    img: imgFootball,
    imgAlt: 'Football tournament',
  },
  {
    id: 'service',
    title: 'Service',
    sub: 'Blood donation, Tree plantation & more',
    href: '#service',
    img: imgSummer,
    imgAlt: 'Summer free tuition service',
  },
]

export default function ActivitiesSection() {
  return (
    <section id="service" className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-10">What we do</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group">
              {/* Activity image */}
              <div className="overflow-hidden rounded-sm mb-4 h-44">
                <img
                  src={cat.img}
                  alt={cat.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{cat.title}</h3>
              <p className="text-xs text-gray-400 mb-4">{cat.sub}</p>
              <a
                href={cat.href}
                className="text-xs text-orange-500 underline underline-offset-2 hover:text-orange-600 transition-colors"
              >
                View all →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
