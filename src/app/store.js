import { configureStore } from '@reduxjs/toolkit';
import {  darkModeSlice } from '../theme/slice';
import { captchaSlice, refreshCaptchaSlice } from '../Component/Captcha/slices';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    captcha: captchaSlice.reducer,
    refreshCaptcha: refreshCaptchaSlice.reducer
  },
});
