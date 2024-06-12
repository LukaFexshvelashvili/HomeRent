import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Suspense,
  lazy,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { checkUIStorage } from "./hooks/UIFunctions";
import { useDispatch, useSelector } from "react-redux";
import axiosCall from "./hooks/axiosCall";
import { loggedUser, makeUserSession } from "./hooks/serverFunctions";
import { RootState } from "./store/store";
import { Tuser, clearSession } from "./store/data/userSlice";
import CheckRoutes from "./CheckRoutes";
import Logout from "./pages/Logout";
import { TPopups } from "./store/data/popupsSlice";
import ProblemReport from "./components/popups/ProblemReport";
import SharePopup from "./components/popups/SharePopup";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import ServerError from "./pages/ServerError";
import Home from "./pages/Home/Home";

const NotFound = lazy(() => import("./pages/NotFound"));
const SuspendedAccount = lazy(() => import("./pages/SuspendedAccount"));
const Notifications = lazy(
  () => import("./pages/Profile/components/Notifications")
);
const PasswordRecover = lazy(
  () => import("./pages/Authentication/PasswordRecover")
);
const AdsMake = lazy(() => import("./pages/AdsMake/AdsMake"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const MaclerService = lazy(() => import("./pages/MaclerService/MaclerService"));
const MaclerChoose = lazy(() => import("./pages/MaclerService/MaclerChoose"));
const Maclerconditions = lazy(
  () => import("./pages/MaclerService/Maclerconditions")
);
const AdminPanel = lazy(() => import("./pages/AdminPanel/AdminPanel"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Product = lazy(() => import("./pages/Product/Product"));
const Search = lazy(() => import("./pages/Search/Search"));
const AddProduct = lazy(() => import("./pages/AddProduct/AddProduct"));
const Login = lazy(() => import("./pages/Authentication/Login"));
const Register = lazy(() => import("./pages/Authentication/Register"));
const Seller = lazy(() => import("./pages/Seller/Seller"));
const ForgotPassword = lazy(
  () => import("./pages/Authentication/ForgotPassword")
);

function App() {
  const UISettings = useSelector((store: RootState) => store.webUI);
  const user: Tuser = useSelector((store: RootState) => store.user);
  const popups: TPopups = useSelector((store: RootState) => store.popups);
  const [loading, setLoading] = useState<boolean>(true);
  const [lock, setLock] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refresh = useRef<boolean>(true);

  useEffect(() => {
    if (refresh.current) {
      refresh.current = false;
      axiosCall
        .get("authentication/user", { withCredentials: true })
        .then((res) => {
          setLoading(false);
          if (res.status == 200) {
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
          } else {
            setLock(true);
          }
        })
        .catch(() => {
          setLoading(false);
          setLock(true);
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
      {loading ? <MainLoader /> : null}
      {UISettings.loader ? <MainLoader /> : null}
      {popups.reportProblem.show ? <ProblemReport /> : null}
      {popups.share.show ? <SharePopup /> : null}
      {!lock ? (
        <Suspense fallback={<MainLoader />}>
          <CheckRoutes user={user}>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="Login" element={<Login />} />
                <Route path="Register" element={<Register />} />
                <Route path="ForgotPassword" element={<ForgotPassword />} />
                <Route
                  path="ForgotPassword/:url"
                  element={<PasswordRecover />}
                />
                {user.isLogged ? (
                  <Route path="Logout" element={<Logout />} />
                ) : null}
                <Route path="Search" element={<Search />} />
                <Route path="Product" element={<Product />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="Product/:id" element={<Product />} />
                <Route path="AddProduct" element={<AddProduct />} />
                <Route path="SuspendedAccount" element={<SuspendedAccount />} />
                <Route path="Profile/*" element={<Profile />}>
                  {user.isLogged ? (
                    <Route path="Notifications/" element={<Notifications />}>
                      <Route path=":id" element={<Notifications />} />
                    </Route>
                  ) : null}
                </Route>
                <Route path="MaclerService" element={<MaclerService />} />
                <Route path="MaclerChoose" element={<MaclerChoose />} />
                <Route path="AdsMake" element={<AdsMake />} />
                <Route path="Maclerconditions" element={<Maclerconditions />} />
                <Route path="Seller/:id" element={<Seller />} />

                {user.isLogged ? (
                  <Route path="AdminPanel" element={<AdminPanel />} />
                ) : null}
              </Route>
            </Routes>
          </CheckRoutes>
        </Suspense>
      ) : (
        <Routes>
          <Route element={<ServerError />} path="/*" />
        </Routes>
      )}
    </>
  );
}

export default App;

function MainLoader() {
  return (
    <div className="fixed top-0 bottom-0 h-full w-full bg-whiteMain z-[99] flex justify-center items-center">
      <svg
        className="animwhole translate-y-[-30px]"
        width="102"
        height="116"
        viewBox="0 0 102 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="13" y="48" width="75" height="67" rx="6" fill="var(--main)" />
        <path
          className="animdown"
          d="M47 3.34794C49 1 52 1 54 3.34794L86 34.0012C89 37 87 42 82 42.6H19.219C14 42 12 37 15 34.0012L47 3.34794Z"
          fill="var(--main)"
        />
        <rect
          x="54"
          y="59"
          width="26"
          height="17"
          rx="5"
          fill="var(--whiteMain)"
        />
        <rect
          className="animdoor"
          x="54"
          y="86"
          width="26"
          height="300"
          rx="5"
          fill="var(--whiteMain)"
        />
        <rect
          className="animfill"
          x="21"
          y="59"
          width="26"
          height="17"
          rx="5"
          fill="var(--whiteMain)"
        />
        <rect
          x="21"
          y="86"
          width="26"
          height="17"
          rx="5"
          fill="var(--whiteMain)"
        />
      </svg>
    </div>
  );
}
