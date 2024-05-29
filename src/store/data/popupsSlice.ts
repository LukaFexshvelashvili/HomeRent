import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TPopupReport = {
  show: boolean;
  link: string;
  message: string;
};
export type TPopupShare = {
  show: boolean;
  link: string;
};
export type TPopups = {
  reportProblem: TPopupReport;
  share: TPopupShare;
};
const initialState: TPopups = {
  reportProblem: {
    show: false,
    link: "",
    message: "",
  },
  share: {
    show: false,
    link: "",
  },
};

const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    setReportProblem: (state, action: PayloadAction<TPopupReport>) => {
      state.reportProblem = action.payload;
    },
    setShare: (state, action: PayloadAction<TPopupShare>) => {
      state.share = action.payload;
    },
  },
});
export const { setReportProblem, setShare } = popupsSlice.actions;

export default popupsSlice.reducer;
