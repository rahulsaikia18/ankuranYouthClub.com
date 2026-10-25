import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular perimeter calculation: r = 20 => C = 2 * PI * 20 ~= 125.66
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-500 shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group focus:outline-none"
      >
        {/* SVG Circular Progress Border */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 48 48"
        >
          <defs>
            {/* Gradient for subtle wave of light orange into vibrant orange */}
            <linearGradient id="orangeProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          {/* Background track circle (soft light orange) */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="#ffedd5"
            strokeWidth="3.5"
          />

          {/* Animated active progress border circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="url(#orangeProgressGrad)"
            strokeWidth="3.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Up Arrow Icon */}
        <svg
          className="w-5 h-5 text-orange-500 group-hover:-translate-y-0.5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
