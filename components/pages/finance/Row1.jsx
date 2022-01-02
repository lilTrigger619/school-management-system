import Typography from '@material-ui/core/Typography';
import {MyCard} from '../../index';
import Grid from '@material-ui/core/Grid';

export default function Row1(){
	const Placeholder = [
		{value: "200", data:"Total debtors"},
		{value: "50", data: "Total creditors"},
		{value: "10", data: "Full Payment"},
		{value: "88", data: "Red Zone"},
		{value: "20", data: "Arrears from previous acedamic period"},
		{value: "17", data: "inactive Students"}, 
	]

	return(
		<div className="my-10">
			<Grid container spacing={3}>
				{
					Placeholder.map((item,key)=>{
						return(
							<Grid item xs={12} md={6} key={key}>
								<MyCard dataValue={item.value} dataInfo={item.data.toUpperCase()}/>
							</Grid>
						)
				})
				}
			</Grid>
		</div>
	)
}
