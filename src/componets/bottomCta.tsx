export const CTA = () => {
    return (
        <>
            <div className="py-10 mb-20 m-auto  intro-gradient rounded-2xl w-full   bold flex flex-col items-center lg:flex-row lg:w-[70%] lg:px-12  ">
                <h2 className="text-center text-3xl font-bold mb-5 lg:m-0  w-[20ch] lg:w-[25ch] lg:text-3xl px-4" >Be the first to get notified of the latest updates </h2>
                <div className="rounded-full bg-white flex justify-between w-[95%]  sm:w-[60%] ">
                    <input type="text" className="rounded-full px-2" placeholder="enter your email " />
                    <button className="cta-btn py-2 px-7 lg:px-12 lg:text-2xl">join</button>
                </div>
            </div>
        </>
    )
}