import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { CartProvider } from "./components/context/CartContext";
import { WishlistProvider } from "./components/context/WishlistContext";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <CartProvider>
        <WishlistProvider>

          <App />

        </WishlistProvider>
      </CartProvider>

    </BrowserRouter>

  </React.StrictMode>

);