import React, { useContext } from "react";
import { FavContext } from "../Context/FavContext";
import heart1 from "./../img/heart1.png";
import heart2 from "./../img/heart2.png";

export default function LikeIcon({ product }) {
  const { favorites, addFav, kickFav } = useContext(FavContext);
  const isItFav = (id) => {
    const result = favorites.some((product) => product.id === id);
    return result;
  };

  return isItFav(product.id) ? (
    <div className="heart" onClick={() => kickFav(product.id)}>
      <img className="heart-icon" src={heart1} alt="fav-icon" />
    </div>
  ) : (
    <div className="heart" onClick={() => addFav(product)}>
      <img className="heart-icon" src={heart2} alt="fav-icon" />
    </div>
  );
}
