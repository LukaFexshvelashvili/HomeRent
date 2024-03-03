import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Tuser = {
  name: string;
  lastname: string;
  age: number;
  id: string;
};
const initialState: Tuser = {
  name: "ლუკა",
  lastname: "ფეხშველაშვილი",
  age: 17,
  id: "2337692412",
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
