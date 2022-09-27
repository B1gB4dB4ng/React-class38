import React from "react";
import ProductList from "./components/ProductList.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetails.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
