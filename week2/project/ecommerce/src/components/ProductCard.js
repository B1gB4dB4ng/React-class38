import React from "react";

export default function ProductCard({ product: { image, title, id } }) {
  return (
    <div className="cards">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
