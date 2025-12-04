import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice";
import authReducer from "./slices/authSlice";
import navbarReducer from "./slices/navbarSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer,
    nav: navbarReducer,
  },
});
