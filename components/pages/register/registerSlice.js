import {createSlice} from '@reduxjs/toolkit';

const Slice = createSlice({
	name: 'Registration',
	initialState: {
		errors: {
			firstName: '',
			lastName: '',
			email: '',
			gender: '',
			username: '',
		},
		input:{
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			date_of_birth: '',
			phone: '',
			location: '',
			disability: '',
			illness: '',
			gender: '',
			photo: '',
			position:'',
			password: '',
		},
		formSubmit: false,
	},
	reducers: {
		//Submit form
		submitForm: (state, action)=>{
			state.formSubmit = true;
		},
		//stop form submission.
		stop_submitForm: (state, action)=>{
			state.formSubmit= false;
		},
		//error setting
		setFirstNameErr: (state, action)=>{
			const value = action.payload;
			state.errors.firstName= value;
		},
		setLastNameErr: (state, action)=>{
			const value = action.payload;
			state.errors.lastName= value;
		},
		setEmailErr: (state, action)=>{
			const value = action.payload;
			state.errors.email= value
		},
		setGenderErr: (state, action)=>{
			const value = action.payload;
			state.errors.gender= value;
		},
		setUsernameErr: (state, action)=>{
			const value = action.payload;
			state.errors.username= value;
		},
		//input form 
		setFirstName: (state, action)=>{
			const value= action.payload;
			state.input.firstName= value;
		},
		setLastName: (state, action)=>{
			const value = action.payload;
			state.input.lastName= value;
		}, 
		setUsername: (state, action)=> {
			const value = action.payload;
			state.input.username= value;
		},
		setEmail: (state, action)=>{
			const value= action.payload;
			state.input.email= value;
		},
		setDateOfBirth: (state, action)=>{
			const value = action.payload;
			state.input.date_of_birth= value;
		},
		setPhone: (state, action)=>{
			const value= action.payload;
			state.input.phone= value;
		},
		setLocation: (state, action)=>{
			const value= action.payload;
			state.input.location= value;
		},
		setDisability: (state, action)=>{
			const value = action.payload;
			state.input.disability= value;
		},
		setIllness: (state,action)=>{
			const value = action.payload;
			state.input.illness= value;
		},
		setGender: (state, action)=>{
			const value= action.payload;
			state.input.gender= value;
		},
		setPosition: (state, action)=>{
			const value=action.payload;
			state.input.position= value;
		},
		setPhoto: (state, action)=>{
			const value=action.payload;
			state.input.photo= value;
		},
		setPassword: (state, action)=>{
			const value= action.payload;
			state.input.password= value;
		},
	}
})


export default Slice.reducer;
export const {
	//form submit
	submitForm,
	//stop formsubmission
	stop_submitForm,
	//error settings.
	setUsernameErr,
	setFirstNameErr,
	setLastNameErr,
	setEmailErr,
	setGenderErr,
	//input set.
	setFirstName,
	setLastName,
	setUsername,
	setEmail,
	setDateOfBirth,
	setPhone,
	setLocation,
	setDisability,
	setIllness,
	setGender,
	setPhoto,
	setPassword,
	setPosition,
} = Slice.actions;
