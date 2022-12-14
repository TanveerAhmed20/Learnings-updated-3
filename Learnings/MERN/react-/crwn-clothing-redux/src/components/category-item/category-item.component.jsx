import "./category-item.styles.scss";

const CategoryItem = (props) => {
  const { imageUrl, title } = props.category;
  console.log(imageUrl);

  return (
    <div
      className="category-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className ="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
