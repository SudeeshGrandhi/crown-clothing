import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag (1).svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, quanti } = useContext(CartContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quanti}</span>
    </div>
  );
};

export default CartIcon;
