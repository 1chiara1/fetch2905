import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Navbar from "./Navbar";
import Quiz from "./Quiz";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Navbar />
    <Quiz />
  </StrictMode>,
);
