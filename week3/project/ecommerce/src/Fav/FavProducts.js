import React, { useContext } from "react";

import ProductCard from "../components/ProductCard";

import { FavContext } from "./FavContext";

export const FavProducts = () => {
  const { favArray } = useContext(FavContext);

  return (
    <>
      <h1>Fav Products</h1>
      <div className="fav-products">
        {favArray.length > 0 ? (
          favArray.map((product) => (
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
