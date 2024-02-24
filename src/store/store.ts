import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./data/userSlice";
import addProductSlice from "./data/addProductSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    addProduct: addProductSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
