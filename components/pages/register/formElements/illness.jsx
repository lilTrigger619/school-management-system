import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setIllness, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function FirstName(){
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setIllness(value));
		}
	}, [formSubmit])
  */


	return(
	<>
		<S_input
			label= 'Illness'
			placeholder= 'Illness'
			name= 'illness'
			type= 'text'
			onChange= {e=>dispatch(setIllness(e.target.value))}
			value={value}
		/>
	</>
	)
}
