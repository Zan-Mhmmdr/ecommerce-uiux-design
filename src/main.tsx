import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./features/authentication/components/Layout";
import UserLogin from "./features/authentication/components/UserLogin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<UserLogin />} />
        </Route>

        <Route path="/*" element={<div>Hello, World!</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
