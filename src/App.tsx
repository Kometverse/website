import { CTA } from "./componets/bottomCta"
import { Features } from "./componets/Features"
import { Hero } from "./componets/Hero"
import { Intro } from "./componets/Intro"
import { Navbar } from "./componets/Navbar"
function App() {

  return (
    // top level container 
    <div className="">
      <div className="text-white relative w-full min-h-screen bg-primary backdrop-blur-3xl ">
        <div className="lg:w-[70%] m-auto ">
          <Navbar />
          <Hero />
          <Intro />
          <Features />
          <CTA />
        </div>
      </div >

    </div>
  )
}

export default App
