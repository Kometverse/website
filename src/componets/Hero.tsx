
export const Hero = () => {
    return (
        <>
            <div className="w-full h-screen  justify-center flex flex-col  lg:h-screen bg-primary">
                <div className="fadePopInAndStay w-full  flex flex-col items-center  lg:items-start  ">
                    <h1 className="web3-text font-bold flex flex-col text-4xl lg:text-8xl ">
                        <span className=" ">The easiest way</span>
                        <span className="">to access web3</span>
                    </h1>
                    <p className="px-2 text-center lg:text-lg my-4 lg:text-left lg:w-[60ch]">Lorem ipsum, m saepe labore tempore? Excepturi quas eum laborum sequi delectus animi? Laudantium quasi culpa officiis magnam voluptatum.</p>
                    <a href="#cta" className="my-8 bg-purple-600 px-6 py-2 rounded text-xl cta">
                        Join Waitlist
                    </a>
                </div>
                <div className="animate-bounce  scroll-downs self-center mt-10">
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                </div>

            </div>
        </>
    )
}   