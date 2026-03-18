import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/about/About";
import EventsSection from "./components/event/Event";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
    </>
  );
}

export default App;
