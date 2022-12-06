import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductsList";
// import { productsList } from "./data.json";
import "./styles.css";
import "./productStyle.css";

// Just placeholder images for now
const productsList = [
  {
    "id": 1,
    "title": "Product 1",
    "category": "shirt",
    "category2": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
  }
]

export default class App extends Component {
  state = {
    products: productsList,
    categories: {
      shirt: false,
      sweatshirt: false,
      hat: false,
      pin: false,
      sticker: false,
    }
  };

  handleChange = e => {
    const { name } = e.target;

    this.setState(prevState => {
      return {
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name]
        }
      };
    });
  };

  open() {
    let popup = document.getElementById("cart");
    document.getElementById("blind").classList.add("opaque")
    popup.classList.add("openForm")
    
  }

  close() {
    let popup = document.getElementById("cart");
  }


  render() {
    const checkedProducts = Object.entries(this.state.categories)
      .filter(category => category[1])
      .map(category => category[0]);
    const filteredProducts = this.state.products.filter(({ category }) =>
      checkedProducts.includes(category)
    );

    return (

      <div className="merch">
              <div id="blind">
        <div className="topnav">
        <h1>JMU Dungeons and Dragons Club Merch Store</h1>
        </div>
        <button  onClick={() => this.open()} type="submit">
                  <p>Cart</p>
                </button>
        <p>Click On A Product For More Options</p>
        <div className="filter">
          <br></br>
          <br></br>
          <Checkbox
            id="1"
            title="T-Shirts"
            name="shirt"
            checked={this.state.categories.shirt}
            handleChange={this.handleChange}
          />
          <Checkbox
            id="2"
            title="SweatShirts"
            name="sweatshirt"
            handleChange={this.handleChange}
            checked={this.state.categories.sweatshirt}
          />
          <Checkbox
            id="3"
            title="Hats"
            name="hat"
            checked={this.state.categories.hat}
            handleChange={this.handleChange}
          />
          <Checkbox
            id="4"
            title="Pins"
            name="pin"
            checked={this.state.categories.pin}
            handleChange={this.handleChange}
          />
          <Checkbox
            id="5"
            title="Stickers"
            name="sticker"
            checked={this.state.categories.sticker}
            handleChange={this.handleChange}
          />
        </div>
        <ProductList
          products={
            filteredProducts.length === 0
              ? this.state.products
              : filteredProducts
          }
        />
              </div>
            <div id="pop" class="form">
            <p>"how yall doing"</p>
          </div>
          <div id="cart" class="form">
            <p>"car"</p>
          </div>
      </div>


    );
  }
}
