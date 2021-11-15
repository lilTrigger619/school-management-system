import {
  Typography,
  Card,
  CardContent,
  Drawer,
  CardHeader,
  Grid,
} from "@material-ui/core";
import Layout from "../components/managementLayout/layout";
import SwiperComp from '../components/pages/dashboard/slider';



export default function Homepage() {
  return (
    <>
      <Layout>
        <div className=" my-8">
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <CardHeader 
                title="Latest News"
                subheader="Attendence"
                className={`flex`}
                />
                <CardContent>
                  <Typography variant="body1">
                    {" "}
                    Please every student should do well to come to schoole early
                    comming Monday to prevent any punishment
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <div>
                <SwiperComp/>
              </div>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
}
