const categories = [
  {
    id: 'sports',
    title: 'Sports',
    sub: 'Cricket, Football, Carrom & more',
    href: '#sports',
  },
  {
    id: 'festivals',
    title: 'Festivals',
    sub: 'Durga Puja, Saraswati Puja & more',
    href: '#festivals',
  },
  {
    id: 'service',
    title: 'Service',
    sub: 'Blood donation, Tree plantation & more',
    href: '#service',
  },
]

export default function ActivitiesSection() {
  return (
    <section id="service" className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-10">What we do</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {categories.map((cat) => (
            <div key={cat.id} className="px-0 sm:px-8 first:pl-0 last:pr-0 py-6 sm:py-0">
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
