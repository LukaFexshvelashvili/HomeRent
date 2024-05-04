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

import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { checkUIStorage } from "./hooks/UIFunctions";
import { useDispatch, useSelector } from "react-redux";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import axiosCall from "./hooks/axiosCall";
import { loggedUser, makeUserSession } from "./hooks/serverFunctions";
import { RootState } from "./store/store";
import { Tuser, clearSession } from "./store/data/userSlice";
import CheckRoutes from "./CheckRoutes";
import Logout from "./pages/Logout";
import MyProducts from "./pages/Profile/components/MyProducts";
import SavedProducts from "./pages/Profile/components/SavedProducts";
import LastSeenProducts from "./pages/Profile/components/LastSeenProducts";
import Settings from "./pages/Profile/components/Settings";
import ProfileInfo from "./pages/Profile/components/ProfileInfo";
import Balance from "./pages/Profile/components/Balance";
import NotFound from "./pages/NotFound";

function App() {
  const UISettings = useSelector((store: RootState) => store.webUI);
  const user: Tuser = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refresh = useRef<boolean>(true);

  useEffect(() => {
    if (refresh.current) {
      refresh.current = false;
      axiosCall
        .get("authentication/user_get", { withCredentials: true })
        .then((res) => {
          if (res.data.status == 100) {
            makeUserSession(dispatch, {
              ...res.data.user,
              favorites: JSON.parse(res.data.user.favorites),
            });
            if (res.data.user.banned == 1) {
              navigate("/SuspendedAccount");
            }
          } else if (res.data.status == 0) {
            dispatch(clearSession());
          }
        });
    }
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
      <CheckRoutes user={user}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            {user.isLogged ? (
              <Route path="Logout" element={<Logout />} />
            ) : null}
            <Route path="Search" element={<Search />} />
            <Route path="Product" element={<Product />} />
            <Route path="Product/:id" element={<Product />} />
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="SuspendedAccount" />
            <Route path="Profile/*" element={<Profile />}>
              {user.isLogged ? <Route index element={<MyProducts />} /> : null}
              {user.isLogged ? (
                <Route path="MyProducts" element={<MyProducts />} />
              ) : null}
              {user.isLogged ? (
                <Route path="Balance" element={<Balance />} />
              ) : null}
              <Route path="SavedProducts" element={<SavedProducts />} />
              {user.isLogged ? (
                <Route path="LastSeenProducts" element={<LastSeenProducts />} />
              ) : null}
              <Route path="Settings" element={<Settings />} />
              {user.isLogged ? (
                <Route path="ProfileInfo" element={<ProfileInfo />} />
              ) : null}
            </Route>
            <Route path="MaclerService" element={<MaclerService />} />
            <Route path="MaclerChoose" element={<MaclerChoose />} />
            <Route path="Maclerconditions" element={<Maclerconditions />} />
            {user.isLogged ? (
              <Route path="AdminPanel" element={<AdminPanel />} />
            ) : null}
          </Route>
        </Routes>
      </CheckRoutes>
    </>
  );
}

export default App;
