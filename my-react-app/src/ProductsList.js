import {React}from "react";
import "./productStyle.css";

const ProductList = props => {
  const { products } = props;
  function open(img, cat) {
    let popup = document.getElementById("pop");
    document.getElementById("blind").classList.add("opaque")
    document.getElementById("picture").src = img
    document.getElementById("title").innerHTML = cat
    popup.classList.add("openForm")
    
  }


  
  const renderProducts = products.map(({ id, title, category, category2}) => {
    return (

      <div className="products">
            <li key={id} >
              <div>
                
                <button type="submit">
                  <img src={category2} onClick={() => open(category2, title)}  alt="buttonpng" border="0"/>

                </button>

              </div>

            </li>
      </div>

    );
  });

  return <ul>{renderProducts}</ul>;
};


export default ProductList;
