import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  userCollectionFromAuthentication,
} from "../utils/firebase/firebase.utils";

//we want user object in global level
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//initiating context component which is provider

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        userCollectionFromAuthentication(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
