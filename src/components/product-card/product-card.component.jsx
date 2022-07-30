import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = (props) => {
  const { product } = props;
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const productToAdd = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img alt={name} src={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={productToAdd} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
