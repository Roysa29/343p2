import {React, useEffect, useRef }from "react";
import "./productStyle.css";

const ProductList = props => {
  const { products } = props;
  function open() {
    let popup = document.getElementById("pop");
    document.getElementById("blind").classList.add("opaque")
    popup.classList.add("openForm")
    
  }

  function close() {
    let popup = document.getElementById("pop");
  }
  
  const renderProducts = products.map(({ id, title, category, category2}) => {
    return (

      <div className="products">
            <li key={id} >
              <div>
                
                <button type="submit">
                  <img src={category2} onClick={() => open()}  alt="buttonpng" border="0"/>

                </button>

              </div>

            </li>
      </div>

    );
  });

  return <ul>{renderProducts}</ul>;
};


export default ProductList;
