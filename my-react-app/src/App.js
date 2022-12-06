import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductsList";
import "./styles.css";
import "./productStyle.css";

import cartLst from './data.json';

function close() {
  let popup = document.getElementById("pop");
  document.getElementById("blind").classList.remove("opaque")
  popup.classList.remove("openForm")
}

function createCookie(name, value, days) {
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

function getCookie(c_name) {
  if (document.cookie.length > 0) {
      var c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
          c_start = c_start + c_name.length + 1;
          var c_end = document.cookie.indexOf(";", c_start);
          if (c_end == -1) {
              c_end = document.cookie.length;
          }
          return unescape(document.cookie.substring(c_start, c_end));
      }
  }
  return "";
}

function getCart() {
  var cart;
  var cookie = getCookie("MyCart");

  if (cookie != "") {
    cart = JSON.parse(cookie);
  } else {
    cart = [];
  }
  return cart;
}

function addToCart() {
  var cart = getCart();
  cart.push(item);
  createCookie("MyCart", JSON.stringify(cart), 2);
}

function removeFromCart() {
  var cart = getCart();
  if (cart.length() > 0) {
    for (var i = 0; i < cart.length; i++) {
      //if (cart[i] == item) {
        //cart.slice(i, i);
      //}
    }
    createCookie("MyCart", JSON.stringify(cart), 2);
  }
}

// Just placeholder images for now
const productsList = [
  {
    "id": 1,
    "title": "Product 1",
    "category": "shirt",
    "category2": require("./images/Box.png")
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": require("./images/Circle.png")
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": require("./images/Pent.png")
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 8,
    "title": "Product 1",
    "category": "shirt",
    "category2": require("./images/Box.png")
  },
  {
    "id": 9,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": require("./images/Circle.png")
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": require("./images/Pent.png")
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 1,
    "title": "Product 1",
    "category": "shirt",
    "category2": require("./images/Box.png")
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": require("./images/Circle.png")
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": require("./images/Pent.png")
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 1,
    "title": "Product 1",
    "category": "shirt",
    "category2": require("./images/Box.png")
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": require("./images/Circle.png")
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": require("./images/Pent.png")
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 1,
    "title": "Product 1",
    "category": "shirt",
    "category2": require("./images/Box.png")
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": require("./images/Circle.png")
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": require("./images/Pent.png")
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": require("./images/Star.png")
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
          <button onClick={() => this.open()} type="submit">
            <p>Cart</p>
          </button>
          <div className="filter">
            <h3><u>Categories</u></h3>
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
          <div type="products">
          <ProductList
            products={
              filteredProducts.length === 0
                ? this.state.products
                : filteredProducts
            }
          />
          </div>
        </div>
            
            <div id="pop" class="form">
            <p id="title">"how yall doing"</p>
            <img src=""  alt="buttonpng" border="0" id="picture" class="fitted"/>
            <button type="submit" onClick={() => close()} class ="exit"> <img src="C:/Users/Magic/OneDrive/Desktop/cs343/343p2/my-react-app/src/cancel.png"  alt="Cancel Button" border="0"/></button>
            <button type="submit" onClick={() => addToCart()}>Add it to the cart</button>
            <p class ="sized">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button type="submit" class="add">Add it to the cart</button>
          </div>
          <div id="cart" class="form">
            <p>"car"</p>
          </div>
      </div>
    


    );
  }
}
