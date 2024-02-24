import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TproductInfoStart = {
  estateType: null | number;
  estateDeal: null | number;
  estateStatus: null | number;
  estateCity: null | string;
  estateAddress: null | string;
  estateExactAddress: null | string;
  estateIpcode: null | string;
  estateActiveImage: null | string;
  estateImages: null | string;
  estateSize: null | number;
  estateProject: null | number;
  estateCondition: null | number;
  estateFloor: null | number;
  estateFloors: null | number;
  estateRooms: null | number;
  estateBedrooms: null | number;
  estateBathrooms: null | number;
  estatePrice: null | number;
  estateAddons: null | number[];
  estateClosePlaces: null | number[];
};

const initialState: TproductInfoStart = {
  estateType: null,
  estateDeal: null,
  estateStatus: null,
  estateCity: null,
  estateAddress: null,
  estateExactAddress: null,
  estateIpcode: null,
  estateActiveImage: null,
  estateImages: null,
  estateSize: null,
  estateProject: null,
  estateCondition: null,
  estateFloor: null,
  estateFloors: null,
  estateRooms: null,
  estateBedrooms: null,
  estateBathrooms: null,
  estatePrice: null,
  estateAddons: null,
  estateClosePlaces: null,
};

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    updateActiveImage: (state, action: PayloadAction<string | null>) => {
      state.estateActiveImage = action.payload;
    },
    updateRooms: (state, action: PayloadAction<number | null>) => {
      state.estateRooms = action.payload;
    },
    updateSize: (state, action: PayloadAction<number | null>) => {
      state.estateSize = action.payload;
    },
    updateFullPrice: (state, action: PayloadAction<number | null>) => {
      state.estatePrice = action.payload;
    },
  },
});

export const { updateActiveImage, updateRooms, updateSize, updateFullPrice } =
  addProductSlice.actions;

export default addProductSlice.reducer;
