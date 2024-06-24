import { useEffect, useState } from "react";
import {
  Tuser,
  setUserLoginStatus,
  setUserSessionData,
  updateFavorites,
} from "../store/data/userSlice";
import axiosCall from "./axiosCall";

export function makeUserSession(dispatch: Function, userData: any) {
  if (userData) {
    let last_seen_storage: any = localStorage.getItem("last_seen");
    let last_seen: number[] = JSON.parse(last_seen_storage);
    const sessionUser: Tuser = {
      id: `${userData.id}`,
      name: userData.name,
      surname: userData.surname,
      mail: userData.mail,
      mobile: userData.mobile,
      money: userData.money,
      favorites:
        typeof userData.favorites === "string"
          ? JSON.parse(userData.favorites)
          : userData.favorites,
      last_seen: last_seen,
      notifications: JSON.parse(userData.notifications),
      verified: userData.verified,
      create_date: userData.create_date,
      isLogged: true,
      banned: userData.banned,
    };
    localStorage.setItem("favorites", JSON.stringify(sessionUser.favorites));

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

export function mergeFavorites(
  dispatch: Function,
  ar1: number[],
  ar2: number[]
) {
  if (localStorage.getItem("favorites")) {
    let merge = [...ar1, ...ar2];
    let newFavorites = [...new Set(merge)];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    dispatch(updateFavorites(newFavorites));
    const formData = new FormData();
    formData.append("favorites", JSON.stringify(getFavorites));
    axiosCall.post("user/favorites", formData, { withCredentials: true });
  }
}
export function getFavorites(): any {
  if (localStorage.getItem("favorites")) {
    const favoritesStorage: any = localStorage.getItem("favorites");
    const formData = new FormData();
    formData.append("favorites", favoritesStorage);
    return axiosCall
      .post("fetch/favorites", formData, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
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

    axiosCall.post("user/favorites", formData, { withCredentials: true });
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
      axiosCall.post("user/remove_favorites", formData, {
        withCredentials: true,
      });
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

export const useDebounce = (
  value: any,
  delay: number,
  setLoader?: Function
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    if (setLoader) {
      setLoader(true);
    }
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};
