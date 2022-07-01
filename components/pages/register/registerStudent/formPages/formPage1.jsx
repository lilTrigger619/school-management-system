import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { useSelector, useDispatch } from "react-redux";
import { setValidateForm1 } from "../registerStudentSlice";
import { useState, useEffect } from "react";
import { normalValidate, dateValidate } from "../../../../../utils/validations";

const FormPage1 = ({
  firstName,
  lastName,
  otherName,
  username,
  dateOfBirth,
  setGender,
  hidden,
}) => {
  const [InputErrors, setInputErrors] = useState({
    firstName: "",
    lastName: "",
    OtherName: "",
    username: "",
    dateOfBirth: "",
    gender: "",
  });
  const [Gender, SetGender] = useState();
  const ValidateForm = useSelector(
    (state) => state.RegisterStudent.validate.validateForm1
  );
  const Data = useSelector((state) => state.RegisterStudent.data);

  useEffect(() => {
    if (ValidateForm.validate) {
      const Usernames = [];
      console.log({ Usernames });
      Data.map((value) => Usernames.push(value.username));
      setInputErrors({
        ...InputErrors,
        ["firstName"]: normalValidate(firstName.current.value),
        ["lastName"]: normalValidate(lastName.current.value),
        ["otherName"]: normalValidate(otherName.current.value),
        ["username"]: normalValidate(username.current.value, {
          username: true,
          Usernames,
        }),
        ["dateOfBirth"]: dateValidate(dateOfBirth.current.value),
        ["gender"]: normalValidate(Gender),
      });

      !InputErrors.firstName ||
      !InputErrors.lastName ||
      !InputErrors.otherName ||
      !InputErrors.username ||
      !InputErrors.dateOfBirth ||
      !InputErrors.gender
        ? setValidateForm1({ ...ValidateForm, ["isValid"]: true })
        : "";
      setValidateForm1({ ...ValidateForm, ["validate"]: false });
    }
  }, [ValidateForm.validate]);
  return (
    <>
      <div className={`${hidden ? "hidden" : ""}`}>
        {/* Title */}
        <Typography className="my-3" variant="h4">
          Identity
        </Typography>

        <FormControl component="fieldset">
          {/* first name*/}
          <FormControlLabel
            control={
              <TextField
                ref={firstName}
                onChange={(e) => {
                  firstName.current.value = e.target.value;
                  //validate
                  validate(e.target.value);
                }}
                name="firstName"
                required
                placeholder="eg. John"
                error={InputErrors.firstName}
                helperText={
                  <>
                    <span>
                      <Typography color="error">
                        {InputErrors.firstName}
                      </Typography>
                    </span>
                  </>
                }
              />
            }
            label="First name: "
            labelPlacement="start"
          />

          {/* other name*/}
          <FormControlLabel
            control={
              <TextField
                ref={otherName}
                onChange={(e) => (firstName.current.value = e.target.value)}
                name="other name"
                error={InputErrors.otherName}
                helperText={
                  <>
                    <span>
                      More than one othername may be entered without a comma
                    </span>
                    <br />
                    <span>
                      <Typography colors="error">
                        {InputErrors.otherName}
                      </Typography>
                    </span>
                  </>
                }
              />
            }
            label="Othernames"
            labelPlacement="start"
          />

          {/* last name*/}
          <FormControlLabel
            control={
              <TextField
                ref={lastName}
                onChange={(e) => (lastName.current.value = e.target.value)}
                name="lastName"
                required
                placeholder="eg. Doe"
                error={InputErrors.lastName}
                helperText={
                  <>
                    <span>
                      <Typography color="error">
                        {InputErrors.lastName}
                      </Typography>
                    </span>
                  </>
                }
              />
            }
            label=" Last name"
            labelPlacement="start"
          />

          {/* username */}
          <FormControlLabel
            control={
              <TextField
                ref={username}
                onChange={(e) => (username.current.value = e.target.value)}
                name="username"
                required
                placeholder="eg. JohnDoe_1"
                error={InputErrors.username}
                helperText={
                  <>
                    <span>
                      <Typography color="error">
                        {InputErrors.username}
                      </Typography>
                    </span>
                  </>
                }
              />
            }
            label="Username"
            labelPlacement="start"
          />

          {/*Date of birth*/}
          <FormControlLabel
            control={
              <TextField
                ref={dateOfBirth}
                type="date"
                onChange={(e) => (dateOfBirth.current.value = e.target.value)}
                name="date of birth"
                required
                error={InputErrors.dateOfBirth}
                helperText={
                  <>
                    <span>
                      <Typography color="error">
                        {InputErrors.dateOfBirth}
                      </Typography>
                    </span>
                  </>
                }
              />
            }
            label="Date of birth"
            labelPlacement="start"
          />
        </FormControl>

        {/* gender */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            onChange={(e) => {
              setGender;
              SetGender(e.target.value);
            }}
            name="gender"
            value={Gender}
            error={true}
            helperText="Testing the radio error"
          >
            <FormControlLabel
              control={<Radio />}
              value="male"
              label="Male"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Radio />}
              value="female"
              label="Female"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default FormPage1;
