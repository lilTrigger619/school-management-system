import {S_input} from '../';
import {setLastName,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';

export default function LastName(){
	const [value, setValue] = useState('');
	const formSubmit = useSelector(state=> state.Form.formSubmit);
	const lastNameErr = useSelector(state=> state.Form.errors.lastName);
	const dispatch = useDispatch();

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setLastName(value));
		}
	}, [formSubmit]);
  */

	return(
		<>
			<S_input
				required
				name='last_name'
				placeholder= 'Last name'
				label= 'Last name'
				onChange= {(e)=>dispatch(setLastName(e.target.value))}
				helperText= {lastNameErr}
				error= {lastNameErr? true:false}
				value={value}
				type='text'
			/>
		</>
	);
}
