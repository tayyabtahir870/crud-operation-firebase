import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAE_A2IotvzrSD39SkLiX9d4HKcS_xQk4A",
  authDomain: "syntecx-d6634.firebaseapp.com",
  projectId: "syntecx-d6634",
  storageBucket: "syntecx-d6634.appspot.com",
  messagingSenderId: "477849312561",
  appId: "1:477849312561:web:1c87af34df571e6b94a410",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
export const db = getFirestore(app);
export const storage = getStorage(app);