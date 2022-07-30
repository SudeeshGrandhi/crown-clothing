import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = (props) => {
  const { cartItem } = props;
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    return clearItemFromCart(cartItem);
  };

  const addItemHandler = () => {
    return addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    return removeItemFromCart(cartItem);
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}> &#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}> &#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}> &#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
