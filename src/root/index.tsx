import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ShoppingCard from "../components/shoppingCard";
import Profile from "../pages/profile";
import User from "../components/user";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/shop/:category/:flower_id" element={<Shop />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
        <Route path="/profile/:profile_section" element={<Profile />} />
        <Route
          path={`/user/${localStorage.getItem("userID")}`}
          element={<User />}
        />
      </Route>
    </Routes>
  );
};

export default Root;
