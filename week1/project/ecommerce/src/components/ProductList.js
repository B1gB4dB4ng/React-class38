import React, { useState } from "react";
import categories from "../fake-data/all-categories.js";
import products from "../fake-data/all-products.js";
import ProductCard from "./ProductCard.js";
import CategoryButton from "./Button.js";

export default function ProductList() {
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState(null);
  const [createProduct, setCreateProduct] = useState([]);

  const selectCategory = (e) => {
    const buttonText = e.target.innerText;

    setCategory(buttonText);
    setSelected(e.target.id);
    setCreateProduct(
      products
        .filter((product) => product.category === category)

        .map((product) => <ProductCard key={product.id} value={product} />)
    );
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="categoryButton">
        {categories.map((el, id) => (
          <CategoryButton
            key={id}
            id={id}
            text={el}
            eventHandler={selectCategory}
            selected={selected}
          />
        ))}
      </div>

      <div className="product-list">{createProduct}</div>
    </div>
  );
}
