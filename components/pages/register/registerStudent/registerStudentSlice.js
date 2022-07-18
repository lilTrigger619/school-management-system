import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "registerStudent",
  initialState: {
    submitForm: false,
    validate: {
      validating: false,
      validateForm1: { isValid: false, validate: false, pageNum: "" },
      validateForm2: { isValid: false, validate: false, pageNum: "" },
      validateForm3: { isValid: false, validate: false, pageNum: "" },
      validateForm4: { isValid: false, validate: false, pageNum: "" },
      validateForm5: { isValid: false, validate: false, pageNum: "" },
      validateForm6: { isValid: false, validate: false, pageNum: "" },
    },
    dataArrived: false,
    data: [],
    page: {
      next: false,
      previous: false,
    },
    registerFormData: "",
    submissionStatus: {
      submitted: false,
      ok : false,
      data: "",
    },
  },
  reducers: {
    setSubmit: (state, action) => {
      state.submitForm = action.payload;
    },
    setValidateForm1: (state, action) => {
      state.validate.validateForm1 = action.payload;
    },
    setValidateForm2: (state, action) => {
      state.validate.validateForm2 = action.payload;
    },
    setValidateForm3: (state, action) => {
      state.validate.validateForm3 = action.payload;
    },
    setValidateForm4: (state, action) => {
      state.validate.validateForm4 = action.payload;
    },
    setValidateForm5: (state, action) => {
      state.validate.validateForm5 = action.payload;
    },
    setValidateForm6: (state, action) => {
      state.validate.validateForm6 = action.payload;
    },
    setDataArrived: (state, action) => {
      state.dataArrived = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setValidating: (state, action) => {
      state.validate.validating = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setRegisterStudentData: (state, action)=>{
      state.registerFormData = action.payload;
    },
    setSubmissionStatus: (state, action)=>{
      state.submissionStatus = action.payload;
    },
  },
});

export default Slice.reducer;
export const {
  setSubmit,
  setValidateForm1,
  setValidateForm2,
  setValidateForm3,
  setValidateForm4,
  setValidateForm5,
  setValidateForm6,
  setDataArrived,
  setData,
  setPage,
  setRegisterStudentData,
  setSubmissionStatus,
} = Slice.actions;
