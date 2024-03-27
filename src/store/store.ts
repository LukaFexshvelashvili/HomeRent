import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./data/userSlice";
import addProductSlice from "./data/addProductSlice";
import webUISlice from "./data/webUISlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    addProduct: addProductSlice,
    webUI: webUISlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["addProduct/updateImages"],
        ignoredPaths: ["addProduct.estateImages"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
