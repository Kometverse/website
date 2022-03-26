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
      <div className="lg:w-[90%] relative  flex-col flex lg:items-center lg:flex-row space-between  m-auto my-15 sm:mb-28 lg:mb-32">
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[31%] w-[95%] m-auto opacity-80 hover:opacity-100 lg:mx-5 max-w-lg card rounded-xl relative  min-h-[300px] my-4  ">
          <p className="text-4xl px-6 py-7 opacity-90">Secure Transections</p>
          <p className="text-xl text-left w-[15ch] px-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
          </p>
          <img
            src={bitcoin}
            className="w-28 lg:w-32 absolute right-3 bottom-3"
            alt=""
          />
        </Tilt>

        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="lg:w-[31%] w-[95%] m-auto opacity-80 hover:opacity-100 lg:mx-5 max-w-lg card rounded-xl relative  min-h-[300px] my-4  ">
          <p className="text-4xl px-6 py-7 opacity-90">Credibilty in in-game tokens and NFTs</p>
          <p className="text-xl text-left w-[15ch] px-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
          </p>
          <img
            src={goal}
            className="w-28 lg:w-32 absolute right-3 bottom-3"
            alt=""
          />
        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          className="Tilt lg:w-[31%] w-[95%] m-auto opacity-80 hover:opacity-100 lg:mx-5 max-w-lg card rounded-xl relative  min-h-[300px] my-4  ">
          <p className="text-4xl px-6 py-7 opacity-90">Easy access to the future</p>
          <p className="text-xl text-left w-[15ch] px-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
          </p>
          <img
            src={future}
            className="w-28 lg:w-32 absolute right-3 bottom-3"
            alt=""
          />
        </Tilt>


      </div>
    </>
  );
};
