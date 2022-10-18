import React, { useContext } from "react";

import ProductCard from "../Components/ProductCard";

import { FavContext } from "../Context/FavContext";

export const FavProducts = () => {
  const { favorites } = useContext(FavContext);

  return (
    <>
      <h1>Fav Products</h1>
      <div className="fav-products">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <div className="fav-box">
              <ProductCard product={product} key={product.id} />
            </div>
          ))
        ) : (
          <h2 className="favErrorText">
            Sorry,You havent choose any product yet !
          </h2>
        )}
      </div>
    </>
  );
};
