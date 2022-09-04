import React, { useContext } from "react";
import { Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
// import SHOP_DATA from '../../shop-data.json'
import "./shop.styles.scss";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  //  console.log(players)

  console.log(categoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title,idx) => <Fragment key = {idx}>
          <h1 className="category-title" >{title}</h1>
          <div className="products-container">
            {categoriesMap[title].map((product, idx) => (
              <ProductCard product={product} key={idx}></ProductCard>
            ))}
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Shop;
