import AboutSection from "../components/AboutSection";
import HistorySection from "../components/HistorySection";

export default function AboutPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-2">
          Who We Are
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          About Our <span className="text-orange-500">Club</span>
        </h1>
        <p className="text-sm text-gray-500 mt-3 max-w-2xl">
          Learn about our journey, leadership, core values, and the rich history of Ankuran Youth Club.
        </p>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* History Section directly below About */}
      <HistorySection />
    </div>
  );
}
