import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
      changeDarkThemeColors(newState);
      state.darkMode = newState;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      changeDarkThemeColors(action.payload);
      state.darkMode = action.payload;
    },
  },
});
export const { toggleDarkMode, setDarkMode } = webUISlice.actions;

export default webUISlice.reducer;
