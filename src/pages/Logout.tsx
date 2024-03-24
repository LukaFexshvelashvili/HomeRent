import { useDispatch } from "react-redux";
import { clearSession } from "../store/data/userSlice";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    dispatch(clearSession());
    document.cookie =
      "sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }, []);

  return <></>;
}
