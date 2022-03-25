import bitcoin from "/bitcoin.svg"
import goal from "/gals.svg"
import future from "/future.svg"
import { Feature } from "./feature"
export const Features = () => {
    return (
        <>
            <div className="lg:w-[80%] border flex-col flex lg:items-center m-auto" >
                <p className="text-center max-w-[35ch] sm:text-xl bold mb-6  m-auto ">Unlocking your digital world Unlocking your digital world</p>
                <div className="w-full">
                    <Feature text="Secured Transection" img={bitcoin} order={0} />
                    <div className=" m-auto mb-10 py-8 text-center flex flex-col lg:flex-row lg:justify-center items-center ">
                        <img className={`lg:mx-5 w-[80%] sm:w-[300px]  mb-5 lg:order-1`} src={goal} alt="" />
                        <div className="flex flex-col lg:items-start items-center">
                            <h1 className="font-bold text-2xl sm:text-3xl lg:w-[23ch] lg:text-left mb-6">Credibilty in in-game tokens and NFTs</h1>
                            <div className="bg-gray-300 h-[30px] sm:h-[40px]  w-[85%] max-w-md ">
                            </div>
                        </div>
                    </div>
                    <Feature text="Seamless access  to future" img={future} order={0} />
                </div>
            </div>
        </>
    )

}