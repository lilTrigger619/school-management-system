import {Bar, Line, Pie} from 'react-chartjs-2'

export default function Pie(){
	return(
		<div>
			<Pie 
			data={data}
			options={{
				maintainAspectRatio:false
			}}
			/>
		</div>
		)
}