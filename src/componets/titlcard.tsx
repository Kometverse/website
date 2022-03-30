import bitcoin from "/bitcoin.svg";
import goal from "/gals.svg";
import future from "/future.svg";
import Tilt from 'react-parallax-tilt';

export const TiltCards = () => {
  return (
    <>
      <p className="px-5  text-center max-w-[35ch] text-4xl bold mb-4  sm:text-7xl lg:py-10 font-bold m-auto  ">
        Unlocking your digital world
      </p>
      <div className="w-[90%] m-auto lg:w-full  lg:flex  justify-between relative  mb-32 ">
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[32%]  card relative min-h-[350px]  p-5 rounded-xl  sm:max-w-lg m-auto">
          <p className="text-3xl ">Secure Transactions
          </p>
          <p className="text-lg my-2 ">
            Take control of your assets by setting up a security layer over each protocol you interact with. Easily recover your wallet
          </p>
          <img
            src={bitcoin}
            className="w-[30%] absolute bottom-0 right-2"
            alt=""
          />
        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[32%]  card relative min-h-[350px] rounded-xl my-5 lg:m-0   p-5 sm:max-w-lg m-auto">
          <p className="text-3xl ">Credibilty in in-game tokens and NFTs
          </p>
          <p className="text-lg my-2 lg:w-[30ch]  w-[23ch]">
            Convert in-game assets to NFTs and vice versa. Trade only credible assets with Komet safety score.
          </p>
          <img
            src={goal}
            className="w-[30%] absolute bottom-4 right-2"
            alt=""
          />
        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[32%]  card relative min-h-[350px] rounded-xl  p-5 sm:max-w-lg m-auto">
          <p className="text-3xl ">Easy access to the future
          </p>
          <p className=" my-2 text-lg ">
            Be the first one to access simplified multi-chain experience from the interoperable gaming universe.
          </p>
          <p className="text-lg lg:w-[25ch] w-[20ch] my-2">Earn, invest and save with your friends.</p>
          <img
            src={future}
            className="w-[30%] absolute bottom-0 right-2"
            alt=""
          />
        </Tilt>
        <div className="select-none z-0 xl:block blur-2xl lg:w-40 w-16 h-16 lg:h-40  hidden lg:-left-36 -bottom-28 absolute bg-[#8146FF]/50 rounded-full"></div>
      </div>
    </>
  );
};
