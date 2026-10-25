import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TournamentPopup from "./components/TournamentPopup";

import HomePage from "./pages/HomePage";
import FestivalsPage from "./pages/FestivalsPage";
import AboutPage from "./pages/AboutPage";
import SportsPage from "./pages/SportsPage";
import GalleryPage from "./pages/GalleryPage";
import MembersPage from "./pages/MembersPage";

// Component to scroll to top automatically on route changes
function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 flex flex-col justify-between">
      <TournamentPopup />
      <ScrollToTopOnRoute />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
