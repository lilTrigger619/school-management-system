import { Pie } from "react-chartjs-2";
import { StudentData, StaffData } from "./chartData";
import { Card, CardContent, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default function CutomPie() {
  const Styles = useStyles();
  return (
    <div className="max-w-2xlg  overflow-x-auto">
      <Card className="w-full h-50">
        <Grid container justifyContent="space-between" spacing="3">
          <Grid item xs="12" md="6">
            <div className={`${Styles.charts}`}>
              <Pie data={StudentData} height={50} width={50} />
            </div>
          </Grid>

          <Grid item xs="12" md="6">
            <div className={`${Styles.charts}`}>
              <Pie data={StaffData} height={50} width={50} />
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  charts: {
    maxWidth: "25rem",
    padding: "2rem",
    margin: "auto",
  },
}));
