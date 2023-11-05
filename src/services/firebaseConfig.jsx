import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmZCBU08hho7Ef3s_7AgPU1THQerVmvjc",
  authDomain: "database-1de4e.firebaseapp.com",
  projectId: "database-1de4e",
  storageBucket: "database-1de4e.appspot.com",
  messagingSenderId: "616521156267",
  appId: "1:616521156267:web:a80bc06e91737638da59ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);