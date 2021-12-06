import {Card, CardContent, Grid, Typography } from '@material-ui/core';



export default function MyCard({dataValue="Please wait", dataInfo="Please wait", color="red"}){
	return(
		<div className="max-w-full">
		<Card>	
		<Grid container >
			<Grid item xs="3" className={`bg-${color}-500`}>
			<CardContent className="flex justify-center">
			<Typography variant="h5">{dataValue}</Typography>
			</CardContent>
			</Grid>	
		
			<Grid item xs="9">
			<CardContent>
			<Typography variant="body1">{dataInfo}</Typography>
			</CardContent>
			</Grid>	
		</Grid>
		</Card>
		</div>
		)
}
