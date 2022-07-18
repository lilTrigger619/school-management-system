import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import {useRouter} from "next/router";
import Cancel from "@material-ui/icons/CancelRounded";
import IconButton from "@material-ui/core/IconButton";

export default function ErrorRegister({ open, closeButton }) {
  const route = useRouter();
  //console.dir({ route });

  return (
    <>
      <Dialog open={open} onClose={() => {}}>
        <DialogContent>
          <Image src="/12407584.png" width={50} height={50} />
          <Typography variant="body1">
            {" "}
            Oops something went wrong ...{" "}
          </Typography>
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
