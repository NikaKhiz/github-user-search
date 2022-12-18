import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProveder } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProveder>
      <App />
    </AppProveder>
  </React.StrictMode>
);
