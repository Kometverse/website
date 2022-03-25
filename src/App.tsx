import { useState } from "react"
import { CTA } from "./componets/bottomCta"
import { Features } from "./componets/Features"
import { Footer } from "./componets/footer"
import { Hero } from "./componets/Hero"
import { Intro } from "./componets/Intro"
import { Navbar } from "./componets/Navbar"
function App() {

  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const [isDisabled, setDisabled] = useState(true)
  const handleChnage = (e: any) => {
    setEmail(e.target.value)
    if (email.length > 3) {
      setDisabled(false)
      console.log("you can click now ")
    }
    setDisabled(true)
  }
  const onClick = (e: any) => {
    setSubmit(!submit)
    console.log("hello")
  }
  return (
    // top level container 
    <div className="">
      <div className="text-white relative w-full min-h-screen bg-primary backdrop-blur-3xl ">
        <div className="xl:w-[80%] m-auto ">
          <Navbar />
          <Hero onClick={onClick} isdisabled={isDisabled} handleChnage={handleChnage} />
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
