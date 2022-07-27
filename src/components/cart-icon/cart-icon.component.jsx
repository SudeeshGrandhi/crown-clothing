import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartOpenContext } from "../../contexts/cartopen.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag (1).svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartOpenContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
