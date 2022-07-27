import { createContext, useState } from "react";
import PRODUCTS from "../assets/shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
