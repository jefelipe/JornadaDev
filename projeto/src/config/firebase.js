import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyBlzRrlhJeKwyn6dCTYUHW6laXLsIdpVzo",
  authDomain: "tiktok---jornada-721d7.firebaseapp.com",
  projectId: "tiktok---jornada-721d7",
  storageBucket: "tiktok---jornada-721d7.appspot.com",
  messagingSenderId: "954156777831",
  appId: "1:954156777831:web:10a8423ab7e2835650afc2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;