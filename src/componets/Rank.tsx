import ast from "/ast.svg";
import future from "/future.svg";
import { useEffect, useState } from "react";
import useCopyHook from "../useCopyClipBoard";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Confetti from 'react-confetti'
interface Props {
  user: any;
}

export const Rank = ({ user }: Props) => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  let navigate = useNavigate();
  const [rank, setRank] = useState(0);
  const [reflink, setrefLink] = useState("");
  const [isCopied, setisCopied] = useState(false);

  useEffect(() => {
    console.log(user)
    setRank(user.refID);
    console.log(user.points);
    setrefLink("?refID=" + user.refID);
  });

  return (
    <>

      <Confetti
        numberOfPieces={20}
        tweenDuration={20}
        width={300}
        height={400}
        onConfettiComplete={() => null}
      />
      <div className="select-none xl:block blur-2xl lg:w-48 w-16 h-16 lg:h-40  hidden lg:-top-20 lg:-right-20 absolute bg-[#8146FF]/50 rounded-full"></div>
      <div className="select-none xl:block blur-2xl lg:w-48 w-16 h-16 lg:h-40  hidden lg:-bottom-20  lg:-left-20  absolute bg-[#8146FF]/50 rounded-full"></div>
      <div className="h-[60vh] text-white">
        <p className="font-normal text-3xl p-4 cursor-pointer" onClick={() => navigate('/')}>X</p>
        <div className="justify-center h-screen overflow-hidden leading-10 flex flex-col items-center">
          <img src={ast} className="w-44 lg:w-48" alt="" />
          <h2 className="flex text-lg leading-6 py-4 lg:text-2xl">
            That's Cool <img src={future} className=" mx-2 w-6" alt="" />
          </h2>
          <p className="rankjoin font-bold text-xl">
            Thanks for joining the waitlist!
          </p>
          <p className="p-5"> Your Current Postion</p>
          <div className="border border-[#8146FF] w-[90%] text-center text-xl p-2 max-w-md">
            # {rank ? rank : "loading....."}
          </div>

          <p className="text-sm my-6 text-center px-8">
            The first 1000 frens can get an exclusive NFT airdrop of worth $100 🎉
          </p>
          <div className="flex justify-between  w-[90%] text-sm max-w-md ">
            <RWebShare
              data={{
                text: "",
                url: `https://komet-beta.vercel.app?refID=${user.refID}`,
                title: "Invite freinds",
              }}

              onClick={() => setisCopied(true)}
            >
              <button className="w-full intro-gradient rounded-lg p-2 text-xl  ">invite friends</button>
            </RWebShare>
          </div>
          <p className="lg:block hidden text-green-500"> {isCopied ? "link  copied" : ""}</p>
        </div>
      </div>

    </>
  );
};
