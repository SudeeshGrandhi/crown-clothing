import { createContext, useState } from "react";

//we will get productToAdd from product
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  quanti: 0,
});

export const CartProvider = (props) => {
  const { children } = props;
  const [isCartOpen, setIsCartOpen] = useState();
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const quanti = cartItems
    .map((cartItem) => {
      return cartItem.quantity;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, addItemToCart, quanti }}
    >
      {children}
    </CartContext.Provider>
  );
};
