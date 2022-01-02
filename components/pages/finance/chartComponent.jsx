import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useState} from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

export default function ChartComponent(){
	const ChartData = {
		labels: ["Fully paid", "Part payment", "No payment", "Red-zone"],
		datasets: [{
			label : "Payment Data",
			data : [1000, 400, 120, 380],
			backgroundColor: [
				'rgb(140, 255, 0)',
				'rgb(255, 255, 0)',
				'rgb(255, 161, 40)',
				'rgb(255, 0, 0)',
			]

		}]
	}
	

	return(
		<Card>
			<CardContent>
				<Grid container spacing={4}>

					<Grid item xs={12} md={6}>
						<div className="max-w-md mx-auto">
							<Pie data={ChartData} width={100} height={100} />
						</div>
					</Grid>

					<Grid item xs={12} md={6}>
						<div className="max-w-md mx-auto">
							<Bar data={ChartData} width={100} height={50}/>
						</div>
					</Grid>
					
				</Grid>
			</CardContent>
		</Card>
	)
}
