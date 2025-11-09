import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./features/authentication/components/Layout";
import UserLogin from "./features/authentication/components/UserLogin";
import UserRegister from "./features/authentication/components/UserRegister";
import HomePage from "./features/home";
import SearchPage from "./features/search";
import ProductPage from "./features/products";
import FilterPage from "./features/filter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
        </Route>

        <Route path="/*" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="products">
          <Route index element={<ProductPage />} />
          <Route path="filter" element={<FilterPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
