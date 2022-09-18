import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: false,
  reducers: {
    toggledrawer: (state, action) => {
      state = !state;
      return state;
    },
    setOpenDrawer: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { toggledrawer,setOpenDrawer } = drawerSlice.actions;
