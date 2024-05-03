import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tnotification } from "../../assets/types/types";

export type Tuser = {
  id: string | null;
  name: string;
  surname: string;
  mail: string | null;
  mobile: string | null;
  money: number;
  favorites: number[];
  last_seen: number[];
  notifications: Tnotification[];
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
  money: 0,
  favorites: [],
  last_seen: [],
  notifications: [],
  create_date: null,
  verified: false,
  isLogged: null,
};
const sessionState: Tuser = {
  id: null,
  name: "სტუმარი",
  surname: "",
  mail: null,
  mobile: null,
  money: 0,
  favorites: [],
  last_seen: [],
  notifications: [],
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
    updateNotifications: (state, action: PayloadAction<Tnotification[]>) => {
      state.notifications = action.payload;
    },
    updateMoney: (state, action: PayloadAction<number>) => {
      state.money = action.payload;
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
  updateNotifications,
  updateMoney,
} = userSlice.actions;

export default userSlice.reducer;
