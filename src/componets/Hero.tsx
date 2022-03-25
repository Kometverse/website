import joinus from "/joinus.svg"

interface Props {
    handleChnage: any
    isdisabled: boolean
    onClick: any
}



export const Hero = (props: Props) => {
    return (
        <>
            <div className="flex flex-col items-center text-center w-[90%] mt-5   pb-6 rounded-2xl pt-8  backdrop-blur relative bg-[#2A2A3C] sm:max-w-[600px] m-auto sm:pt-20 sm:pb-20 lg:max-w-[700px] sm:mt-20 lg:rounded-[90px]  lg:mb-20 sm:mb-10 ">
                <div className="select-none blur-2xl w-56 h-56 -top-10 -z-19 left-0 absolute bg-[#8146FF]/50 rounded-full"></div>
                <h1 className=" pb-2 text-center text-4xl sm:text-5xl lg:text-7xl">KOMET</h1>
                <p className="text-lg mb-2 sm:text-2xl lg:text-3xl  lg:mb-8">The fastest and esiest web3 access</p>
                <div className="flex flex-col w-full  items-center sm:flex-row sm:bg-white sm:w-[60%] sm:mt-5 sm:justify-between sm:rounded-full">
                    <input type="text" placeholder="Email Adresss" className="px-2 mb-4 rounded-full  sm:px-3 sm:py-1 w-[180px] sm:m-0  text-black" onChange={props.handleChnage} />
                    <button disabled={props.isdisabled} className="text-center px-5 rounded-full top-btn py-2 bg-slate-500   " onClick={props.onClick}>join wishlist </button>
                </div>

            </div>


        </>
    )
}