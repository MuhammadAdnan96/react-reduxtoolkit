import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Protected from "./Utils/Protected-route";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/products"
            element={
              <Protected>
                <Products />
              </Protected>
            }
          />
          <Route
            path="/product-description/:id"
            element={
              <Protected>
                <ProductDetail />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
