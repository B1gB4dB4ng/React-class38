import React from "react";

export default function ProductCard({ value }) {
  return (
    <div className="cards">
      <img src={value.image} alt={value.title} />
      <h3>{value.title.slice(6)}</h3>
    </div>
  );
}
