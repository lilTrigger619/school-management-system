import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import MyCard from '../myCard';

export default function FlexCard(){
	return(
		<div>
			{/*<Card>
				<CardContent>
					<Grid container spacing={1} justifyContent="space-between">
						<Grid item xs={12} md={4} className="bg-red-500 p-0 m-0 w-full h-full">
							<div > <Typography variant="h5">12</Typography></div>
						</Grid>

						<Grid item xs={12} md={8}>
							<Typography>Number of students</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>*/}

			<MyCard /><MyCard />

		</div>
		)
}