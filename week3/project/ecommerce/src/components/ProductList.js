import React, { useState } from "react";
import Error from "./Error.js";
import ProductCard from "./ProductCard.js";
import CategoryButton from "./Button.js";
import Loading from "./Loading.js";
import { useFetch } from "./useFetch.js";

export default function ProductList() {
  const [selected, setSelected] = useState("");

  const categoryURL = "https://fakestoreapi.com/products/categories";

  const productListURL = selected
    ? `https://fakestoreapi.com/products/category/${selected}`
    : "https://fakestoreapi.com/products";

  const {
    data: category,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch(categoryURL);

  const {
    data: products,
    loading: productLoading,
    error: productError,
  } = useFetch(productListURL);

  return categoryLoading ? (
    <Loading />
  ) : categoryError ? (
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
      {productLoading ? (
        <Loading loading={productLoading} />
      ) : productError ? (
        <Error error={productError} />
      ) : (
        <div className="product-list" key={category}>
          {products.map((product) => (
            <div className="productBox">
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
