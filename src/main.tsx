import React from "react";
import ReactDOM from "react-dom/client";
import App, { renderToDom } from "./App.tsx";

const container = document.getElementById("root");
if (container) {
  renderToDom(container);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
