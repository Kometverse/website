import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKnsz456zlCFyBA_7W0yw6VDaazU8AdXk",
//   authDomain: "refralsapp.firebaseapp.com",
//   projectId: "refralsapp",
//   storageBucket: "refralsapp.appspot.com",
//   messagingSenderId: "435185955935",
//   appId: "1:435185955935:web:11521b9f54996b994257ea"
// };



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKjQD5QoXydK8y3Y_h1Fr1qkj6jkGBQTE",
  authDomain: "kometrefral.firebaseapp.com",
  projectId: "kometrefral",
  storageBucket: "kometrefral.appspot.com",
  messagingSenderId: "435912251019",
  appId: "1:435912251019:web:17c8624d0fd53902f5668e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase

export const db = getFirestore(app)