import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { TailSpin } from "react-loader-spinner";

export default function LoadingDialogue({ open, onClose }) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <div className="flex justify-center align-center">
            <TailSpin
              color="blue"
              width={100}
              height={100}
              className="m-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
