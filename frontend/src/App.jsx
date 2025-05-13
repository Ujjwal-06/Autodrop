import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/User";
import Products from "./pages/Product";
import ShopifyCategoryPage from "./pages/Categories";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Users />} />
      <Route path="/product" element={<Products />} />
      <Route path="/shopifycategories" element={<ShopifyCategoryPage />} />
    </Routes>
  );
}

export default App;
