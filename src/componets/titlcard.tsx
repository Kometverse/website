import bitcoin from "/bitcoin.svg";
import goal from "/gals.svg";
import future from "/future.svg";
import Tilt from "react-tilt";

export const TiltCards = () => {
  return (
    <>
      <p className="px-5  text-center max-w-[35ch] py-5 text-3xl bold mb-4  sm:text-7xl lg:py-10 font-bold m-auto ">
        {" "}
        Unlocking your digital world
      </p>
      <div className="lg:w-[90%] relative  flex-col flex lg:items-center lg:flex-row space-between  m-auto my-15 sm:mb-28 lg:mb-32">
       
        <Tilt
          options={{ max: 25 }}
         className="Tilt lg:w-[31%] w-[95%] m-auto opacity-80 hover:opacity-100 lg:mx-5 max-w-lg card rounded-xl relative  min-h-[300px] my-4  ">
          <div className="Tilt-inner ">
           <p className="text-4xl px-6 py-7 opacity-90">Secure Transections</p>
          <p className="text-xl text-left w-[15ch] px-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
          </p>
          <img
            src={bitcoin}
            className="w-36 absolute right-3 bottom-3"
            alt=""
          />   
          </div>
        </Tilt>
          <Tilt
          options={{ max: 25 }}
         className="Tilt lg:w-[31%] w-[95%] m-auto opacity-80 hover:opacity-100 lg:mx-5 max-w-lg card rounded-xl relative  min-h-[300px] my-4  ">
          <div className="Tilt-inner ">
           <p className="text-4xl px-6 py-7 opacity-90">Secure Transections</p>
          <p className="text-xl text-left w-[15ch] px-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
          </p>
          <img
            src={bitcoin}
            className="w-36 absolute right-3 bottom-3"
            alt=""
          />   
          </div>
        </Tilt>
          <Tilt
          options={{ max: 25 }}
         className="Tilt lg:w-[31%] w-[95%] m-auto opacity-80 hover:opacity-100 lg:mx-5 max-w-lg card rounded-xl relative  min-h-[300px] my-4  ">
          <div className="Tilt-inner ">
           <p className="text-4xl px-6 py-7 opacity-90">Secure Transections</p>
          <p className="text-xl text-left w-[15ch] px-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
          </p>
          <img
            src={bitcoin}
            className="w-36 absolute right-3 bottom-3"
            alt=""
          />   
          </div>
        </Tilt>

    
      </div>
    </>
  );
};
