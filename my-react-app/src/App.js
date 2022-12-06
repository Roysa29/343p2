import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductsList";
// import { productsList } from "./data.json";
import "./styles.css";
import "./productStyle.css";

function close() {
  let popup = document.getElementById("pop");
  document.getElementById("blind").classList.remove("opaque")
  popup.classList.remove("openForm")
}
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

  createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
    }

  getCart() {
    var cart;
    var cookie = getCookie("MyCart");

    if (cookie != "") {
      cart = JSON.parse(cookie);
    } else {
      cart = [];
    }
    return cart;
  }

  addToCart() {
    var cart = getCart();
    cart.push(item);
    createCookie("MyCart", JSON.stringify(cart), 2);
  }

  removeFromCart() {
    var cart = getCart();
    if (cart.length() > 0) {
      for (i = 0; i < cart.length; i++) {
        if (cart[i] == item) {
          //cart.slice(i, i);
        }
      }
      createCookie("MyCart", JSON.stringify(cart), 2);
    }
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
            <button type="submit" onClick={() => close()} class ="exit"> <img src="C:/Users/Magic/OneDrive/Desktop/cs343/343p2/my-react-app/src/cancel.png"  alt="Cancel Button" border="0"/></button>
            <button type="submit" onClick={() => addToCart()}>Add it to the cart</button>
          </div>
          <div id="cart" class="form">
            <p>"car"</p>
          </div>
      </div>


    );
  }
}
