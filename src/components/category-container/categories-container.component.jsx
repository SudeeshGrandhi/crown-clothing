import "./categories-container.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CatgoriesConatiner = (props) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((category) => {
        const { id, imageUrl, title } = category;
        return <CategoryItem imageUrl={imageUrl} title={title} key={id} />;
      })}
    </div>
  );
};
export default CatgoriesConatiner;
