import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';


export default function Greetings(){
	const Style = useStyles();
	return(
		<>
			{/**toolbar margin**/}
			<div className={Style.toolbar}/>
			<div>
					<div className='flex p-4 m-1 items-center'>
						<Typography variant='h3'>Hi</Typography>
						<span className='m-6'><Typography>$user,</Typography></span>
					</div>
			</div>
		</>
	)
};

const useStyles = makeStyles(theme=>({
	toolbar: theme.mixins.toolbar,
}))
