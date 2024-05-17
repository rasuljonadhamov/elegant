import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mx-auto p-4">
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
