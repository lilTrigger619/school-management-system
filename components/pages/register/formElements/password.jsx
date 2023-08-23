import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setPassword, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function FirstName(){
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setPassword(value));
		}
	}, [formSubmit])
  */


	return(
	<>
		<S_input
			label= 'Password'
			placeholder= 'Password'
			name= 'password'
			type= 'password'
			onChange= {e=>dispatch(setPassword(e.target.value))}
			value={value}
			disabled
		/>
	</>
	)
}
