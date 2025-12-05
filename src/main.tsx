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
import ProductDetail from "./features/productDetail";
import ShoppingCart from "./features/shoppingCart";
import Profile from "./features/profile";
import ProtectedRoute from "./features/home/components/ProtectedRoute";
import EditProfilePage from "./features/profile/components/EditProfilePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/*" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path="product-detail/:id" element={<ProductDetail />} />
          </Route>

          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit-profile" element={<EditProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
