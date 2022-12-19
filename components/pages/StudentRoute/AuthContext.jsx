import {useDispatch, useSelector} from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {setIsMobile} from './reducers/uiReducer';

export default function AuthContext({children}){
	const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:670px)");
	if (isMobile){
		dispatch(setIsMobile(true))
	}else{
		dispatch(setIsMobile(false))
	}

	return(
		<>
			<div>
			{children}
			</div>
		</>
	)
}
