import { createContext, useState } from "react";

export const CartOpenContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartOpenProvider = (props) => {
  const { children } = props;
  const [isCartOpen, setIsCartOpen] = useState();
  return (
    <CartOpenContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartOpenContext.Provider>
  );
};
