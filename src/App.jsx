import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/about/About";
import EventsSection from "./components/event/Event";
import GallerySection from "./components/gallery/Gallery";
import DonateSection from "./components/donate/Donate";
import ContactSection from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      <GallerySection />
      <DonateSection />
      <ContactSection />
    </>
  );
}

export default App;
