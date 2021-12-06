import { Grid, CardContent, Card, Typography, } from "@material-ui/core";

export default function Row3(props) {

  return (
    <>
      <div className="my-5">
        <Card>
          <CardContent>
            <div className="max-w-full h-24 border-2 border-gray-400">
							<Typography variant="body2" className="m-auto w-full h-full">No questions</Typography>
						</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
