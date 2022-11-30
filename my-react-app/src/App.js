import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductsList";
// import { productsList } from "./data.json";
import "./styles.css";
import "./productStyle.css";

const productsList = [
  {
    "id": 1,
    "title": "Product 1",
    "category": "first",
    "category2": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "second",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAomGFkhCpF5jGBEcQdR1QqYDEbBsQxDgHOkvdrAT5SoMlcN2BaUKdY5LS4bkPHZGgXx4&usqp=CAU"
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "first",
    "category2": "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "second",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  }
]

export default class App extends Component {
  state = {
    products: productsList,
    categories: {
      first: false,
      second: false
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

  render() {
    const checkedProducts = Object.entries(this.state.categories)
      .filter(category => category[1])
      .map(category => category[0]);
    const filteredProducts = this.state.products.filter(({ category }) =>
      checkedProducts.includes(category)
    );

    return (
      <div className="merch">
        <h1>Merch</h1>
        <div className="filter">
          <Checkbox
            id="1"
            title="Hats"
            name="first"
            checked={this.state.categories.first}
            handleChange={this.handleChange}
          />
          <Checkbox
            id="2"
            title="SweatShirts"
            name="second"
            handleChange={this.handleChange}
            checked={this.state.categories.second}
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
    );
  }
}
