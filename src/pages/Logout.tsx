import { useDispatch } from "react-redux";
import { clearSession } from "../store/data/userSlice";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosCall from "../hooks/axiosCall";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    axiosCall.get("authentication/user_logout", { withCredentials: true });

    dispatch(clearSession());
    navigate("/");
  }, []);

  return <></>;
}
