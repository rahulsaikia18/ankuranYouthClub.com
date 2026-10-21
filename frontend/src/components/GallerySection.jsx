// Gallery section: 1 large image on left + 4 grid images on right (desktop)
// Mobile: all stacked

function ImagePlaceholder({ className = '' }) {
  return (
    <div className={`bg-orange-100 flex items-center justify-center ${className}`}>
      <svg className="w-10 h-10 text-orange-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 18h16.5M3.75 4.5h16.5A1.5 1.5 0 0121.75 6v12a1.5 1.5 0 01-1.5 1.5H3.75A1.5 1.5 0 012.25 18V6a1.5 1.5 0 011.5-1.5z" />
      </svg>
    </div>
  )
}

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Gallery</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: 1 large image with icon badge */}
          <div className="relative">
            <ImagePlaceholder className="w-full h-64 md:h-full min-h-[260px] rounded-sm" />
            {/* Camera icon */}
            <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
            </div>
          </div>

          {/* Right: 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder className="h-36 md:h-full rounded-sm" />
            <ImagePlaceholder className="h-36 md:h-full rounded-sm" />
            <ImagePlaceholder className="h-36 md:h-full rounded-sm" />
            <ImagePlaceholder className="h-36 md:h-full rounded-sm" />
          </div>
        </div>

        {/* Captions row */}
        <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
          <span>Club events &amp; memories</span>
          <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
            View full gallery →
          </a>
        </div>
      </div>
    </section>
  )
}
