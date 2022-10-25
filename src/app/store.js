import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "../theme/slice";
import { captchaSlice, refreshCaptchaSlice } from "../Component/Captcha/slices";
import authReducer from "../pages/Auth/feature/slice";
import { authApiSlice } from "./api";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    captcha: captchaSlice.reducer,
    refreshCaptcha: refreshCaptchaSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
  devTools: true,
});
