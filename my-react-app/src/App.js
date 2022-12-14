import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductsList";
import "./styles.css";
import "./productStyle.css";
import cancel from './images/Cancel.png';
import cartI from './images/Cart.png';


// Close Item Menu
function close() {
  let popup = document.getElementById("pop");
  document.getElementById("blind").classList.remove("opaque")
  popup.classList.remove("openForm")
}


// Save Cookies
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

// Get Cookies
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

// Get items in the cart
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

// Add items to the cart
function addToCart() {
  var cart = getCart();
  cart.push("");
  createCookie("MyCart", JSON.stringify(cart), 2);
}

// Remove item from the cart
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


const items = []

// JSON of all items in the store
const productsList = [
  {
    "id": 1,
    "title": "T-Shirt",
    "category": "shirt",
    "category2": require("./images/Box.png")
  },
  {
    "id": 2,
    "title": "Athletic SweatShirt",
    "category": "sweatshirt",
    "category2": require("./images/Circle_g.png")
  },
  {
    "id": 2,
    "title": "Designer SweatShirt",
    "category": "sweatshirt",
    "category2": require("./images/Circle_b.png")
  },
  {
    "id": 3,
    "title": "Winter Hat",
    "category": "hat",
    "category2": require("./images/Pent_y.png")
  },
  {
    "id": 3,
    "title": "Hat",
    "category": "hat",
    "category2": require("./images/Pent.png")
  },
  {
    "id": 3,
    "title": "Baseball Cap",
    "category": "hat",
    "category2": require("./images/Pent_g.png")
  },
  {
    "id": 4,
    "title": "Pin",
    "category": "pin",
    "category2": require("./images/Trap.png")
  },
  {
    "id": 5,
    "title": "Grey Sticker",
    "category": "sticker",
    "category2": require("./images/Star.png")
  },
  {
    "id": 7,
    "title": "Blue Sticker",
    "category": "sticker",
    "category2": require("./images/Star_b.png")
  },
  {
    "id": 9,
    "title": "SweatShirt",
    "category": "sweatshirt",
    "category2": require("./images/Circle.png")
  },
  {
    "id": 2,
    "title": "Yellow Sticker",
    "category": "sticker",
    "category2": require("./images/Star_y.png")
  },
  {
    "id": 3,
    "title": "Top Hat",
    "category": "hat",
    "category2": require("./images/Pent_b.png")
  },
  {
    "id": 4,
    "title": "Green Pin",
    "category": "pin",
    "category2": require("./images/Trap_g.png")
  },
  {
    "id": 3,
    "title": "Yellow Pin",
    "category": "pin",
    "category2": require("./images/Trap_y.png")
  },
  {
    "id": 5,
    "title": "Green Sticker",
    "category": "sticker",
    "category2": require("./images/Star_g.png")
  },
  {
    "id": 4,
    "title": "Blue Pin",
    "category": "pin",
    "category2": require("./images/Trap_b.png")
  },
  {
    "id": 1,
    "title": "Designer T-Shirt",
    "category": "shirt",
    "category2": require("./images/Box_b.png")
  },
  {
    "id": 1,
    "title": "Athletic T-Shirt",
    "category": "shirt",
    "category2": require("./images/Box_g.png")
  },
  {
    "id": 1,
    "title": "Winter T-Shirt",
    "category": "shirt",
    "category2": require("./images/Box_y.png")
  },
  {
    "id": 2,
    "title": "Winter SweatShirt",
    "category": "sweatshirt",
    "category2": require("./images/Circle_y.png")
  },
]

export default class App extends Component {
  state = {
    products: productsList,
    items: items,
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

  // Open Cart
  open() {
    let popup = document.getElementById("cart");
    document.getElementById("blind").classList.add("opaque")
    popup.classList.add("openForm")

    let data = localStorage.getItem('cart').split(",");

    data[0] = ''
    data[data.length - 1] = ''

    let list = document.getElementById("myList");

    data.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });

  }

  // Cart Cart
  close() {
    let popup = document.getElementById("cart");
    document.getElementById("blind").classList.remove("opaque")
    popup.classList.remove("openForm")
  }


  // Add item to cart
  addItem() {
    let holder = document.getElementById("title").innerHTML;
    this.state.items.push(holder)
    localStorage.setItem("cart", JSON.stringify(this.state.items));
  }

  // Remove all items from cart
  emptyCart() {
    localStorage.removeItem("cart", JSON.stringify(this.state.items));
    window.location.reload();
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
          <button onClick={() => this.open()} type="submit" class="carty">
            <img src={cartI} border="0" class="cancel" />
          </button>

          {/* Filter on side */}
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

        {/* Item menu */}
        <div id="pop" class="form">
          <p class="heading" id="title">"Placeholder"</p>
          <img src="" alt="buttonpng" border="0" id="picture" class="fitted" />
          <button type="submit" onClick={() => close()} class="exit"> <img src={cancel} border="0" class="cancel" /></button>
          <p class="sized">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button type="submit" onClick={() => this.addItem()} class="add">Add it to the cart</button>
        </div>

        {/* Cart menu */}
        <div id="cart" class="form">
          <p>Shopping Cart</p>
          <button type="submit" onClick={() => this.close()} class="exit"> <img src={cancel} border="0" class="cancel" /></button>
          <button type="submit" onClick={() => this.emptyCart()} class="add">Empty cart</button>
          <br></br>
          <li id="myList"></li>
        </div>
      </div>



    );
  }
}
