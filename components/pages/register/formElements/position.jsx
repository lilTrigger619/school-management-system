import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setPosition, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function Position(){
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setPosition(value));
		}
	}, [formSubmit])
  */

	return(
	<>
		<S_input
			label= 'Position'
			placeholder= 'Position'
			name= 'position'
			type= 'text'
			onChange= {e=>dispatch(setPosition(e.target.value))}
			value={value}
		/>
	</>
	)
}
