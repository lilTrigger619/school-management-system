import {Pie} from 'react-chartjs-2';
import {StudentData, StaffData} from './chartData';
import {Card, CardContent, Grid} from '@material-ui/core';


export default function CutomPie(){
	return(
		<div className="max-w-2xlg  overflow-x-auto">
		<Card className="w-full h-50">
		<Grid container justifyContent="space-between" spacing="3">
			<Grid item xs="12" md="6">
			<Pie 
			data = {StudentData}
			height = {50}
			width = {50}
			/>
			</Grid>
			

			<Grid item xs="12" md="6">
			<Pie
			data = {StaffData}	
			height = {50}
			width = {50}
			/>
			</Grid>
		</Grid>
		</Card>
		</div>
		)
}
