import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Tuser = {
  name: string;
  lastname: string;
  age: number;
};
const initialState: Tuser = {
  name: "Luka",
  lastname: "Fexshvelashvili",
  age: 17,
};
export const userSlice = createSlice({
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
