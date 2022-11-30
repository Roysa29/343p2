import React from "react";
import Product from "./Product";

const ProductList = props => {
  const { products } = props;

  const renderProducts = products.map(({ id, title, category, category2 }) => {
    return (
      <li key={id}>
        {/* <Product title={title} category={category} category2={category2} /> */}
        <img src={category2} />
      </li>
    );
  });

  return <ul>{renderProducts}</ul>;
};

export default ProductList;
