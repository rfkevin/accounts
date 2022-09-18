import { createSlice } from "@reduxjs/toolkit";

export const captchaSlice = createSlice({
  name: "captcha",
  initialState: null,
  reducers: {
    setCaptcha: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const refreshCaptchaSlice = createSlice({
  name: "refreshCaptcha",
  initialState: false,
  reducers: {
    setRefreshCaptcha: (state, action) => {
      state = !state;
      return state;
    },
  },
});
export const { setCaptcha } = captchaSlice.actions;
export const { setRefreshCaptcha } = refreshCaptchaSlice.actions;
