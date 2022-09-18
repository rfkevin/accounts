import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: true,
  reducers: {
    toggledarkMode: (state, action) => {
      state = !state;
      return state;
    },
    setdarkMode: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { toggledarkMode, setdarkMode } = darkModeSlice.actions;
