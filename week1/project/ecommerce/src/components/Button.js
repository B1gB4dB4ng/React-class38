import React from "react";

export default function CategoryButton({
  id,
  text,
  eventHandler,
  selected,
  index,
}) {
  return (
    <button
      id={id}
      onClick={eventHandler}
      className={selected === id.toString() ? "button-active" : undefined}
      key={index}
    >
      {text.replace("FAKE:", "")}
    </button>
  );
}
