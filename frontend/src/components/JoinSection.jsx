export default function JoinSection() {
  return (
    <section id="join" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: QR code placeholder + text */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            {/* QR placeholder */}
            <div className="w-20 h-20 bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Join the club</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Help us bring the community together</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Scan the QR code or fill out the form to become a member of Ankuran Youth Club.
                Membership is open to all local youth aged 15–35.
              </p>
            </div>
          </div>

          {/* Right: Location */}
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-sm text-gray-700 font-medium">Find us</span>
            </div>
            <p className="text-sm text-gray-500 text-center md:text-right leading-relaxed">
              Ankuran Youth Club Ground,<br />
              Village Road, Locality,<br />
              West Bengal, India
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-orange-500 hover:text-orange-600 transition-colors"
            >
              Open in Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
