import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import {AddCircle, Attachment} from '@material-ui/icons';

export default function Row2() {
  return (
    <>
      <div className="mt-9">
        <Card>
          <CardContent>
            <Grid container spacing={4}>
				<Grid item xs={12}>
					<Typography variant="h5">Optional</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Card>
						<CardContent>
							<Typography variant="body1">Select a student</Typography>
							<select>
								
							</select>
							<AddCircle/>
						</CardContent>
					</Card>
				</Grid>

				<Grid item x={12} md={6}>
					<Card>
						<CardContent>
							<Typography variant="body1">Add file</Typography>
							<Attachment />
							<input type="file" />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
