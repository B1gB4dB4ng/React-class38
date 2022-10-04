import React, { useState, createContext } from "react";

export const FavContext = createContext();

export function FavProvider({ children }) {
  const [favArray, setFavArray] = useState([]);

  const addFav = (product) => {
    setFavArray([...favArray, product]);
  };
  const kickFav = (id) => {
    setFavArray(favArray.filter((product) => product.id !== id));
  };

  return (
    <FavContext.Provider value={{ favArray, addFav, kickFav }}>
      {children}
    </FavContext.Provider>
  );
}
