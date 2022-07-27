import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

const ProductCard = (props) => {
  const { product } = props;
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const productToAdd = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container ">
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={productToAdd}>ADD TO CART</Button>
    </div>
  );
};

export default ProductCard;
