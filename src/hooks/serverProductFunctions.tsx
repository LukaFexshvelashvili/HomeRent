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
