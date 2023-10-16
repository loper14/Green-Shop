import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ShoppingCard from "../components/shoppingCard";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/shop/:category/:flower_id" element={<Shop />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
      </Route>
    </Routes>
  );
};

export default Root;
