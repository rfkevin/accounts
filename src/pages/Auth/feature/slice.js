import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {profile: null, token: null},
  reducers: {
    setCredentials: (state, action) => {
      const {profile, accesstoken} = action.payload;
      state.profile = profile;
      state.token = token;
    },
    logOut:(state, action =>{
      state.profile = null;
      state.token = null;
    })
  },
});

export const {setCredentials, logOut} = authSlice.actions
export const authSlice.reducer
