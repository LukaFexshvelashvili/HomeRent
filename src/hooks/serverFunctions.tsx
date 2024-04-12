import {
  Tuser,
  setUserLoginStatus,
  setUserSessionData,
  updateFavorites,
} from "../store/data/userSlice";
import axiosCall from "./axiosCall";

export function makeUserSession(dispatch: Function, userData: any) {
  if (userData) {
    const sessionUser: Tuser = {
      id: `${userData.id}`,
      name: userData.name,
      surname: userData.surname,
      mail: userData.mail,
      mobile: userData.mobile,
      favorites: userData.favorites,
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

export function addFavorite(dispatch: Function, id: number) {
  if (localStorage.getItem("favorites")) {
    const getFavoritesStorage: any = localStorage.getItem("favorites");
    let getFavorites = JSON.parse(getFavoritesStorage);
    if (!getFavorites.includes(id)) getFavorites.unshift(id);
    localStorage.setItem("favorites", JSON.stringify(getFavorites));
    dispatch(updateFavorites(getFavorites));
    const formData = new FormData();

    formData.append("favorites", JSON.stringify(getFavorites));
    axiosCall
      .post("user/favorites", formData, { withCredentials: true })
      .then((res) => console.log(res));
  }
}
export function removeFavorite(dispatch: Function, id: number) {
  if (localStorage.getItem("favorites")) {
    const getFavoritesStorage: any = localStorage.getItem("favorites");
    let getFavorites = JSON.parse(getFavoritesStorage);

    if (getFavorites.indexOf(id) !== -1) {
      const index = getFavorites.indexOf(id);
      getFavorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(getFavorites));
      dispatch(updateFavorites(getFavorites));
      const formData = new FormData();
      formData.append("favorites", JSON.stringify(getFavorites));
      axiosCall
        .post("user/remove_favorites", formData, { withCredentials: true })
        .then((res) => console.log(res));
    }
  }
}
export function checkFavorite(id: number): boolean {
  if (localStorage.getItem("favorites")) {
    const getFavoritesStorage: any = localStorage.getItem("favorites");
    let getFavorites = JSON.parse(getFavoritesStorage);

    if (getFavorites.includes(id)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
