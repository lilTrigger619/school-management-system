import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { useSelector, useDispatch } from "react-redux";
import { setValidateForm1, setPage } from "../registerStudentSlice";
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
  const dispatch = useDispatch();
  const [InputErrors, setInputErrors] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    username: "",
    dateOfBirth: "",
    gender: "",
  });
  const [Gender, localSetGender] = useState();
  const ValidateForm = useSelector(
    (state) => state.RegisterStudent.validate.validateForm1
  );
  const Data = useSelector((state) => state.RegisterStudent.data);
  const pageState = useSelector((state) => state.RegisterStudent.page);

  //validate form
  useEffect(() => {
    if (ValidateForm.validate) {
      let isValid = false;
      const Usernames = [];
      Data.map((value) => Usernames.push(value.username));
      console.log({ Usernames });
      let localErrors = {
        firstName: normalValidate(firstName.current.value),
        lastName: normalValidate(lastName.current.value),
        otherName: normalValidate(otherName.current.value),
        username: normalValidate(username.current.value, true, Usernames),
        dateOfBirth: dateValidate(dateOfBirth.current.value),
        gender: normalValidate(Gender),
      };

      if (
        localErrors.firstName ||
        localErrors.lastName ||
        localErrors.otherName ||
        localErrors.username ||
        localErrors.dateOfBirth ||
        localErrors.gender
      ) {
        setInputErrors({
          ...InputErrors,
          ["firstName"]: localErrors.firstName,
          ["lastName"]: localErrors.lastName,
          ["otherName"]: localErrors.otherName,
          ["username"]: localErrors.username,
          ["dateOfBirth"]: localErrors.dateOfBirth,
          ["gender"]: localErrors.gender,
        });
        isValid = false;
      } else if (
        !localErrors.firstName &&
        !localErrors.lastName &&
        !localErrors.otherName &&
        !localErrors.username &&
        !localErrors.dateOfBirth &&
        !localErrors.gender
      ) {
        setInputErrors({
          ...InputErrors,
          ['firstName']: '',
          ['lastName']: '',
          ['otherName'] : '',
          ['username']: '',
          ['dateOfBirth']: '',
          ['gender']: ''
        });
        isValid = true;
      }

      dispatch(
        setValidateForm1({
          ...ValidateForm,
          ["validate"]: false,
          ["isValid"]: isValid,
        })
      );
    }
  }, [ValidateForm.validate]);

  //when the form is valid move to next or prev page or nothing
  useEffect(() => {
    if (ValidateForm.isValid) {
      console.log("The form is valid");
      ValidateForm.pageNum == "increasePage"
        ? dispatch(setPage({ ...pageState, ["next"]: true }))
        : ValidateForm.pageNum == "decreasePage"
        ? dispatch(setPage({ ...pageState, ["previous"]: true }))
        : "";
      //after
      dispatch(
        setValidateForm1({
          ...ValidateForm,
          ["isValid"]: false,
          ["pageNum"]: "",
        })
      );
    }
  }, [ValidateForm.isValid]);

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
                onChange={(e) => (firstName.current.value = e.target.value)}
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
                onChange={(e) => (otherName.current.value = e.target.value)}
                name="other name"
                error={InputErrors.otherName}
                helperText={
                  <>
                    <span>
                      <Typography variant="bod1">
                        More than one othername may be entered without a comma
                      </Typography>
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
              setGender(e.target.value);
              localSetGender(e.target.value);
            }}
            name="gender"
            value={Gender}
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
            <Typography color="error">{InputErrors.gender}</Typography>
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default FormPage1;
