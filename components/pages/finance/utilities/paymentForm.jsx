import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';

export default function(){
	return(
		<div>
			<Card>
				<CardContent>
					<Grid container>
						<Grid item sm={12} md={8} className="flex justify-center items-center m-2">
							<Typography variant="body1">Amount:</Typography>
							<InputBase placeholder="Amount in figures"/>
						</Grid>

						<Grid item sm={12} md={4}>
							<InputBase placeholder="Decimal"/>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	)
}
