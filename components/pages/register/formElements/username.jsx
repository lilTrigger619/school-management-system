import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setUsername} from '../registerSlice';
import {S_input} from '../';

export default function Username (){
	const dispatch = useDispatch();
	const UsernameErr = useSelector(state=>state.Form.errors.username);
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const [value, setValue] = useState('');

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setUsername(value));
		}
	},[formSubmit])
  */

	return (
		<>
			<S_input
				type='text'
				required
				name='username'
				label='Username'
				placeholder='Username'
				value={value}
				onChange={e=>dispatch(setUsername(e.target.value))}
				error={UsernameErr? true:false}
				helperText={UsernameErr}
			/>
		</>
	)
};
