import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import Product from "./pages/Product/Product";
import Register from "./pages/Authentication/Register";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Navbar />
      <div className="content_container">
        <Search />
      </div>
      <Footer />
    </>
  );
}

export default App;
