import join from "/join.svg"


export const Hero = () => {
    return (
        <>
            <div className="w-full flex lg:my-32  text=center flex-col items-center ">
                <h1 className="text-4xl sm:text-6xl font-bold lg:text-8xl mb-4 lg:mb-8 ">It's your gateway</h1>
                <p className="text-4xl sm:text-6xl font-bold lg:text-8xl mb-2 web3-text lg:mb-8 ">to web3</p>
                <p className="text-xl lg:text-2xl mb-4">send swap and earn - like a pro</p>
                <a href="#cta">
                    <button className="cta px-10 py-4 text-xl lg:text-xl rounded-2xl my-4 font-bold top-btns">Join Waitlist</button>
                </a>
            </div>
        </>
    )
}