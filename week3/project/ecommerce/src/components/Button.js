import React from "react";

export default function CategoryButton({ category, selected, setSelected }) {
  const handleOnClick = () => {
    setSelected(category);
  };
  return (
    <div className="product-filter">
      <button
        onClick={handleOnClick}
        className={selected === category && "button-active"}
      >
        {category}
      </button>
    </div>
  );
}
