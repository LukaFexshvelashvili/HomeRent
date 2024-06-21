import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  changeDarkThemeColors,
  changeMainColor,
} from "../../hooks/UIFunctions";

export type TWebUI = {
  darkMode: boolean;
  mainColor: string;
  colors: string[];
  loader: { active: boolean; opacity: boolean };
};
const initialState: TWebUI = {
  darkMode: false,
  mainColor: "#3a86ff",
  colors: ["#3A86FF", "#C727FF", "#95d609"],
  loader: { active: false, opacity: false },
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
    setWebLoader: (
      state,
      action: PayloadAction<{ active: boolean; opacity?: boolean }>
    ) => {
      state.loader = {
        active: action.payload.active,
        opacity: action.payload.opacity ? action.payload.opacity : false,
      };
    },
  },
});
export const { toggleDarkMode, setDarkMode, setMainColor, setWebLoader } =
  webUISlice.actions;

export default webUISlice.reducer;
