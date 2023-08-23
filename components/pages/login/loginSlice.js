import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "Auth",
  initialState: {
    isAuthenticated: false,
    isLoading: true,
    logout: false,
    verify: false,
    status: "", // authentication status.
  },
  reducers: {
    Authenticate: (state, action) => {
      state.isAuthenticated = true;
    },
    de_Authenticate: (state, action) => {
      state.isAuthenticated = false;
    },
    load: (state, action) => {
      state.isLoading = true;
    },
    stop_loading: (state, action) => {
      state.isLoading = false;
    },
    setLogout: (state, action) => {
      state.logout = action.payload;
    },
    setVerify: (state, action)=>{
      state.verify = action.payload;
    },
    setStatus: (state, action)=>{
      state.status = action.payload;
    },
  },
});

export default Slice.reducer;
export const { Authenticate, de_Authenticate, load, stop_loading, setLogout, setVerify, setStatus} =
  Slice.actions;
