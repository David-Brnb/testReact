import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; // Importa la autenticación

const firebaseConfig = {

  apiKey: "AIzaSyCdiH1ZDSnp8t1BqijhhW59e8NgStY_8p8",

  authDomain: "lbta-firebase-chat-58c02.firebaseapp.com",

  projectId: "lbta-firebase-chat-58c02",

  storageBucket: "lbta-firebase-chat-58c02.appspot.com",

  messagingSenderId: "1046816935616",

  appId: "1:1046816935616:web:38de2058845ad8f49a6725"

};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar la base de datos
const database = getDatabase(app);

// Inicializar la autenticación
const auth = getAuth(app);

// Exportar ambas configuraciones
export { database, auth };
