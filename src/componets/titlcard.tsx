import bitcoin from "/bitcoin.svg";
import goal from "/gals.svg";
import future from "/future.svg";
import Tilt from 'react-parallax-tilt';

export const TiltCards = () => {
  return (
    <>
      <p className="px-5  text-center max-w-[35ch] text-4xl bold mb-4  sm:text-7xl lg:py-10 font-bold m-auto ">
        Unlocking your digital world
      </p>
      <div className="lg:w-full w-[90%] relative  flex-col flex lg:items-center lg:flex-row space-between  m-auto my-15 sm:mb-28 lg:mb-32">
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[31%]  m-auto  max-w-lg card rounded-xl relative  min-h-[350px] my-4 py-2  sm:px-12 lg:px-2">
          <p className="text-4xl lg:text-4xl  py-2  px-6 lg:p-6  ">Secure Transactions
          </p>
          <p className="w-[22ch] text-lg text-left lg:w-[24ch] lg:text-lg  px-5 ">
            Take control of your assets by setting up a security layer over each protocol you interact with. Easily recover your wallet
          </p>
          <img
            src={bitcoin}
            className="w-28  lg:w-36 absolute right-3 bottom-3 float-right"
            alt=""
          />
        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[31%] sm:px-12  m-auto  max-w-lg card rounded-xl relative  min-h-[350px] my-4 py-2 lg:px-2">
          <p className="text-4xl lg:text-4xl  py-2 px-4 lg:p-6 ">Credibilty in in-game tokens and NFTs
          </p>
          <p className="w-[22ch] text-lg text-left lg:w-[24ch] lg:text-lg  px-5 ">

            Convert in-game assets to NFTs and vice versa. Trade only credible assets with Komet safety score.
          </p>
          <img
            src={goal}
            className="w-28  lg:w-32 absolute right-3 bottom-3 float-right"
            alt=""
          />
        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[31%] sm:px-12  m-auto  max-w-lg card rounded-xl relative  min-h-[350px] my-4 py-2  lg:px-2">
          <p className="text-4xl lg:text-4xl  py-2 px-4 lg:p-6 ">Easy access to the future
          </p>
          <p className="w-[22ch] text-lg text-left lg:w-[28ch] lg:text-gl  px-5 ">

            Be the first one to access simplified multi-chain experience from the interoperable gaming universe.
          </p>
          <p className="w-[22ch] text-lg text-left lg:w-[24ch] lg:text-lg  px-5">Earn, invest and save with your friends.</p>
          <img
            src={future}
            className="w-28  lg:w-36 absolute right-3 bottom-3 float-right"
            alt=""
          />
        </Tilt>
        <div className="select-none z-0 xl:block blur-2xl lg:w-40 w-16 h-16 lg:h-40  hidden lg:-left-36 -bottom-28 absolute bg-[#8146FF]/50 rounded-full"></div>
      </div>
    </>
  );
};
