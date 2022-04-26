import { useEffect, useState } from "react";
import { CTA } from "./componets/bottomCta";
import { Footer } from "./componets/footer";
import { Hero } from "./componets/Hero";
import { Intro } from "./componets/Intro";
import { Navbar } from "./componets/Navbar";
import { TiltCards } from "./componets/titlcard";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const [open, setOpen] = useState(false)

  return (
    <div onClick={() => setOpen(false)}>
      <Navbar open={open} setOpen={setOpen} />
      <div className="bg-primary w-full  m-auto scroll-smooth relative z-0  ">
        <Hero />
        <TiltCards />


        <CTA />
        <div id="cta"></div>
        <Footer />


      </div >
    </div>
  );
}

export default App;
