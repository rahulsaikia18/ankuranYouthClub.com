import MembersSection from "../components/MembersSection";
import JoinSection from "../components/JoinSection";
import imgBoys from "../assets/images/club_boys.jpg";
import imgTraditional from "../assets/images/club_members_group_image_in_traditional_dress.jpg";

export default function MembersPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-2">
          Our Family
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Club <span className="text-orange-500">Members</span>
        </h1>
        <p className="text-sm text-gray-500 mt-3 max-w-2xl">
          Meet the dedicated energetic youth powering Ankuran Youth Club and discover how you can become part of our movement.
        </p>
      </div>

      {/* Member Highlights Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <img src={imgBoys} alt="Club Boys" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Youth Volunteer Wing</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Our young volunteers lead flood relief, community cleaning drives, blood donation camps, and event organizing across the district.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <img src={imgTraditional} alt="Cultural Wing" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cultural & Heritage Wing</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Responsible for organizing Bihu Husori, traditional dress exhibitions, musical nights, and folk dance workshops for kids.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Members Stats & Testimonial Section */}
      <MembersSection />

      {/* Join Section */}
      <JoinSection />
    </div>
  );
}
