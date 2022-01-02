import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/Grid";

export default function ({id, name, transactionType, amount}) {
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
									{/**first row**/}
									<div className="flex justify-between">
										<div className="flex justify-around">
											<Typography variant="body1">Transaction Id:   </Typography>
											<Typography variant="body1">{id ?? "No id"}</Typography>
										</div>

												{/**Transaction Type**/}
										<div className="flex">
											<Typography variant="body1">Transaction Type</Typography>
											<Typography variant="body1">{transactionType ?? "Unknown"}</Typography>
										</div>
									</div>

									{/**second row**/}
									<div className="flex">
										<div className="flex">
											<Typography variant="body1">Name</Typography>
											<Typography variant="body1">{name ?? "No name"}</Typography>
										</div>

										<div className="flex">
											<Typography variant="body1">Transaction Amount:</Typography>
											<Typography variant="body1">{amount ?? "Unknown"}</Typography>
										</div>
									</div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
