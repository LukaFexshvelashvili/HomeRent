import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Navbar />
      <div className="content_container">
        <Product />
      </div>
      <Footer />
    </>
  );
}

export default App;
