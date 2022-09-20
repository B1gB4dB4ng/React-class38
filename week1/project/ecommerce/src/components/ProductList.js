import React, { useState } from "react";
import categories from "../fake-data/all-categories.js";
import products from "../fake-data/all-products.js";
import ProductCard from "./ProductCard.js";
import CategoryButton from "./Button.js";

export default function ProductList() {
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState(null);

  const selectCategory = (e) => {
    const buttonText = e.target.innerText;
    const categoryName = buttonText.slice(6);
    setCategory(categoryName);
    setSelected(e.target.id);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="categoryButton">
        {categories.map((el, index) => (
          <CategoryButton
            id={index}
            text={el}
            eventHandler={selectCategory}
            selected={selected}
          />
        ))}
      </div>

      <div className="product-list">
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <ProductCard value={product} />
          ))}
      </div>
    </div>
  );
}
