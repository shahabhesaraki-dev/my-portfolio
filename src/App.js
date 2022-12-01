import GlobalStyles from "./GlobalStyles";
import Home from "./Components/HomePage/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificate from "./Components/Certificate/certificate";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
