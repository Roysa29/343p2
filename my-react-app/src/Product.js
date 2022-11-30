import React from "react";

const Product = ({ title, category, category2 }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{category2}</p>
    </article>
  );
};

export default Product;
