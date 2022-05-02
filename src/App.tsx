import { useEffect, useState } from "react";
import { CTA } from "./componets/bottomCta";
import { Footer } from "./componets/footer";
import { Hero } from "./componets/Hero";
import { Navbar } from "./componets/Navbar";
import { TiltCards } from "./componets/mainsection";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-primary w-full  m-auto scroll-smooth relative z-0  ">
        <Hero />
        <TiltCards />
        <CTA />
        <div id="cta"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
