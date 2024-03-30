import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  changeDarkThemeColors,
  changeMainColor,
} from "../../hooks/UIFunctions";

export type TWebUI = {
  darkMode: boolean;
  mainColor: string;
  colors: string[];
};
const initialState: TWebUI = {
  darkMode: false,
  mainColor: "#3a86ff",
  colors: ["#3A86FF", "#C727FF", "#A6E81B"],
};

const webUISlice = createSlice({
  name: "webUI",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      let newState: boolean = !state.darkMode;
      changeDarkThemeColors(newState);
      state.darkMode = newState;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      changeDarkThemeColors(action.payload);
      state.darkMode = action.payload;
    },
    setMainColor: (state, action: PayloadAction<string>) => {
      changeMainColor(action.payload);
      state.mainColor = action.payload;
    },
  },
});
export const { toggleDarkMode, setDarkMode, setMainColor } = webUISlice.actions;

export default webUISlice.reducer;
