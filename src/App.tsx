import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import LargeWithNewsletter from "./Components/Footer";
import Home from "./Components/Home";
import Pricing from "./Components/Pricing";
import { Product } from "./Components/Product";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <LargeWithNewsletter />
    </>
  );
}

export default App;
