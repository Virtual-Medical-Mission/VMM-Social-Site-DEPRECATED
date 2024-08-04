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
import FAQs from "./pages/FAQs";
import NoPage from "./pages/nopage";
import ContactPage from "./pages/contactPage";
import HistoryPage from "./pages/history";
import { ComplexNavbar } from "./components/navbar";
import OurWorks from "./pages/ourWorks";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/works" element={<OurWorks />} />
        <Route path="*" element={<NoPage />} />
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
