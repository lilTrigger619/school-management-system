import {Pie} from 'react-chartjs-2';
import {StudentPresent, MaleStudentPresent, FemaleStudentPresent} from './chartData';
import {Card, CardContent, Grid} from '@material-ui/core';


export default function CutomPie(){
	const Datas = [StudentPresent, MaleStudentPresent, FemaleStudentPresent]
	return(
		<div className="max-w-2xlg  overflow-x-auto my-9">
		<Card className="w-full h-50">
		<Grid container justifyContent="space-between" spacing="3">
		{Datas.map((data)=>{
			return(
				<Grid item xs="12" md="4">
				<Pie 
				data= {data}
				height= {50}
				width= {50}
				/>
				</Grid>
			)
		})}
		</Grid>
		</Card>
		</div>
		)
}
