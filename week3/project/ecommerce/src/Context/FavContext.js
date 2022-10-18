import React, { useState, createContext } from "react";

export const FavContext = createContext();

export function FavProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFav = (product) => {
    setFavorites([...favorites, product]);
  };
  const kickFav = (id) => {
    setFavorites(favorites.filter((product) => product.id !== id));
  };

  return (
    <FavContext.Provider value={{ favorites, addFav, kickFav }}>
      {children}
    </FavContext.Provider>
  );
}
