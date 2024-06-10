import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Tuser } from "../../store/data/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import axiosCall from "../../hooks/axiosCall";
import RecoverContent from "./components/RecoverContent";
import ContentLoader from "../../components/global/ContentLoader";
import NotFound from "../SuspendedAccount";

export default function PasswordRecover() {
  const user: Tuser = useSelector((store: RootState) => store.user);
  const { url } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState<number>(0);

  useLayoutEffect(() => {
    axiosCall
      .post(
        "user/check_verify_url.php",
        { url: url },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((res) => {
        if (res.data.status == 100) {
          setShow(1);
        } else {
          setShow(2);
        }
      });
  }, []);

  if (user.isLogged === null) {
    if (user.isLogged === true) {
      navigate("/");
    }
    return null;
  }
  return (
    <>
      {show == 0 ? (
        <ContentLoader />
      ) : show == 1 ? (
        <RecoverContent />
      ) : show == 2 ? (
        <NotFound />
      ) : null}
    </>
  );
}
