import { useEffect, useRef, useState } from "react";

import img1 from "../assets/images/football_tournament_image.jpg";
import img2 from "../assets/images/bihu_dance.jpg";
import img3 from "../assets/images/independance_day_image.jpg";
import img4 from "../assets/images/sports_day_image.jpg";
import img5 from "../assets/images/kids_with_certificates.jpg";
import img6 from "../assets/images/football_tournament_img2.jpg";
import img7 from "../assets/images/club_members_group_image_in_traditional_dress.jpg";
import img8 from "../assets/images/summer_vacation_free_tution_time.jpg";

const eventImages = [
  { src: img1, caption: "Football Tournament 2024" },
  { src: img2, caption: "Bihu Dance Celebration" },
  { src: img3, caption: "Independence Day" },
  { src: img4, caption: "Annual Sports Day" },
  { src: img5, caption: "Certificate Distribution" },
  { src: img6, caption: "Football Championship" },
  { src: img7, caption: "Traditional Dress Day" },
  { src: img8, caption: "Summer Free Tuition" },
];

export default function LatestEventCarousel() {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const timerRef = useRef(null);

  // Track screen width
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const perView = isDesktop ? 2 : 1;
  const total = eventImages.length;

  // Auto-advance every 3 seconds — infinite loop
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [total]);

  // Build visible slides (supports wrapping around the end)
  const visibleIndices = [];
  for (let i = 0; i < perView; i++) {
    visibleIndices.push((current + i) % total);
  }

  return (
    <section className="bg-gray-50 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section heading */}
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 text-center md:text-left">
          Latest Events
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
          Our{" "}
          <span className="text-orange-500">recent Activities</span>
        </h2>

        {/* Carousel viewport */}
        <div className="relative">
          <div
            className={`grid gap-5 ${
              isDesktop ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {visibleIndices.map((idx) => (
              <div
                key={`${idx}-${current}`}
                className="event-slide relative rounded-lg overflow-hidden shadow-lg aspect-[16/10]"
              >
                <img
                  src={eventImages[idx].src}
                  alt={eventImages[idx].caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    {eventImages[idx].caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {eventImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-orange-500 w-6"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
