import React, { useState, useEffect } from "react";
import Error from "./Error.js";
import ProductCard from "./ProductCard.js";
import CategoryButton from "./Button.js";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategory(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const url = selected
        ? `https://fakestoreapi.com/products/category/${selected}`
        : "https://fakestoreapi.com/products";
      try {
        const response = await fetch(url);
        const Data = await response.json();

        setProducts(Data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [selected]);

  return loading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : error ? (
    <Error />
  ) : (
    <div>
      <h1>Products</h1>
      <div className="categoryButton">
        {category.map((el, id) => (
          <CategoryButton
            key={el}
            category={el}
            selected={selected}
            setSelected={setSelected}
            id={id}
          />
        ))}
      </div>

      <div className="product-list">
        {products.map((product) => (
          <Link
            className="product-card"
            to={`/products/${product.id}`}
            key={product.id}
          >
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
