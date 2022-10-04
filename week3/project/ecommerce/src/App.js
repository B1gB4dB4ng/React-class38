import React from "react";
import ProductList from "./components/ProductList.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetails.js";
import Nav from "./components/Nav.js";
import { FavProvider } from "./Fav/FavContext.js";
import { FavProducts } from "./Fav/FavProducts.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <FavProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/favourites" element={<FavProducts />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </FavProvider>
    </div>
  );
}

export default App;
