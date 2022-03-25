import { NftImage } from "./NFTimg"
import game1 from "/game1.svg"
import game2 from "/game2.svg"
import game3 from "/game3.svg"
import game4 from "/game4.svg"
import game5 from "/game5.svg"
import game6 from "/game6.svg"
export const Intro = () => {
    return (
        <>
            <div className="py-12 my-16 intro-gradient px-3 w-[90%] lg:w-[75%] box-  m-auto rounded-3xl lg:flex relative mt-36">
                <div className="flex flex-col items-center text-center lg:items-start px-4  lg:ml-6">
                    <h1 className="max-w-[20ch] mb-5 text-2xl font-bold sm:text-4xl text-center lg:text-left lg:text-5xl lg: w-[20ch] ">Unlocking your digital world</h1>
                    <p className="sm:text-2xl text-lg max-w-[40ch] lg:max-w-[35ch] mb-8 text-center lg:text-left">A simplify wallet infrastructure for web3 games and NFTs</p>
                </div>
                <div className="lg:hidden flex w-[80%] m-auto lg:absolute  flex-wrap items-center  justify-center ">
                    <NftImage img={game2} />
                    <NftImage img={game1} />
                    <NftImage img={game3} />
                    <NftImage img={game4} />
                    <NftImage img={game5} />
                    <NftImage img={game6} />
                </div>

                <div className="hidden lg:block">
                    <img className="w-[40%]  max-w-[150px] absolute -top-20 right-20  sm:max-w-[150px] lg:w-[200px] rounded-full sm:mx-5 mx-3  my-4" src={game4} alt="" />
                    {/* <img className="w-[40%]  max-w-[150px] absolute  right-10  sm:max-w-[150px] lg:w-44 rounded-full sm:mx-5 mx-3  my-4" src={game2} alt="" />*/}
                    <img className="w-[40%]  max-w-[150px] absolute right-59  sm:max-w-[150px] lg:w-[100px] rounded-full sm:mx-5 mx-3  my-4" src={game2} alt="" />
                    <img className="w-[40%]  max-w-[150px] absolute  right-20 bottom-0 sm:max-w-[150px] lg:w-44 rounded-full sm:mx-5 mx-3  my-4" src={game6} alt="" />
                    <img className="w-[40%]  max-w-[150px] absolute  -right-12  sm:max-w-[150px] lg:w-[130px] lg:py-5 rounded-full sm:mx-5 mx-3  my-4" src={game1} alt="" />
                    <img className="w-[40%]  max-w-[150px] absolute -bottom-10 -right-10  sm:max-w-[150px] lg:w-[100px] rounded-full sm:mx-5 mx-3  my-4" src={game3} alt="" />

                </div>
            </div>

        </>
    )
}