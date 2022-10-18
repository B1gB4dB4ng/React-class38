import React from "react";
import ProductList from "./Pages/ProductList.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetails.js";
import Nav from "./Components/Nav.js";
import { FavProvider } from "../src/Context/FavContext.js";
import { FavProducts } from "./Pages/FavProducts.js";

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
