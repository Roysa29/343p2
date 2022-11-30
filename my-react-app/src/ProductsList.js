import React from "react";
import Product from "./Product";
import "./productStyle.css";

const ProductList = props => {
  const { products } = props;

  const renderProducts = products.map(({ id, title, category, category2 }) => {
    return (

      <div className="merch">
        <div className="row">
          <div className="column">
            <li key={id}>
              {/* <Product title={title} category={category} category2={category2} /> */}
              <img src={category2} />
            </li>
          </div>
        </div >
      </div>

    );
  });

  return <ul>{renderProducts}</ul>;
};


export default ProductList;
