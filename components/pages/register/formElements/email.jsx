import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setEmail, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function Email(){
	const error = useSelector(state=>state.Form.errors.email);
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setEmail(value));
		}
	}, [formSubmit])
  */


	return(
	<>
		<S_input
			required
			label= 'Email'
			placeholder= 'Email'
			name= 'email'
			type= 'email'
      onChange={(e)=>dispatch(setEmail(e.target.value))}
			helperText={error}
			error = {error? true:false}
			value={value}
		/>
	</>
	)
}
