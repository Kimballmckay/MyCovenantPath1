import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import MyCovenantPath from "./MyCovenantPath.tsx";
//import MyCovenantPath from "./MyCovenantPath.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyCovenantPath />
  </StrictMode>
);
