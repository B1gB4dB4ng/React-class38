import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

export default function ProductDetail() {
  const params = useParams();

  const productURL = `https://fakestoreapi.com/products/${params.productId}`;
  const { data: product } = useFetch(productURL);

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.description} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>
        <strong>$</strong>
        {product.price}
      </p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
