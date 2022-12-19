import {createSlice} from "@reduxjs/toolkit";

const Slice = createSlice({
	name: "ui",
	initialState: {
		isMobile: false,
	},
	reducers:{
		setIsMobile: (state, action)=>{
			state.isMobile = action.payload
		},
	}
})

export default Slice.reducer;
export const {setIsMobile} = Slice.actions;
