import {UiButton} from '../../index';
import Grid from '@material-ui/core/Grid';

export default function (){
	const Items = [
		{text:'Recent Transaction',color:"blue"},
		{text:'Make Payment',color:"gold",},
		{text:'Print Bill',color:"green"},
		{text:'Print All Transactions', color:"pink"},
	]
	return(
		<div className="my-9">
			<Grid container spacing={3} justifyContent="center">
				{Items.map((item,key)=>{
					return(
						<Grid item xs={12} md={6} lg={4}>
							<UiButton text={item.text} color={item.color}/>
						</Grid>
					)
				})}
			</Grid>
		</div>
	)
}
