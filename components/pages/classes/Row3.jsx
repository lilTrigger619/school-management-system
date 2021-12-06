import { Pie } from "react-chartjs-2";
import { Card, CardContent, CardHeader, Typography, Grid } from "@material-ui/core";
import {useState} from 'react';
import FlexCard from './flexCard';

export default function CutomPie() {
  return (
    <div className=" my-9">
        <Grid container justifyContent="space-between" spacing="4">
		  <Grid item xs="12" md={8}>
			  <Card className="w-full h-50">
	  			<CardHeader title="Data:" subheader="Primary 1"/>
	  			<CardContent>
	  			<Typography>Total : </Typography>
	  			<Typography>Female : </Typography>
	  			<Typography>Teacher : </Typography>
	  			</CardContent>
			  </Card>
		  </Grid>
	  	  
        </Grid>
    </div>
  );
}
