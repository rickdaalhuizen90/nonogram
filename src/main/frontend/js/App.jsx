import { createRoot } from "react-dom/client";
import React from "react";
import "reset-css/reset.css";
import "normalize-css/normalize.css";
import Header from "./components/Header";

function App() {
  return (<Header name="World" />);
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);