import { useEffect, useState } from "react";
import { CTA } from "./componets/bottomCta";
import { Features } from "./componets/Features";
import { Footer } from "./componets/footer";
import { Hero } from "./componets/Hero";
import { Intro } from "./componets/Intro";
import { Navbar } from "./componets/Navbar";
import { v4 as uuidv4 } from "uuid";

import {
  collection,
  getDoc,
  doc,
  updateDoc,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

const queryParams = new URLSearchParams(window.location.search);
const refralurl = queryParams.get("refID");
console.log(refralurl);

function App() {
  const useresref = collection(db, "users");
  const [email, setEmail] = useState("yes.vikass.med@outlook.com");
  const [submit, setSubmit] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [newUser, setNewUser] = useState({});
  const handleChnage = (e: any) => {
    setEmail(e.target.value);
    if (email.length > 3) {
      console.log("you can click now ");
    }
  };
  const onClick = (e: any) => {
    setSubmit(!submit);
    console.log("hello");
  };

  const createNewUser = async () => {
    const newrefID = uuidv4();
    console.log(newrefID);
    const newuserData = {
      email: email,
      points: 0,
      refID: newrefID,
    };
    await addDoc(useresref, newuserData);
    // get user from db
    setNewUser(() => {
      return { ...newuserData };
    });
    console.log(newUser);
  };

  useEffect(() => {
    (async () => {
      // rrab users db refrance
      // user email query
      const emailQuery = query(useresref, where("email", "==", email));
      const usersExist = (await getDocs(emailQuery)).docs.length;
      // check if emal that was entred exists or not
      if (usersExist) {
        console.log("users exists");
      } else {
        // if not then add that user to db and then create a refral id for that user retturn that url to frontend
        if (!refralurl) {
          createNewUser();
        } else {
          const userq = query(useresref, where("refID", "==", refralurl));
          const refralUser = await getDocs(userq);
          if (!refralUser.empty) {
            // update user point and create nw user
            const refralUserDaata = refralUser.docs[0].data();
            const docref = doc(useresref, refralUser.docs[0].id);
            updateDoc(docref, {
              points: refralUserDaata.points + 1,
            });

            createNewUser();
          } else {
          }
        }
      }
    })();
  }, []);

  return (
    // top level container
    <div className="">
      <div className="text-white relative w-full min-h-screen bg-primary backdrop-blur-3xl ">
        <div className="xl:w-[80%] m-auto ">
          <Navbar />
          <Hero
            onClick={onClick}
            isdisabled={isDisabled}
            handleChnage={handleChnage}
          />
          <Intro />
          <Features />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
