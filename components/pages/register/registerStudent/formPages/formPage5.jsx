import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useState } from "react";

const FormPage5 = ({ password, hidden }) => {
  const [Random, setRandom] = useState(false);

  const Randomize = () => {
    console.log("value");
  };

  const radioOnChange = (e) => {
    setRandom(e.target.value);
    console.log(Random);
  };

  return (
    <>
      <div className={`${hidden ? "hidden" : ""}`}>
        <Typography variant="h4">Security & Token</Typography>

        {/* form */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Password Type</FormLabel>
          {/* Radio to select Random or manual password */}
          <RadioGroup name="radomPassword" onChange={radioOnChange}>
            <FormControlLabel
              label="Random"
              value="random"
              control={<Radio />}
            />

            <FormControlLabel
              label="Manual"
              value="manual"
              control={<Radio />}
            />
          </RadioGroup>

          {/* Password input field */}
          <FormGroup>
            <FormControlLabel
              control={
                <TextField
                  name="password"
                  type="password"
                  ref={password}
                  onChange={(e) => (password.current.value = e.target.value)}
                  required
                />
              }
              labelPlacement="start"
              label="Password"
              required
            />
            <Button onClick={Randomize} variant="outlined">
              Randomize
            </Button>
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
};

export default FormPage5;
