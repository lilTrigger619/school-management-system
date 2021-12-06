import {MyCard} from '../../index';
import {Grid} from '@material-ui/core';

export default function Row1(){
	const PlaceHolder = [
		{value: "17200", data: "TOTAL NUMBER OF STUDENTS"},
		{value: "500", data: "TOTAL NUMBER OF FOREIGN STUDENTS"},
		{value: "8500", data: "TOTAL NUMBER OF FEMALE STUDENTS"},
		{value: "8700", data: "TOTAL NUMBE OF MALE STUDENTS"},
		{value: "3", data: "TOTAL NUMBER OF INACTIVE STUDENTS"},

	]
	
	return(
		<>
		<Grid container spacing={3} justifyContent="space-between">
			{PlaceHolder.map((data)=>{
				return(
				<Grid item xs="12" md="6" key={data}>
					<MyCard dataValue={data.value} dataInfo={data.data}/>
				</Grid>
				)
			})}	

		</Grid>
		</>
	)

}
