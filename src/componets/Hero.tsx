import joinus from "/joinus.svg"

export const Hero = () => {
    return (
        <>
            <div className="flex flex-col items-center text-center w-[90%] mt-5   pb-6 rounded-2xl pt-8  backdrop-blur relative bg-[#2A2A3C] sm:max-w-[600px] m-auto sm:pt-20 sm:pb-20 lg:max-w-[700px] sm:mt-20 lg:rounded-[90px]  lg:mb-20 sm:mb-10 ">
                <h1 className=" pb-2 text-center text-4xl sm:text-5xl lg:text-7xl">KOMET</h1>
                <p className="text-lg mb-2 sm:text-2xl lg:text-3xl  lg:mb-8">The fastest and esiest web3 access</p>
                <div className="flex flex-col w-full  items-center sm:flex-row sm:bg-white sm:w-[60%] sm:mt-5 sm:justify-between sm:rounded-full">
                    <input type="text" placeholder="Email Adresss" className="px-2 mb-4 rounded-full  sm:px-3 sm:py-1 w-[180px] sm:m-0 " />
                    <button className="text-center px-5 rounded-full top-btn py-2 bg-slate-500 ">join wishlist </button>
                </div>

            </div>


        </>
    )
}