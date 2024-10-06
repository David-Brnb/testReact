import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB07z1XF1XyPmgRyO2GefUlBxsFO4XO74M",
    authDomain: "pruebaapi-7d2ae.firebaseapp.com",
    projectId: "pruebaapi-7d2ae",
    storageBucket: "pruebaapi-7d2ae.appspot.com",
    messagingSenderId: "1040915548220",
    appId: "1:1040915548220:web:a897985800f055cfa99b39",
    measurementId: "G-NLHBQ0Z9QZ"
  };
  

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
