import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const loadData = async () => {
    const res = axios.post(
      "https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      {
        brandCode: "UC",
        countryCode: "IN",
        companyId: "SUSHIL",
        calledBy: "MAKE",
        loginUserId: "RAVI",
        loginIpAddress: "180.151.78.50",
      }
    );
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
