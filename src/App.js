import React from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./Components/HomePage/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificate from "./Components/Certificate/certificate";
import Works from "./Components/Certificate/works";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
