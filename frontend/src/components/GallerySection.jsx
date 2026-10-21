import imgFootball2 from '../assets/images/football_tournament_img2.jpg'
import imgCarom from '../assets/images/carom_sports_image.jpg'
import imgIndependence from '../assets/images/independance_day_image.jpg'
import imgKids1 from '../assets/images/kids_with_certificates.jpg'
import imgKids2 from '../assets/images/kids_with_their_winning_certificates.jpg'
import imgTribute from '../assets/images/tribute_to_zubeen_garg.jpg'
import imgSummer from '../assets/images/summer_vacation_free_tution_time.jpg'
import imgClubBoys from '../assets/images/club_boys.jpg'
import imgPractice from '../assets/images/practice_time.jpg'

const galleryImages = [
  { src: imgClubBoys, alt: 'Club boys together' },
  { src: imgFootball2, alt: 'Football tournament' },
  { src: imgCarom, alt: 'Carom sports event' },
  { src: imgIndependence, alt: 'Independence Day celebration' },
  { src: imgKids1, alt: 'Kids with certificates' },
  { src: imgKids2, alt: 'Kids with winning certificates' },
  { src: imgTribute, alt: 'Tribute to Zubeen Garg' },
  { src: imgSummer, alt: 'Summer vacation free tuition' },
  { src: imgPractice, alt: 'Practice session' },
]

// Gallery section: 1 large image on left + 4 grid images on right (desktop)
// Mobile: all stacked

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Gallery</p>

        {/* Row 1: 1 large + 4 small grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Left: 1 large image with camera badge */}
          <div className="relative">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-64 md:h-full min-h-[260px] rounded-sm object-cover"
            />
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
            {galleryImages.slice(1, 5).map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="h-36 md:h-full w-full rounded-sm object-cover"
              />
            ))}
          </div>
        </div>

        {/* Row 2: remaining 4 images in a 4-col strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {galleryImages.slice(5).map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="h-36 w-full rounded-sm object-cover"
            />
          ))}
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
