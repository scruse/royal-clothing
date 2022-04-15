import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";
const Categories = (props) => {
    const categories  = props.categories;
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Categories;
