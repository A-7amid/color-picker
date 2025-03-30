import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ColorsProvider } from "./context/colors.provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </StrictMode>
);
