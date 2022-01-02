import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/Grid";
import {PaymentForm} from './';

export default function () {
  return (
    <div>
      <Card>
        <CardContent className="p-4">
          <Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="body1" className="w-full text-center"> Payment</Typography>
						</Grid>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <div
                        style={{
                          width: "15rem",
                          height: "15rem",
                          margin: "auto",
                        }}
                        className="w-full h-full bg-yellow-400"
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <div>
                        <div className="flex justify-around my-4">
                          <Typography variant="body1">Name:</Typography>
                          <Typography variant="body1">Dummy Name</Typography>
                        </div>

                        <div className="flex justify-around my-4">
                          <Typography variant="body1">Class: </Typography>
                          <Typography variant="body1">Dummy CLass</Typography>
                        </div>

                        <div className="flex justify-around my-4">
                          <Typography variant="body1">Teacher: </Typography>
                          <Typography variant="body1">Dummy Teacher</Typography>
                        </div>

                        <div className="flex justify-around my-4">
                          <Typography variant="body1">Status: </Typography>
                          <Typography variant="body1">Dummy Status</Typography>
                        </div>

                        <div className="flex justify-around my-4">
                          <Typography variant="body1">
                            Parent or Gaurdian:{" "}
                          </Typography>
                          <Typography variant="body1">Dummy Parent</Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <div className="flex justify-around p-5">
                    <Typography variant="body1">Credit Status:</Typography>
                    <Typography variant="body1">
                      {" "}
                      Dummy Credit Status
                    </Typography>
                  </div>

                  <div className="flex justify-around p-5">
                    <Typography variant="body1">Debit Status:</Typography>
                    <Typography variant="body1"> Dummy Debit Status</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>

						<Grid item xs={12}>
							<PaymentForm />
						</Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
