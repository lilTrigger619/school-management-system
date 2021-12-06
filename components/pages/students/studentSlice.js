import {createSlice} '@reduxjs/tookit';
import {data} './tableData';
const  searchSlice= createSlice({
	name: "Search Student",
	initialState: data,
	reducers: {
		search: (state,action)=>{
			const response = initialState.data.filter((item)=>{
				return
			});
		}
	},
})
