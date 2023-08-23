import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Header(){
	const Styles = useStyles();
	return (
		<>
			<AppBar position='fixed' className={Styles.appBar}>
				<Toolbar>
					<div className='flex justify-between items-center w-full'>
						{/**Logo**/}
						<div>
							<Typography variant='h4'>Apollo</Typography>
						</div>

						{/**personIcon**/}
						<div>
							<IconButton>
								<PersonIcon/>
							</IconButton>
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</>
	)
};

const useStyles = makeStyles(theme=>({
	appBar: {
		marginTop: "-0.2rem",
	},
}))
