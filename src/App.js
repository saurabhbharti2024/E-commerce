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
        <Route path="/E-commerce/" element={<Home />} />
        <Route path="/E-commerce/cart" element={<Cart />} />
        <Route path="/E-commerce/products" element={<Products />} />
        <Route path="/E-commerce/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
