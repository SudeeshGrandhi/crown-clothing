import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const addCateToFirestore = async (collectionKey, object) => {
  const categoriesRef = collection(database, collectionKey);
  const batch = writeBatch(database);

  object.forEach((object) => {
    const categoryDocRef = doc(categoriesRef, object.id);

    batch.set(categoryDocRef, object);
  });
  batch.commit();
};

//We are storing out SHOP_DATA to firestore Database
//Transaction is succesful(ex transfer of money) this can be achieved through batches

export const addCategoriesAndDocumentsToFireStore = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(database, collectionKey);
  const batch = writeBatch(database);

  objectsToAdd.forEach((object) => {
    const collectionDocRef = doc(
      collectionRef,
      object.title.toLocaleLowerCase()
    );
    batch.set(collectionDocRef, object);
  });
  batch.commit();
};

//We are getting out SHOP_DATA from firestore Database

export const getCategoriesAndDocumentFromFireStore = async () => {
  const collectionRef = collection(database, "categories");
  const q = query(collectionRef);

  const collectionSnapshot = await getDocs(q);

  const categoryMap = collectionSnapshot.docs.reduce((acc, element) => {
    const { title, items } = element.data();
    acc[title.toLocaleLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
export const userCollectionFromAuthentication = async (
  user,
  additionalInformation = {}
) => {
  if (!user) return;
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
      ...additionalInformation,
    });
  } else {
    return userDocRef;
  }
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
  return signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
