import { useState, useEffect } from 'react';
import posterImg from '../assets/images/new_tournament_poster.jpg';

export default function TournamentPopup() {
  const [isOpen, setIsOpen] = useState(true);

  // Close on Escape key and lock body scroll when popup is active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tournament Announcement"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-orange-200/60 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button on Top Right */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-2.5 right-2.5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          aria-label="Close popup"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Poster Image (Portrait) */}
        <div className="relative bg-neutral-950 flex items-center justify-center max-h-[60vh] sm:max-h-[66vh] overflow-hidden">
          <img
            src={posterImg}
            alt="Tournament Poster"
            className="w-full h-auto max-h-[60vh] sm:max-h-[66vh] object-contain select-none block"
          />
        </div>

        {/* Notice Info Card */}
        <div className="p-3.5 sm:p-4.5 text-center bg-gradient-to-b from-white to-orange-50/70 border-t border-orange-100 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-orange-100 text-orange-700 tracking-wide uppercase mb-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            Notice
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-snug">
            Registration Link Coming Soon!
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xs sm:max-w-sm">
            Stay tuned! The online registration link will be activated shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
