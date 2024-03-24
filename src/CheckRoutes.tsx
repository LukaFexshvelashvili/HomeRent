import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function CheckRoutes(props: { children: JSX.Element }) {
  const [path, setPath] = useState(location.pathname);
  const navigate = useNavigate();
  useEffect(() => {
    setPath(location.pathname);
  }, [navigate]);

  return (
    <>
      {location.pathname.includes("Login") ||
      location.pathname.includes("Register") ||
      location.pathname.includes("ForgotPassword") ? (
        <>{props.children}</>
      ) : (
        <>
          <Navbar />
          <div className="content_container">{props.children}</div>
          <Footer />
        </>
      )}
    </>
  );
}
