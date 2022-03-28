import emoji from "/emoji.svg"

export const Hero = () => {
    return (
        <>
            <div className="w-full lg:h-[90vh] py-24 flex  flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-6xl font-bold lg:text-8xl mb-2 lg:mb-4 ">The easiest way</h1>
                <p className="text-4xl sm:text-6xl font-bold lg:text-8xl mb-2 web3-text lg:mb-8 ">to access web3</p>
                <a href="#cta">
                    <button className="cta px-10 py-3 text-xl lg:text-lg transition-all duration-200 rounded-2xl my-4 font-bold top-btns">Join Waitlist</button>
                </a>
            </div>
        </>
    )
}