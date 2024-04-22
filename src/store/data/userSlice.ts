import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Tuser = {
  id: string | null;
  name: string;
  surname: string;
  mail: string | null;
  mobile: string | null;
  favorites: number[];
  last_seen: number[];
  create_date: string | null;
  verified: boolean;
  isLogged: boolean | null;
};
const initialState: Tuser = {
  id: null,
  name: "სტუმარი",
  surname: "",
  mail: null,
  mobile: null,
  favorites: [],
  last_seen: [],
  create_date: null,
  verified: false,
  isLogged: null,
};
const sessionState: Tuser = {
  id: null,
  name: "სტუმარი",
  surname: "",
  mail: null,
  favorites: [],
  last_seen: [],
  mobile: null,
  create_date: null,
  verified: false,
  isLogged: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSessionData: (_, action: PayloadAction<Tuser>) => {
      return action.payload;
    },
    setUserLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    updateFavorites: (state, action: PayloadAction<number[]>) => {
      state.favorites = action.payload;
    },
    updateLast_seen: (state, action: PayloadAction<number[]>) => {
      state.last_seen = action.payload;
    },
    clearSession: () => {
      return sessionState;
    },
  },
});

export const {
  setUserSessionData,
  setUserLoginStatus,
  clearSession,
  updateFavorites,
  updateLast_seen,
} = userSlice.actions;

export default userSlice.reducer;
