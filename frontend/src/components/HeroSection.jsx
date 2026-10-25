import { useState, useEffect, useRef } from "react";

import img1 from "../assets/images/club_flying_flag.jpg";
import img2 from "../assets/images/football_tournament_image.jpg";
import img3 from "../assets/images/sports_day_image.jpg";
import img4 from "../assets/images/bihu_dance.jpg";
import img5 from "../assets/images/club_members_group_image_in_traditional_dress.jpg";

const heroImages = [
  { src: img1, caption: "Proud to fly our flag" },
  { src: img2, caption: "Football tournament" },
  { src: img3, caption: "Annual sports day" },
  { src: img4, caption: "Bihu cultural celebration" },
  { src: img5, caption: "We are in Traditional dress" },
];

// Two language versions of the club name
const clubNames = [
  { main: "Ankuran", sub: "Youth Club", lang: "en" },
  { main: "আংকুৰণ", sub: "যুৱ সংঘ", lang: "as" },
];

export default function HeroSection() {
  const [imgIndex, setImgIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [namePhase, setNamePhase] = useState("enter"); // 'enter' | 'exit'
  const nameTimer = useRef(null);

  // Auto-change background image every 3.5 s
  useEffect(() => {
    const t = setInterval(() => {
      setImgIndex((p) => (p + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // Animate club name: show for 3 s, exit 0.4 s, swap, enter 0.55 s
  useEffect(() => {
    const cycle = () => {
      // Start exit animation
      setNamePhase("exit");
      nameTimer.current = setTimeout(() => {
        // Swap name, start enter animation
        setNameIndex((p) => (p + 1) % clubNames.length);
        setNamePhase("enter");
        // Wait full display time before next cycle
        nameTimer.current = setTimeout(cycle, 3000);
      }, 420); // matches flipOut duration
    };
    nameTimer.current = setTimeout(cycle, 3000); // first display pause
    return () => clearTimeout(nameTimer.current);
  }, []);

  const { main, sub } = clubNames[nameIndex];

  return (
    <section className="relative min-h-[44vh] md:min-h-[88vh] flex flex-col overflow-x-hidden">
      {/* ── Full-bleed image stack (covers entire hero) ── */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.caption}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === imgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* ── Smooth left-to-right gradient overlay (text side → transparent) ── */}
      <div
        className="absolute inset-0  z-10 pointer-events-none
                      bg-gradient-to-r
                      from-black/80 via-black/50 to-transparent"
      />

      {/* ── Bottom gradient scrim ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 z-10 pointer-events-none
                      bg-gradient-to-t from-black/50 to-transparent"
      />

      {/* ── Text content (left half) ── */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="w-full md:w-1/2 px-8 sm:px-14 lg:px-20 py-16 text-center md:text-left">
          <p className="text-xs text-orange-300 uppercase tracking-[0.3em] mb-4 font-medium">
            Welcome to
          </p>

          {/* Animated club name block */}
          <div
            key={nameIndex}
            className={
              namePhase === "enter" ? "hero-name-enter" : "hero-name-exit"
            }
          >
            {/* Main name — gradient text */}

            <h1
              className="font-black leading-[1.3] tracking-tight
             bg-gradient-to-r from-white via-orange-100 to-orange-400
             bg-clip-text text-transparent"
              style={{
                fontFamily: "'Noto Sans Bengali', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
                paddingBottom: "0.12em",
              }}
            >
              {main}
            </h1>

            {/* Sub name */}
            <h2
              className="font-bold italic mt-2 mb-6
                         bg-gradient-to-r from-orange-400 to-orange-500
                         bg-clip-text text-transparent"
              style={{ fontSize: "clamp(1.2rem, 3.5vw, 2.25rem)" }}
            >
              {sub}
            </h2>
          </div>

          <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-10">
            A social, cultural, and service-oriented youth club dedicated to
            bringing people together through sports, festivals, and voluntary
            service.
          </p>

          {/* Image slide dots */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === imgIndex
                    ? "bg-orange-500 w-8"
                    : "bg-white/40 w-1.5 hover:bg-white/70"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Current image caption */}
          <p className="mt-3 text-xs text-white/40 italic">
            {heroImages[imgIndex].caption}
          </p>
        </div>
      </div>
    </section>
  );
}
