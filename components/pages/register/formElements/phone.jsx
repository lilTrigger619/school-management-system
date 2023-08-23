import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setPhone, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function FirstName(){
	const error = useSelector(state=>state.Form.errors.Phone);
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setPhone(value));
		}
	}, [formSubmit])
  */

	return(
	<>
		<S_input
			label= 'Phone'
			placeholder= 'Phone'
			name= 'Phone'
			type= 'text'
			onChange= {e=>dispatch(setPhone(e.target.value))}
			helperText={error}
			error = {error? true:false}
			value={value}
		/>
	</>
	)
}
