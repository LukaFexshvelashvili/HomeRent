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
// import AdminPanel from "./pages/AdminPanel/AdminPanel";
import { Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "./store/store";
// import { Tuser } from "./store/data/userSlice";

function App() {
  // const user: Tuser = useSelector((store: RootState) => store.user);
  return (
    <>
      <Navbar />
      <div className="content_container">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="Search" element={<Search />} />
            <Route path="Product" element={<Product />} />
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="Profile/*" element={<Profile />} />
            <Route path="MaclerService" element={<MaclerService />} />
            <Route path="MaclerChoose" element={<MaclerChoose />} />
            <Route path="Maclerconditions" element={<Maclerconditions />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
