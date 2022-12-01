import React from "react";
import Product from "./Product";
import "./productStyle.css";

const ProductList = props => {
  const { products } = props;

  const renderProducts = products.map(({ id, title, category, category2 }) => {
    return (

      <div className="products">
            <li key={id}>
              <img src={category2} />
            </li>
      </div>

    );
  });

  return <ul>{renderProducts}</ul>;
};


export default ProductList;
