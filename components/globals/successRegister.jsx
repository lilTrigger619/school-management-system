import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import {useRouter} from "next/router";
import IconButton from "@material-ui/core/IconButton";
import Cancel from "@material-ui/icons/CancelRounded";

export default function SuccessRegister({ open, closeButton }) {
  const route = useRouter();
  //console.log("pathname", route.pathname);
  return (
    <>
      <Dialog open={open} onClose={() => {}}>
        <DialogContent>
          <Typography>user data with profile image here.</Typography>

          <Link href="#">
            <a>create another user</a>
          </Link>
          <Link href="#">
            <a>go to homepage</a>
          </Link>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={closeButton}>
            <Cancel />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
