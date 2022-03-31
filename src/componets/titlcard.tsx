import bitcoin from "/bitcoin.svg";
import goal from "/gals.svg";
import future from "/future.svg";
import Tilt from 'react-parallax-tilt';

export const TiltCards = () => {
  return (
    <>
      <p className="px-5  text-center max-w-[35ch] text-4xl bold  sm:text-7xl lg:py-10 font-bold m-auto mb-10 ">
        Unlocking your digital world
      </p>
      <div className="w-[90%] m-auto lg:w-ful lg:flex  mb-32 justify-between  relative">
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[32%]  card-border flex flex-col items-center justify-center p-6 text-center border-[4px]  rounded-2xl ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/bitcoin.svg?alt=media&token=75986972-68ae-4b23-b8b1-1ab1e62fc188"
            className="w-[30%] mb-2"
            alt=""
          />
          <p className="text-2xl lg:text-3xl ">Secure Transactions</p>
          <p className="lg:text-lg text-sm my-2 ">
            Take control of your assets by setting up a security layer over each protocol you interact with. Easily recover your wallet
          </p>

        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[32%]  card-border flex flex-col items-center justify-center p-6 text-center my-8 lg:my-0  border-[4px]" >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/gals.svg?alt=media&token=4344d77f-61a1-41ea-8318-43777288cfef"
            className="w-[30%] my-2"
            alt=""
          />
          <p className="text-2xl lg:text-3xl ">Credible in-game assets and NFTs</p>
          <p className="lg:text-lg text-sm my-2 ">
            Convert in-game assets to NFTs and vice versa. Trade only credible assets with Komet safety score.
          </p>

        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[32%]  card-border flex flex-col items-center justify-center p-6 text-center border-[4px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/future.svg?alt=media&token=e76969bc-bb28-4085-abad-6fa4eefc65b9"
            className="w-[30%] mb-2"
            alt=""
          />
          <p className="text-2xl lg:text-3xl ">Instant access to future</p>
          <p className="lg:text-lg text-sm my-2 ">
            Be the first one to access simplified multi-chain experience from the interoperable gaming universe . Earn, invest and save with your friends.
          </p>

        </Tilt>



        <div className="select-none z-0 xl:block blur-2xl lg:w-40 w-16 h-16 lg:h-40  hidden lg:-left-36 -bottom-32 absolute bg-[#8146FF]/50 rounded-full"></div>
      </div>
    </>
  );
};
