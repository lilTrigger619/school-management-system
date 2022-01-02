import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import UiButton from "../../uiButton";
import ChartComponent from './chartComponent';


export default function () {
  return (
    <div>
      <Grid container spacing={5} justifyContent="center">

        <Grid item xs={12} md={6} lg={4}>
          <UiButton text="configure Fees " color="yellow"/>
        </Grid>
				
        <Grid item xs={12} md={6} lg={4}>
          <UiButton text="Creditors" color="blue"/>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <UiButton text="Debtors" color="green"/>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
					<UiButton text="Red Zone" color="red"/>
        </Grid>

				<Grid item xs={12}>
					<ChartComponent />
				</Grid>
      </Grid>
    </div>
  );
}
