import { useEffect, useState } from "react";
import { CTA } from "./componets/bottomCta";
import { Footer } from "./componets/footer";
import { Hero } from "./componets/Hero";
import { Intro } from "./componets/Intro";
import { Navbar } from "./componets/Navbar";
import { TiltCards } from "./componets/titlcard";

function App() {
  return (
    <div className="text-white relative w-full min-h-screen bg-primary ">
      <Navbar />
      <Hero />
      <Intro />
      <TiltCards />
      <CTA />
      <Footer />
    </div >
  );
}

export default App;
