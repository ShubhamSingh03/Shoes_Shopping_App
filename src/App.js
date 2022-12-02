import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/Hero/HeroBanner";
import Product from "./components/Cards/Product";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Navbar />
        </div>
        <div>
          <HeroBanner />
        </div>
      </header>
      <Product />
      <Footer />
    </div>
  );
}

export default App;
