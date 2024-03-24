import {
  Tuser,
  setUserLoginStatus,
  setUserSessionData,
} from "../store/data/userSlice";

export function makeUserSession(dispatch: Function, userData: any) {
  console.log(userData);

  if (userData) {
    const sessionUser: Tuser = {
      id: `${userData.id}`,
      name: userData.name,
      surname: userData.surname,
      mail: userData.mail,
      mobile: userData.mobile,
      verified: userData.verified,
      create_date: userData.create_date,
      isLogged: true,
    };
    dispatch(setUserSessionData(sessionUser));
  } else {
    dispatch(setUserLoginStatus(false));
  }
}

export function loggedUser(navigate: Function, isLogged: boolean | null) {
  if (isLogged) {
    if (
      location.pathname.includes("Login") ||
      location.pathname.includes("Register") ||
      location.pathname.includes("ForgotPassword")
    ) {
      navigate("/");
    }
  }
}
