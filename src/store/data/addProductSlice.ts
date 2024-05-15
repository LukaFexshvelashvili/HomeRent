import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TproductInfoStart = {
  estateTitle: null | string;
  estateDescription: null | string;
  estateType: null | string;
  estateDeal: null | string;
  estateStatus: null | string;
  estateCity: null | string;
  estateAddress: null | string;
  estateExactAddress: null | string;
  estateIpcode: null | string;
  estateActiveImage: null | string;
  estateImages: any;
  estateSize: null | number;
  estateProject: null | string;
  estateCondition: null | string;
  estateFloor: null | number;
  estateFloors: null | number;
  estateRooms: null | number;
  estateBedrooms: null | number;
  estateBathrooms: null | number;
  estatePrice: null | number;
  estateAddons: null | number[];
  estateClosePlaces: null | number[];
  estateCurrency: number;
  estateVip: number;
  estateVipDays: null | number;
};

const initialState: TproductInfoStart = {
  estateTitle: null,
  estateDescription: null,
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
  estateCurrency: 0,
  estateVip: 0,
  estateVipDays: null,
};

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    updateType: (state, action: PayloadAction<string | null>) => {
      state.estateType = action.payload;
    },
    updateTitle: (state, action: PayloadAction<string | null>) => {
      state.estateTitle = action.payload;
    },
    updateDescription: (state, action: PayloadAction<string | null>) => {
      state.estateDescription = action.payload;
    },
    updateDeal: (state, action: PayloadAction<string | null>) => {
      state.estateDeal = action.payload;
    },
    updateStatus: (state, action: PayloadAction<string | null>) => {
      state.estateStatus = action.payload;
    },

    updateCity: (state, action: PayloadAction<string | null>) => {
      state.estateCity = action.payload;
    },
    updateAddress: (state, action: PayloadAction<string | null>) => {
      state.estateAddress = action.payload;
    },
    updateExactAddress: (state, action: PayloadAction<string | null>) => {
      state.estateExactAddress = action.payload;
    },
    updateIpcode: (state, action: PayloadAction<string | null>) => {
      state.estateIpcode = action.payload;
    },

    updateActiveImage: (state, action: PayloadAction<string | null>) => {
      state.estateActiveImage = action.payload;
    },
    updateImages: (state, action: PayloadAction<any>) => {
      state.estateImages = action.payload;
    },
    updateSize: (state, action: PayloadAction<number | null>) => {
      state.estateSize = action.payload;
    },

    updateProject: (state, action: PayloadAction<string | null>) => {
      state.estateProject = action.payload;
    },
    updateCondition: (state, action: PayloadAction<string | null>) => {
      state.estateCondition = action.payload;
    },
    updateFloor: (state, action: PayloadAction<number | null>) => {
      state.estateFloor = action.payload;
    },
    updateFloors: (state, action: PayloadAction<number | null>) => {
      state.estateFloors = action.payload;
    },
    updateRooms: (state, action: PayloadAction<number | null>) => {
      state.estateRooms = action.payload;
    },
    updateBedrooms: (state, action: PayloadAction<number | null>) => {
      state.estateBedrooms = action.payload;
    },
    updateBathrooms: (state, action: PayloadAction<number | null>) => {
      state.estateBathrooms = action.payload;
    },
    updateFullPrice: (state, action: PayloadAction<number | null>) => {
      state.estatePrice = action.payload;
    },
    updateAddons: (state, action: PayloadAction<number[] | null>) => {
      state.estateAddons = action.payload;
    },
    updateClosePlaces: (state, action: PayloadAction<number[] | null>) => {
      state.estateClosePlaces = action.payload;
    },
    updateVip: (state, action: PayloadAction<number>) => {
      state.estateVip = action.payload;
    },
    updateEstateVipDays: (state, action: PayloadAction<number | null>) => {
      state.estateVipDays = action.payload;
    },
    updateCurrency: (state, action: PayloadAction<number>) => {
      state.estateCurrency = action.payload;
    },
  },
});

export const {
  updateType,
  updateTitle,
  updateDescription,
  updateDeal,
  updateStatus,
  updateCity,
  updateAddress,
  updateExactAddress,
  updateIpcode,
  updateActiveImage,
  updateImages,
  updateSize,
  updateProject,
  updateCondition,
  updateFloor,
  updateFloors,
  updateRooms,
  updateBedrooms,
  updateBathrooms,
  updateFullPrice,
  updateAddons,
  updateClosePlaces,
  updateCurrency,
  updateVip,
  updateEstateVipDays,
} = addProductSlice.actions;

export default addProductSlice.reducer;
