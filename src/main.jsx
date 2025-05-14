import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./Routes/Route.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./Provider/AuthProvider.jsx";
import WishListProvider from "./Provider/WishListProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishListProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </WishListProvider>
  </StrictMode>
);
