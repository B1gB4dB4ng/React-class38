import React from "react";

export default function CategoryButton({ id, text, eventHandler, selected }) {
  return (
    <button
      id={id}
      onClick={eventHandler}
      className={selected === id.toString() ? "button-active" : undefined}
      key={id.toString()}
    >
      {text.replace("FAKE:", "")}
    </button>
  );
}
