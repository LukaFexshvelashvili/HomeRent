import { Dispatch } from "@reduxjs/toolkit";
import { TPopupReport } from "../store/data/popupsSlice";
import { Tuser } from "../store/data/userSlice";
import { addLastProduct } from "./UIFunctions";
import axiosCall from "./axiosCall";
import { removeFavorite } from "./serverFunctions";

export async function deleteProduct(
  dispatch: Function,
  userData: Tuser,
  productID: number
) {
  if (userData.isLogged) {
    await axiosCall.delete("actions/delete_product", {
      params: { productID: productID },
      withCredentials: true,
    });
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
    await axiosCall.post(
      "actions/hide_product",
      { productID: productID, productStatus: hide },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }
}
export function productView(dispatch: Dispatch, productID: number) {
  if (localStorage.getItem("last_seen")) {
    let getListStorage: any = localStorage.getItem("last_seen");
    let getList: number[] = JSON.parse(getListStorage);

    if (!getList.includes(productID)) {
      addLastProduct(dispatch, productID);
      return true;
    } else {
      addLastProduct(dispatch, productID);
      return false;
    }
  } else {
    addLastProduct(dispatch, productID);
    return true;
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
      .then(
        (res) => (getProductsData = sortProductsByLastSeen(res.data, getList))
      );
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
function sortProductsByLastSeen(products: any, lastSeenIds: number[]) {
  return products.sort((a: any, b: any) => {
    const indexA = lastSeenIds.indexOf(a.id);
    const indexB = lastSeenIds.indexOf(b.id);

    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });
}
export async function submitReport(reportData: TPopupReport) {
  let status = -1;
  await axiosCall
    .post(
      "actions/report",
      { reportData: JSON.stringify(reportData) },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      status = res.data;
    });
  return status;
}
