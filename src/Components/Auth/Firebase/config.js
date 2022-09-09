import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAoijeqyo-dRM6dw03SMdoRr4SWNJze-C8",
  authDomain: "joblyprojectauth.firebaseapp.com",
  projectId: "joblyprojectauth",
  storageBucket: "joblyprojectauth.appspot.com",
  messagingSenderId: "495533772947",
  appId: "1:495533772947:web:e025b4455ccf8ae81ebd66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export  default app;



