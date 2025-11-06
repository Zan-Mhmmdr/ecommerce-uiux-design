import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./features/authentication/components/Layout";
import UserLogin from "./features/authentication/components/UserLogin";
import UserRegister from "./features/authentication/components/UserRegister";
import HomePage from "./features/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
        </Route>

        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
