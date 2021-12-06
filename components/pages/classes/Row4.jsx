import {Typography, Grid,} from '@material-ui/core';
import FlexCard from './flexCard';

export default function Row4(){
	return(
		<>
		<Grid container spacing={7}>
	  	  <Grid item xs={12} md={4}>
	  			<FlexCard name="Mr. Abofi" position="{Teacher}"/>
	  	  </Grid>
		
			<Grid item xs={12} md={4}>
				<FlexCard name="Kingsly Adzokaste" position="{Class Rep}"/>
			</Grid>

			<Grid item xs={12} md={4}>
				<FlexCard name="Princilla Tsatsu" position="{Assist. Class Rep}"/>
			</Grid>
		</Grid>
		</>
	)
}
