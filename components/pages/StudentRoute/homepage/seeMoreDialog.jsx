import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function S_dialog({ openDialog, onClose, obj }) {
  return (
    <Dialog open={openDialog} onClose={onClose}>
      <DialogTitle> Assignments </DialogTitle>
      <DialogContent>
          {obj?.map((item, key) => (
            <div key={key}>
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
              <Typography variant="body1">Marks: {item.marks}</Typography>
              <Button color="primary">Open</Button>
            </div>
          ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

const useSyles = makeStyles((theme) => ({
  Item: {
		width: "100%",
	},
	Dialog: {
		maxWidth:"95%", 
	},
}));
