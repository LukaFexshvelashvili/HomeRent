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
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { checkUIStorage } from "./hooks/UIFunctions";
import { useDispatch, useSelector } from "react-redux";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import axiosCall from "./hooks/axiosCall";
import { loggedUser, makeUserSession } from "./hooks/serverFunctions";
import { RootState } from "./store/store";
import { Tuser } from "./store/data/userSlice";
import CheckRoutes from "./CheckRoutes";
import Logout from "./pages/Logout";
import MyProducts from "./pages/Profile/components/MyProducts";
import SavedProducts from "./pages/Profile/components/SavedProducts";
import LastSeenProducts from "./pages/Profile/components/LastSeenProducts";
import Settings from "./pages/Profile/components/Settings";
import ProfileInfo from "./pages/Profile/components/ProfileInfo";

// import { useSelector } from "react-redux";
// import { RootState } from "./store/store";
// import { Tuser } from "./store/data/userSlice";

function App() {
  const UISettings = useSelector((store: RootState) => store.webUI);
  const user: Tuser = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axiosCall
      .get("authentication/user_get", { withCredentials: true })
      .then((res) =>
        makeUserSession(dispatch, {
          ...res.data,
          favorites: JSON.parse(res.data.favorites),
        })
      );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    loggedUser(navigate, user.isLogged);
  }, [navigate, user.isLogged, location.pathname]);

  useLayoutEffect(() => {
    checkUIStorage(dispatch, UISettings);
  }, []);

  return (
    <>
      <CheckRoutes>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="Search" element={<Search />} />
            <Route path="Product" element={<Product />} />
            <Route path="Product/:id" element={<Product />} />
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="Profile/*" element={<Profile />}>
              <Route index element={<MyProducts />} />
              <Route path="MyProducts" element={<MyProducts />} />
              <Route path="SavedProducts" element={<SavedProducts />} />
              <Route path="LastSeenProducts" element={<LastSeenProducts />} />
              <Route path="Settings" element={<Settings />} />
              <Route path="ProfileInfo" element={<ProfileInfo />} />
            </Route>
            <Route path="MaclerService" element={<MaclerService />} />
            <Route path="MaclerChoose" element={<MaclerChoose />} />
            <Route path="Maclerconditions" element={<Maclerconditions />} />
            <Route path="AdminPanel" element={<AdminPanel />} />
          </Route>
        </Routes>
      </CheckRoutes>
    </>
  );
}

export default App;
