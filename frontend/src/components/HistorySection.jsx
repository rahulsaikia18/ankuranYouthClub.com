const historyItems = [
  { year: '2012', label: 'Club was established with a small group of young members.' },
  { year: '2015', label: 'First Durga Puja organized by the club in the locality.' },
  { year: '2023', label: 'Hosted the inter-ward cricket championship for the 3rd time.' },
]

const bloodGroups = [
  { group: 'O−', count: '4' },
  { group: 'A', count: '8' },
  { group: 'B+', count: 'Donors' },
  { group: 'AB+', count: 'Donors' },
]

export default function HistorySection() {
  return (
    <section id="history" className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Timeline */}
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Our history</p>
            <ul className="space-y-6">
              {historyItems.map((item) => (
                <li key={item.year} className="flex gap-6 items-start">
                  <span className="text-orange-500 font-black text-sm w-10 flex-shrink-0">{item.year}</span>
                  <div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Blood group donors */}
          {/* <div className="text-center md:text-left">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Blood donors in the club</p>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed max-w-sm mx-auto md:mx-0">
              Adding one more sentence about it if needed. Our members actively participate in
              blood donation drives serving the local community.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {bloodGroups.map((bg) => (
                <div key={bg.group} className="border border-gray-200 p-4">
                  <p className="text-3xl font-black text-gray-900">{bg.group}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">{bg.count}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
