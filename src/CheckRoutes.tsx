import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Tuser } from "./store/data/userSlice";
import SuspendedAccount from "./pages/SuspendedAccount";
import Logout from "./pages/Logout";
import { useDispatch } from "react-redux";
import { clearAddProduct } from "./store/data/addProductSlice";

export default function CheckRoutes(props: {
  children: JSX.Element;
  user: Tuser;
}) {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      props.user.isLogged &&
      props.user.banned == 1 &&
      !location.pathname.includes("Logout")
    ) {
      navigate("/SuspendedAccount");
    }
    dispatch(clearAddProduct());

    setPath(location.pathname);
  }, [navigate, props.user.banned, path]);
  console.log(location.pathname);
  console.log(location.pathname.includes("Login"));

  return (
    <>
      {location.pathname.includes("Login") ||
      location.pathname.includes("Register") ||
      location.pathname.includes("ForgotPassword") ? (
        <>{props.children}</>
      ) : (
        <>
          {props.user.banned == 1 ? (
            location.pathname.includes("Logout") ? (
              <Logout />
            ) : null
          ) : null}
          {!location.pathname.includes("SuspendedAccount") ? <Navbar /> : null}
          {props.user.banned !== 1 ? (
            <>
              <div className="content_container">{props.children}</div>
            </>
          ) : (
            <SuspendedAccount />
          )}
          {!location.pathname.includes("SuspendedAccount") ? <Footer /> : null}
        </>
      )}
    </>
  );
}
