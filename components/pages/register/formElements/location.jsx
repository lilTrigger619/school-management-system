import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setLocation, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function FirstName(){
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setLocation(value));
		}
	}, [formSubmit])
  */


	return(
	<>
		<S_input
			label= 'Location'
			placeholder= 'Location'
			name= 'location'
			type= 'text'
			onChange= {e=>dispatch(setLocation(e.target.value))}
			value={value}
		/>
	</>
	)
}
