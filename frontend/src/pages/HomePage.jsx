import HeroSection from "../components/HeroSection";
import MarqueeStrip from "../components/MarqueeStrip";
import LatestEventCarousel from "../components/LatestEventCarousel";
import AboutSection from "../components/AboutSection";
import HistorySection from "../components/HistorySection";
import ActivitiesSection from "../components/ActivitiesSection";
import EventsSection from "../components/EventsSection";
import GallerySection from "../components/GallerySection";
import MembersSection from "../components/MembersSection";
import JoinSection from "../components/JoinSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <LatestEventCarousel />
      <AboutSection />
      {/* History section placed right below About */}
      <HistorySection />
      <ActivitiesSection />
      <EventsSection />
      <GallerySection />
      <MembersSection />
      <JoinSection />
    </>
  );
}
