import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj4s_7OjKjjgdjmgEzi171NcoWxROeTCU",
  authDomain: "crown-clothing-c03f8.firebaseapp.com",
  projectId: "crown-clothing-c03f8",
  storageBucket: "crown-clothing-c03f8.appspot.com",
  messagingSenderId: "767588679775",
  appId: "1:767588679775:web:e87ffa24932e383bbc9bea",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

const database = getFirestore();

export const userCollectionFromAuthentication = async (user) => {
  //building a document
  const userDocRef = doc(database, "users", user.uid);

  //getting Data
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const date = new Date();
    //setting Data
    await setDoc(userDocRef, {
      displayName,
      email,
      date,
    });
  } else {
    return userDocRef;
  }
};
