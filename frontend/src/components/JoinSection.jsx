export default function JoinSection() {
  const mapUrl = "https://maps.app.goo.gl/T1LM72npYwgYKdSp6";

  return (
    <section id="location" className="relative w-full bg-gray-100 overflow-hidden">
      {/* Full-width Google Map Embed */}
      <div className="w-full h-80 sm:h-96 md:h-[420px] relative">
        <iframe
          title="Ankuran Youth Club Location"
          src="https://maps.google.com/maps?q=Gobindapur+Majuli+Gaon,+Golaghat,+Assam+785613&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 filter contrast-105"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        {/* Rectangular button floating on map */}
        <div className="absolute bottom-6 right-6 z-10">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
