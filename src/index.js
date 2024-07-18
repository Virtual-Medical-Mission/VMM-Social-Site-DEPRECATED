import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import layout from "./pages/layout";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  createHashRouter,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Clubs from "./pages/clubs";
import NoPage from "./pages/nopage";
import Telemed from "./pages/vmm";
import MustangsApp from "./pages/mustangsApp";
import { ComplexNavbar } from "./components/navbar";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/vmm" element={<Telemed />} />
        <Route path="/mustangsApp" element={<MustangsApp />} />
      </Routes>
    </>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
