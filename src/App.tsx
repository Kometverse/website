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

  const [open, setOpen] = useState(false)
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="bg-primary w-full p-4 md:container m-auto scroll-smooth relative z-0 ">
      <Navbar open={open} setOpen={setOpen} />
      <Hero />
      <Intro />
      <TiltCards />
      <CTA />
      <div id="cta"></div>
      <Footer />
    </div >
  );
}

export default App;
