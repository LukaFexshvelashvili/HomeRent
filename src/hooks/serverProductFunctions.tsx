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
