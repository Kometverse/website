import { CTA } from "./componets/bottomCta"
import { Features } from "./componets/Features"
import { Footer } from "./componets/footer"
import { Hero } from "./componets/Hero"
import { Intro } from "./componets/Intro"
import { Navbar } from "./componets/Navbar"
function App() {

  return (
    // top level container 
    <div className="">
      <div className="text-white relative w-full min-h-screen bg-primary backdrop-blur-3xl ">
        <div className="xl:w-[80%] m-auto ">
          <Navbar />
          <Hero />
          <Intro />
          <Features />
          <CTA />
          <Footer />
        </div>
      </div >

    </div>
  )
}

export default App
