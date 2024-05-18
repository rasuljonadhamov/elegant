import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ContactUsPage from "./pages/ContactUsPage";
import Articles from "./components/Article";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/blog" element={<Articles />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
