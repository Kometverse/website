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
import { TiltCards } from "./componets/titlcard";
import { Rank } from "./componets/Rank";

const queryParams = new URLSearchParams(window.location.search);
const refralurl = queryParams.get("refID");
console.log(refralurl);

function App() {
  const useresref = collection(db, "users");
  const [email, setEmail] = useState(null);
  const [userExist, setUserExists] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [user, setUser] = useState({})
  const onSubmit = (data: any) => console.log(data);

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
    setUser(() => {
      return { ...newuserData };
    });
    console.log(user);
  };

  useEffect(() => {
    if (email) {
      (async () => {
        console.log(email);
        // rrab users db refrance
        // user email query
        const emailQuery = query(useresref, where("email", "==", email));
        const usersExist = (await getDocs(emailQuery)).docs.length;
        // check if emal that was entred exists or not
        if (usersExist) {

          const userexistref = query(useresref, where("email", "==", email));
          const existeduserData = (await getDocs(userexistref)).docs[0].data()
          setUser(existeduserData)
        } else {
          // if not then add that user to db and then create a refral id for that user retturn that url to frontend
          if (!refralurl) {
            createNewUser();
          } else {
            const userq = query(useresref, where("refID", "==", refralurl));
            const refralUser = await getDocs(userq);
            console.log(refralUser);
            if (!refralUser.empty) {
              // update user point and create nw user
              const refralUserDaata = refralUser.docs[0].data();
              const docref = doc(useresref, refralUser.docs[0].id);
              updateDoc(docref, {
                points: refralUserDaata.points + 1,
              });
              console.log(refralUserDaata);
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
    <div className="text-white relative w-full min-h-screen bg-primary ">
      {/* <Navbar /> */}
      {/* <div className="select-none xl:block blur-2xl w-44 h-44 top-[600px] right-56 absolute bg-[#8146FF]/50 rounded-full"></div>
      <div className="select-none xl:block blur-2xl w-44 h-44 top-[1100px] left-56 absolute bg-[#8146FF]/50 rounded-full"></div>
  */}
      <div className="xl:w-[80%] m-auto ">
        <Hero />
        <Intro />
        <TiltCards />
      </div>
      <CTA setEmail={setEmail} />
      <Footer />
      {/* <Rank /> */}
    </div >
  );
}

export default App;
