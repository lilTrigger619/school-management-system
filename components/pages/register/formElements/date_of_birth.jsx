import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setDateOfBirth, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function FirstName(){
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setDateOfBirth(value));
		}
	}, [formSubmit])
  */


	return(
	<>
		<S_input
			label= 'Date of Birth'
			name= 'Date of Birth'
			type= 'date'
			onChange= {e=>dispatch(setDateOfBirth(e.target.value))}
			value={value}
			InputLabelProps={{shrink:true}}
		/>
	</>
	)
}
