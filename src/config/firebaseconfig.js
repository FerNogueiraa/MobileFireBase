import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDBvz9a2VEJw05Mk44sBapqz0z7FrtgoxU",
  authDomain: "task-1ed38.firebaseapp.com",
  projectId: "task-1ed38",
  storageBucket: "task-1ed38.appspot.com",
  messagingSenderId: "556434149303",
  appId: "1:556434149303:web:145748254e5a15e3052232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database