import {
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  Button,
  Grid,
} from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import fakeObj from "./fakeObj";
import S_dialog from "./seeMoreDialog";

export default function Assignments() {
  const [openDialog, setOpenDialog] = useState(false);
  const Styles = useStyles();
  const isMobile = useSelector((state) => state.StudentRouteUiSlice.isMobile);

  return (
    <>
      <div className="my-8 mx-3">
        <Card>
          <CardContent>
            <div className="flex justify-between">
              <Typography variant="h5">Assignments</Typography>
              <Typography variant="body1">Total: ({fakeObj.length})</Typography>
            </div>

            <div className={`${Styles.Assign} bg-gray-100 p-5 rounded-lg`}>
              <Grid container spacing={3}>
                {isMobile && fakeObj.length > 1 ? (
                  <div>
                    {/**if its mobile and assingments are greater than one**/}
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6} lg={4}>
                        <div className="">
                          <Typography variant="body1">
                            Course Title: {fakeObj[0].course}
                          </Typography>
                          <Typography variant="body1">
                            Date of assignment: {fakeObj[0].dateAssigned}
                          </Typography>
                          <Typography variant="body1">
                            Date of Submission: {fakeObj[0].dateofSubmit}
                          </Typography>
                          <Typography variant="body1">
                            Marks: {fakeObj[0].marks}
                          </Typography>
                          <Button color="primary">Open</Button>
                        </div>
                      </Grid>
                    </Grid>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => setOpenDialog(true)}
                      size="small"
                    >
                      See more...
                    </Button>
                  </div>
                ) : isMobile && fakeObj.length == 1 ? (
                  <Grid item xs={12} md={6} lg={4}>
                    {/** if its mobile and amount of assignments equals one**/}
                    <div className="border-top">
                      <Typography variant="body1">
                        Course Title: {fakeObj[0].course}
                      </Typography>
                      <Typography variant="body1">
                        Date of assignment: {fakeObj[0].dateAssigned}
                      </Typography>
                      <Typography variant="body1">
                        Date of Submission: {fakeObj[0].dateofSubmit}
                      </Typography>
                      <Typography variant="body1">
                        Marks: {fakeObj[0].marks}
                      </Typography>
                      <Button color="primary">Open</Button>
                    </div>
                  </Grid>
                ) : fakeObj.length > 1 ? (
                  fakeObj.map((item, key) => (
                    <Grid item xs={12} md={6} lg={4} key={key}>
                      <div>
                        <hr />
                        <Typography variant="body1">
                          Course Title: {item.course}
                        </Typography>
                        <Typography variant="body1">
                          Date of assignment: {item.dateAssigned}
                        </Typography>
                        <Typography variant="body1">
                          Date of Submission: {item.dateofSubmit}
                        </Typography>
                        <Typography variant="body1">
                          Marks: {item.marks}
                        </Typography>
                        <Button color="primary">Open</Button>
                      </div>
                    </Grid>
                  ))
                ) : fakeObj.length == 0 ? (
                  <div>
                    <Typography>No content</Typography>
                  </div>
                ) : (
                  ""
                )}
              </Grid>
            </div>
            <S_dialog
              obj={fakeObj}
              openDialog={openDialog}
              onClose={() => setOpenDialog(false)}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  Assign: {
    maxHeight: "20rem",
    marginTop: "2rem",
    overflowY: "auto",
    overflowX: "hidden",
    width: "100%",
  },
}));
