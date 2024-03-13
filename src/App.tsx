import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import Product from "./pages/Product/Product";
import Register from "./pages/Authentication/Register";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Search from "./pages/Search/Search";
import AddProduct from "./pages/AddProduct/AddProduct";
import Profile from "./pages/Profile/Profile";
import MaclerService from "./pages/MaclerService/MaclerService";
import MaclerChoose from "./pages/MaclerService/MaclerChoose";
import Maclerconditions from "./pages/MaclerService/Maclerconditions";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="content_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/MaclerService" element={<MaclerService />} />
          <Route path="/MaclerChoose" element={<MaclerChoose />} />
          <Route path="/Maclerconditions" element={<Maclerconditions />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
