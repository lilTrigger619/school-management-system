import {useState, useEffect} from 'react';
import {setPhoto, submitForm,} from '../registerSlice';
import {useDispatch, useSelector} from 'react-redux';
import Typography from  '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

export default function Photo(){
	const Styles = useStyles();
	const formSubmit = useSelector(state=>state.Form.formSubmit);
	const dispatch = useDispatch();
	const [value, setValue]= useState('');
	console.log(value);

  /*
	useEffect(()=>{
		if(formSubmit){
			dispatch(setPhoto(value));
		}
	}, [formSubmit])
  */

	return(
	<>
		<div className={`
			border
			rounded
			border-solid
			p-6
			bg-gray-100
			flex
			justify-between
			items-center
			${Styles.Container}
			`}>
			<Typography variant='caption'>
				Photo
			</Typography>
			<input
				type='file'
				accept='image/*'
				onChange={e=>dispatch(setPhoto(`${e.target.files[0]}`))}
				label='Photo'
				placeholder='Photo'
			/>
		</div>
	</>
	)
};

const useStyles = makeStyles(theme=>({
	Container: {
		maxWidth: "23rem",
		margin: "auto",
	},
}))
