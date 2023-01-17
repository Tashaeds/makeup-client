import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <nav></nav>
      <ul>
        <li>
          <link to="/">Home</link>
          <link to="/productByBrand">Products</link>
          <link to="/about">About</link>
        </li>
      </ul>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productByBrand" element={<Products />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
