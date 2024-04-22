import { Tuser } from "../store/data/userSlice";
import axiosCall from "./axiosCall";
import { removeFavorite } from "./serverFunctions";

export async function deleteProduct(
  dispatch: Function,
  userData: Tuser,
  productID: number
) {
  if (userData.isLogged) {
    await axiosCall
      .delete("actions/delete_product", {
        params: { productID: productID },
        withCredentials: true,
      })
      .then((res) => console.log(res.data));
    if (userData.favorites.includes(productID)) {
      removeFavorite(dispatch, productID);
    }
  }
}
export async function hideProduct(
  userData: Tuser,
  productID: number,
  hide: boolean
) {
  if (userData.isLogged) {
    await axiosCall
      .post(
        "actions/hide_product",
        { productID: productID, productStatus: hide },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => console.log(res.data));
  }
}
export async function productViewPlus(productID: number) {
  if (localStorage.getItem("last_seen")) {
    let getListStorage: any = localStorage.getItem("last_seen");
    let getList: number[] = JSON.parse(getListStorage);
    if (!getList.includes(productID)) {
      await axiosCall.post(
        "actions/view_product",
        { productID: productID },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    }
  }
}
export async function FetchLastSeenProducts() {
  let getProductsData: any[] = [];
  if (localStorage.getItem("last_seen")) {
    let getListStorage: any = localStorage.getItem("last_seen");
    let getList: number[] = JSON.parse(getListStorage);
    await axiosCall
      .post(
        "fetch/last_seen",
        { last_seen: JSON.stringify(getList) },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => (getProductsData = res.data));
  } else {
    return getProductsData;
  }
  return getProductsData;
}
export async function sendMaclerRequest(
  userData: any,
  productID: number,
  maclerRentPrice: number
) {
  let status: number = -1;
  if (userData.isLogged) {
    await axiosCall
      .post(
        "actions/macler_request",
        { productID: productID, maclerRentPrice: maclerRentPrice },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        status = res.data.status;
      });
  } else {
    return status;
  }
  return status;
}
