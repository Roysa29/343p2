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
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAomGFkhCpF5jGBEcQdR1QqYDEbBsQxDgHOkvdrAT5SoMlcN2BaUKdY5LS4bkPHZGgXx4&usqp=CAU"
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 8,
    "title": "Product 1",
    "category": "shirt",
    "category2": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
  },
  {
    "id": 9,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAomGFkhCpF5jGBEcQdR1QqYDEbBsQxDgHOkvdrAT5SoMlcN2BaUKdY5LS4bkPHZGgXx4&usqp=CAU"
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 1,
    "title": "Product 1",
    "category": "shirt",
    "category2": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAomGFkhCpF5jGBEcQdR1QqYDEbBsQxDgHOkvdrAT5SoMlcN2BaUKdY5LS4bkPHZGgXx4&usqp=CAU"
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 1,
    "title": "Product 1",
    "category": "shirt",
    "category2": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAomGFkhCpF5jGBEcQdR1QqYDEbBsQxDgHOkvdrAT5SoMlcN2BaUKdY5LS4bkPHZGgXx4&usqp=CAU"
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 1,
    "title": "Product 1",
    "category": "shirt",
    "category2": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
  },
  {
    "id": 2,
    "title": "Product 2",
    "category": "sweatshirt",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAomGFkhCpF5jGBEcQdR1QqYDEbBsQxDgHOkvdrAT5SoMlcN2BaUKdY5LS4bkPHZGgXx4&usqp=CAU"
  },
  {
    "id": 3,
    "title": "Product 3",
    "category": "hat",
    "category2": "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
  },
  {
    "id": 4,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 5,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
  },
  {
    "id": 6,
    "title": "Product 4",
    "category": "pin",
    "category2": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
  },
  {
    "id": 7,
    "title": "Product 5",
    "category": "sticker",
    "category2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPKMxClojoj90eckqn41798jGrBMp61BxA&usqp=CAU"
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

  render() {
    const checkedProducts = Object.entries(this.state.categories)
      .filter(category => category[1])
      .map(category => category[0]);
    const filteredProducts = this.state.products.filter(({ category }) =>
      checkedProducts.includes(category)
    );

    return (
      <div className="merch">
        <div className="topnav">
        <h1>JMU Dungeons and Dragons Club Merch Store</h1>
        </div>
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
    );
  }
}
