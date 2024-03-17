import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Tuser = {
  name: string;
  lastname: string;
  age: number;
  id: string;
  isLogged: boolean;
};
const initialState: Tuser = {
  name: "ლუკა",
  lastname: "ფეხშველაშვილი",
  age: 17,
  id: "2337692412",
  isLogged: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const { updateAge } = userSlice.actions;

export default userSlice.reducer;
