import { db } from "../firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Confetti from 'react-confetti'
import { useSearchParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { VscLinkExternal } from "react-icons/vsc";
import { IoIosArrowDropdown } from "react-icons/io";
import { Footer } from "./footer";
interface Item {
  name: string;
  link: string;
}

interface Props {
  open: boolean;
  setOpen: Function;
}



const hover_items = [
  {
    name: "Twitter",
    link: "#",
  },
  {
    name: "Discord",
    link: "#",
  },
  {
    name: "Newsletter",
    link: "#",
  },
];

export const Rank = () => {
  const [open, setOpen] = useState(false)


  const height = window.innerHeight;
  const width = window.innerWidth;
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email")

  let navigate = useNavigate();
  const [rank, setRank] = useState(0);
  const [reflink, setrefLink] = useState("");
  const [isCopied, setisCopied] = useState(false);
  let newuser: any = null;
  let myurl: any = null;

  useEffect(() => {
    (
      async () => {
        // console.log(email)
        const sortedArray: any = []
        const sortedUser = collection(db, 'users');
        const q = query(sortedUser, orderBy("points", "desc"), orderBy("created_at", "asc"));

        const sortedUsers = (await getDocs(q)).docs;
        sortedUsers.forEach((doc) => {
          sortedArray.push({ ...doc.data(), id: doc.id })
        })
        // console.log(sortedArray)
        const userQuery = query(sortedUser, where('email', '==', email));
        newuser = (await getDocs(userQuery)).docs[0].data();

        myurl = `${window.location.protocol}//${window.location.host}/?refID=${newuser ? newuser.refID : ""}`;
        setrefLink(myurl)

        if (newuser) {
          sortedArray.forEach((item: any) => {
            if (newuser.refID === item.refID) {
              // console.log("found it damn ")
              setRank(sortedArray.indexOf(item) + 1500)
            }
          });
        } else {
          // console.log(" user not found ")
        }
      }
    )()
  }, [email])

  return (
    <>
      <Confetti
        numberOfPieces={20}
        tweenDuration={20}
        width={width}
        height={height}
        onConfettiComplete={() => null}
      />

      <div className=" sticky top-0 z-40 bg-primary">
        <nav className="container m-auto flex justify-between items-center  p-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/log.svg?alt=media&token=fb81cef9-bac7-42f1-b638-432a5824450e"
            className="w-20"
            alt=""
          />
          <div className="flex">

            <a href="/" className="mx-4">home</a>
            <div className="group  relative px-4 flex flex-col justify-center">
              <div className="flex">
                <p className="">Community</p>
                <IoIosArrowDropdown className="mx-2" />
              </div>
              <div className="hidden group-hover:flex absolute  top-4  items-center py-4  flex-col ">
                {hover_items.map((item: Item) => {
                  return (
                    <div className="w-full  flex items-center brightness-75 hover:brightness-100">
                      <a className="p-2" href={item.link}>
                        {item.name}
                      </a>
                      <VscLinkExternal className=" w-3 hover:w-6" />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </nav>
      </div>

      <div className=" text-white overflow-hidden relative  flex justify-center  h-[80vh]  flex-col items-center">


        <img src=" https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/ast.svg?alt=media&token=90091eca-e96f-432b-a32a-add5e6f542e3" className="w-44 h-44 lg:w-48" alt="" />
        <h2 className="flex text-lg leading-6 py-4 lg:text-2xl">
          That's Cool <img src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/future.svg?alt=media&token=e76969bc-bb28-4085-abad-6fa4eefc65b9" className=" mx-2 w-6" alt="" />
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
            data={
              {
                title: myurl,
                url: reflink,
                text: myurl,
              }
            }

            onClick={() => setisCopied(true)}
          >
            <button className="w-full intro-gradient rounded-lg p-2 text-xl  ">Invite Friends</button>
          </RWebShare>
        </div>
      </div>
      <Footer />

    </>
  );
};
