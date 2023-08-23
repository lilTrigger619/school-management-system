import { useState, useEffect } from "react";
import { setGender, submitForm } from "../registerSlice";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

export default function FirstName() {
  const error = useSelector((state) => state.Form.errors.gender);
  const formSubmit = useSelector((state) => state.Form.formSubmit);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const Styles = useStyles();

  /*
  useEffect(() => {
    if (formSubmit) {
      dispatch(setGender(value));
    }
  }, [formSubmit]);
  */

  return (
    <>
      <div
        className={`
				border
				p-5
				my-5
				mx-auto
				rounded
				items-center
				bg-gray-100
				${Styles.Container}
				${error ? Styles.Error : ""}
				`}
      >
        <Typography variant="body2" className="flex justify-center">
          {" "}
          Gender:
        </Typography>
        <div
          className={`
						flex
						justify-around
						`}
        >
          {/** male**/}
          <div
            className={`
						flex
						justify-between
						items-center	
						`}
          >
            <Typography variant="caption">Male</Typography>
            <input
              name="gender"
              type="radio"
              onChange={(e) => dispatch(setGender(e.target.value))}
              value="mal"
							required
            />
          </div>

          {/**female**/}
          <div
            className={`
						flex
						justify-between
						items-center	
						`}
          >
            <Typography variant="caption">Female</Typography>
            <input
              name="gender"
              type="radio"
              onChange={(e) => setValue(e.target.value)}
              value="fem"
            />
          </div>
        </div>
        <Typography 
					className="
						flex
						justify-center
						my-3
					"
				variant="caption">{error}</Typography>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  Container: {
    maxWidth: "23rem",
  },
  Error: {
    border: "1px solid red",
    color: "red",
  },
}));
