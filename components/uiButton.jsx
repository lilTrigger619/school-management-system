import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";

export default function ({ href, text ,color}) {
  const Styles = {
    width: "50%",
    margin: "auto",
    borderBottomColor:  color ?? 'brown',
		borderBottomWidth: "2px",
		borderBottomStyle: "solid",
    marginTop: "3px",
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <Button className="w-full m-auto">{text ?? "Goto ..."}</Button>
      </div>
      <div style={Styles}></div>
    </div>
  );
}
