import GallerySection from "../components/GallerySection";

export default function GalleryPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-6">
        <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-2">
          Memories & Moments
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Photo <span className="text-orange-500">Gallery</span>
        </h1>
        <p className="text-sm text-gray-500 mt-3 max-w-2xl">
          Captured glimpses from our sports championships, cultural festivals, social service drives, and community milestones.
        </p>
      </div>

      <GallerySection />
    </div>
  );
}
