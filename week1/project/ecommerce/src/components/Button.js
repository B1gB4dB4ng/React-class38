import React from "react";

export default function CategoryButton({
  id,
  text,
  eventHandler,

  index,
}) {
  return (
    <button id={id} onClick={eventHandler} key={index}>
      {text.replace("FAKE:", "")}
    </button>
  );
}
