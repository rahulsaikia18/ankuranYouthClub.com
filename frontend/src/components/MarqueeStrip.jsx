export default function MarqueeStrip() {
  const text =
    "Welcome to Ankuran Youth Club · Sports · Culture · Service · Unity · আংকুৰণ যুৱ সংঘ · ";

  return (
    <div className="bg-blue-600 overflow-hidden whitespace-nowrap select-none">
      <div className="marquee-track py-2.5">
        {/* Duplicate the text several times so the strip never shows a gap */}
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="inline-block text-white text-sm font-semibold tracking-wide mx-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
