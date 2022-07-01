import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "dashboardSlice",
  initialState: {
    tableData: {
      staffTable: [],
      studentTable: [],
    },
    dataArrived: false,
    user: "",
  },
  reducers: {
    setStaffTable: (state, action) => {
      let i = 0;
      const { payload } = action;
      if (payload.length !== 0) {
        while (i < payload.length) {
          state.tableData.staffTable.push({
            name: payload[i].first_name + " " + payload[i].last_name,
            email: payload[i].email,
            position: payload[i].postion,
            subject: payload[i].level_set,
            isActive: payload[i].user.is_active,
            class: payload[i].level_set,
          });
          i++;
        }
      }
    },
    setStudentTable: (state, action) => {
      const { payload } = action;
      let i = 0;
      if (payload.length !== 0) {
        console.log("some data arrived at the student ");
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setDataArrived: (state, action) => {
      state.dataArrived = action.payload;
    },
  },
});

export default Slice.reducer;
export const { setStaffTable, setStudentTable, setUser, setDataArrived } =
  Slice.actions;
