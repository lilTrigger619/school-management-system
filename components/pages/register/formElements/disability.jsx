import {S_input} from '../';
import {useState, useEffect} from 'react';
import {setDisability, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function FirstName(){
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setDisability(value));
		}
	}, [formSubmit])
  */

	return(
	<>
		<S_input
			label= 'Disability'
			placeholder= 'Disability'
			name= 'disability'
			type= 'text'
      onChange={(e)=>dispatch(setDisability(e.target.value))}
			value={value}
		/>
	</>
	)
}
