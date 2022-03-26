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
import { Route, Routes } from "react-router-dom";

const queryParams = new URLSearchParams(window.location.search);
const refralurl = queryParams.get("refID");
console.log(refralurl);

interface Props {
  setEmail: any
}

const Home = ({ setEmail }: Props) => {
  return (
    <>
      <div className="text-white relative w-full min-h-screen bg-primary ">
        <Navbar />
        <div className="xl:w-[80%] m-auto ">
          <Hero />
          <Intro />
          <TiltCards />
        </div>
        <CTA setEmail={setEmail} />
        <Footer />
      </div >
    </>
  )
}

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
        const emailQuery = query(useresref, where("email", "==", email));
        const usersExist = (await getDocs(emailQuery)).docs.length;
        if (usersExist) {

          const userexistref = query(useresref, where("email", "==", email));
          const existeduserData = (await getDocs(userexistref)).docs[0].data()
          setUser(existeduserData)
          console.log(existeduserData)
        } else {
          if (!refralurl) {
            createNewUser();
          } else {
            const userq = query(useresref, where("refID", "==", refralurl));
            const refralUser = await getDocs(userq);
            console.log(refralUser);
            if (!refralUser.empty) {
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
    // <div className="text-white relative w-full min-h-screen bg-primary ">
    //   <Navbar />
    //   <div className="xl:w-[80%] m-auto ">
    //     <Hero />
    //     <Intro />
    //     <TiltCards />
    //   </div>
    //   <CTA setEmail={setEmail} />
    //   <Footer />
    // </div >

    <Routes>
      <Route path="/" element={<Home setEmail={setEmail} />} />
      <Route path="/rank" element={<Rank user={user} />} />
    </Routes>
  );
}

export default App;
