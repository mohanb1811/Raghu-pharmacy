import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Component/Homepage/Homepage";
import Products from "./Component/Products/Products";
import About from "./Component/About/About";
import Reviews from "./Component/Reviews/Reviews";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Categories from "./Component/Categories/Categories";
import Raghu from "./Component/Raghu/Raghu";
import Delivery from "./Component/Delivery/Delivery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about-raghu" element={<Raghu />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/catagories" element={<Categories />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/del" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;