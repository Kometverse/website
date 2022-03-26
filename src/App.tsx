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
  const [email, setEmail] = useState(null);
  const [userExist, setUserExists] = useState(false)
  const [newUser, setNewUser] = useState({});
  const [newRefUrl, setNewrefurl]  =("")
  const onSubmit = (data:any) => console.log(data)

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
    setNewUser(`http://localhost:3000?refID=${newrefID}`)
    console.log()
    console.log(newuserData);
  };

  useEffect(() => {
    if(email) {
    (async () => {
      console.log(email)
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
          console.log(refralUser)
          if (!refralUser.empty) {
            // update user point and create nw user
            const refralUserDaata = refralUser.docs[0].data();
            const docref = doc(useresref, refralUser.docs[0].id);
            updateDoc(docref, {
              points: refralUserDaata.points + 1,
            });
            console.log(refralUserDaata)
            createNewUser();
          } else {
          }
        }
      }
    })();
 
    }
 }, [email]);

  return (
    // top level container
    <div className="">
      <div className="text-white relative w-full min-h-screen bg-primary backdrop-blur-3xl ">
        <div className="xl:w-[80%] m-auto ">
          <Navbar />
          <Hero/>
          <Intro />
          <Features />
          <CTA setEmail={setEmail}/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
