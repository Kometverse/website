
export const Hero = () => {
    return (
        <>
            <div className="w-full lg:w-[90%] m-auto h-screen  justify-center flex flex-col  lg:h-screen bg-primary">
                <div className="fadePopInAndStay w-full  flex flex-col items-center  lg:items-start p-4  ">
                    <h1 className="font-bold flex flex-col text-4xl lg:text-8xl ">
                        <span className="web3-text ">The <span className="text-white">easiest</span>  way</span>
                        <span className="web3-text">to access web3</span>
                    </h1>
                    <p className="px-2 text-center lg:text-2xl my-4 lg:text-left lg:w-[60ch] ">Komet is Easy to use, secure crypto and NFT wallet designed for all of us</p>
                    <a href="#cta" className="" >
                        <button className="cta-button btn-2 my-8 cta px-6 py-2 rounded text-xl  relative"><span className="btn-span">Join waitlist</span></button>
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