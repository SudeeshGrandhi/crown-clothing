import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = (props) => {
  const { title, products } = props;
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title>{title.toLocaleUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, i) => {
            return i < 4;
          })
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
