import React from "react";
import { Link } from "react-router-dom";
import LikeIcon from "./LikeIcon";

export default function ProductCard({ product }) {
  return (
    <div>
      <Link
        className="product-card"
        to={`/products/${product.id}`}
        key={product.id}
      >
        <div className="cards">
          <img className="card-img" src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </div>
      </Link>
      <LikeIcon product={product} />
    </div>
  );
}
