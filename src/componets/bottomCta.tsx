export const CTA = () => {
    return (
        <>
            <div className="intro-gradient w-full p-12 sm:w-[70%] m-auto  text-sm lg:flex items-center">
                <h2 className="text-2xl lg:text-4xl lg:text-left text-center px-8  font-bold">Be the first to get notified  of the latest updates </h2>
                <div className="flex justify-between w-full rounded-full  bg-white  border items-center">
                    <input type="text" placeholder="signup for newslater" className="p-3 rounded-full grow-0 text-sm focus:outline-none  " />
                    <button className="text-center text-sm cta-btn p-3  w-[100px] rounded-full cta-bt">join</button>
                </div>
            </div>
        </>
    )
}