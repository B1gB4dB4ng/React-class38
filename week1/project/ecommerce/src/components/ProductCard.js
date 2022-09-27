import React from "react";

export default function ProductCard({ value: { image, title, id } }) {
  return (
    <div className="cards">
      <img src={image} alt={title} />
      <h3>{title.replace("FAKE:", "")}</h3>
    </div>
  );
}
