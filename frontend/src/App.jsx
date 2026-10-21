import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ActivitiesSection from './components/ActivitiesSection'
import EventsSection from './components/EventsSection'
import GallerySection from './components/GallerySection'
import HistorySection from './components/HistorySection'
import MembersSection from './components/MembersSection'
import JoinSection from './components/JoinSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <EventsSection />
        <GallerySection />
        <HistorySection />
        <MembersSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  )
}

export default App