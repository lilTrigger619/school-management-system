import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "layout",
  initialState: {
    saveUrl: true,
// urls that are not to be accessed
    unSafeUrl: [],
  },
  reducers: {
    setSaveUrl: (state, action) => {
      state.saveUrl = action.payload;
    },
  },
});

export default Slice.reducer;
export const { setSaveUrl} = Slice.actions;
