import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/HomeComponents/Hero";
import NewsTicker from "../components/HomeComponents/NewsTicker";
import AboutSection from "../components/HomeComponents/AboutSection";
import GallerySection from "../components/HomeComponents/GallerySection";
import MediaCoverage from "../components/HomeComponents/MediaCoverage";
import VideoGallery from "../components/HomeComponents/VideoGallery";
import CompaniesVisited from "../components/HomeComponents/CompaniesVisited";
import PlacementStats from "../components/HomeComponents/PlacementStats";
import Testimonials from "../components/HomeComponents/Testimonials";


const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar /> {/* Keep Navbar here, right after Header */}
      <Hero />
      <NewsTicker />
      <AboutSection />
      <GallerySection />
      <MediaCoverage />
      <VideoGallery />
      <CompaniesVisited />
      <PlacementStats />
      <Testimonials />
      {/* Footer is already in App.jsx, so you could remove it here if you want it only once */}
    </div>
  );
};

export default Home;