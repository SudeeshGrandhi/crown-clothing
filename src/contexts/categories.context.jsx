import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocumentFromFireStore } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoryMap: {},
  setCategoryMap: () => null,
});

export const CategoriesProvider = (props) => {
  const { children } = props;
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const asyncFunction = async () => {
      const categoryMap = await getCategoriesAndDocumentFromFireStore();
      setCategoryMap(categoryMap);
    };
    asyncFunction();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoryMap, setCategoryMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
