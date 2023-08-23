import {createSlice} from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "GlobalSlice",
  initialState: {
    token: '',
  },
  reducers:{
    setToken: (state, action)=>{
      state.token = action.payload;
    },
  },
});

export default Slice.reducer;
export const {
  setToken,
} = Slice.actions;
