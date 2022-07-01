import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setFirstName, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function FirstName(){
	const error = useSelector(state=>state.Form.errors.firstName);
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setFirstName(value));
		}
	}, [formSubmit])
  */


	return(
	<>
		<S_input
			required
			label= 'First name'
			placeholder= 'First name'
			name= 'first_name'
			type= 'text'
			onChange= {e=>dispatch(setFirstName(e.target.value))}
			helperText={error}
			error = {error? true:false}
			value={value}
		/>
	</>
	)
}
