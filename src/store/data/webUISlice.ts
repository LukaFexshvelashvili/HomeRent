import { createSlice } from "@reduxjs/toolkit";
import { changeDarkThemeColors } from "../../hooks/UIFunctions";

export type TWebUI = {
  darkMode: boolean;
};
const initialState: TWebUI = { darkMode: false };

const webUISlice = createSlice({
  name: "webUI",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      let newState: boolean = !state.darkMode;
      console.log(newState);

      localStorage.setItem("darkMode", `${newState}`);
      changeDarkThemeColors(newState);
      state.darkMode = newState;
    },
  },
});
export const { toggleDarkMode } = webUISlice.actions;

export default webUISlice.reducer;
