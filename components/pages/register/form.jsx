//note at the bottom
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import {
  FirstName,
  LastName,
  Username,
  Email,
  Phone,
  Date_of_birth,
  Location,
  Disability,
  Illness,
  Gender,
  //Photo,
  Password,
  Position,
} from "./formElements";
import {
  submitForm,
  stop_submitForm,
  setFirstNameErr,
  setUsernameErr,
  setLastNameErr,
  setEmailErr,
  setGenderErr,
} from "./registerSlice";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

export default function Form() {
  //const form = new FormData();
  const [FormData, setFormData] = useState({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
    },
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    location: "",
    illness: "",
    disability: "",
    position: "",
    phone: "",
    date_of_birth: "",
  });
  const [SubmitToBackend, setSubmitToBackend] = useState(false);
  const [Validate, setValidate] = useState(false);
  const [ErrorState, setErrorState] = useState(false);
  const Styles = useStyles();
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.Form.input.firstName);
  const lastName = useSelector((state) => state.Form.input.lastName);
  const email = useSelector((state) => state.Form.input.email);
  const username = useSelector((state) => state.Form.input.username);
  const date_of_birth = useSelector((state) => state.Form.input.date_of_birth);
  const position = useSelector((state) => state.Form.input.position);
  const phone = useSelector((state) => state.Form.input.phone);
  const location = useSelector((state) => state.Form.input.location);
  const disability = useSelector((state) => state.Form.input.disability);
  const illness = useSelector((state) => state.Form.input.illness);
  console.log(illness);
  const gender = useSelector((state) => state.Form.input.gender);
  //const photo = useSelector((state) => state.Form.input.photo);
  const password = useSelector((state) => state.Form.input.password);
  const inputs = useSelector((state) => state.Form.input);

  //validate the inputs when input button is pressed
  useEffect(() => {
    if (Validate) {
      const err = validate(inputs);
      if (err.firstName) {
        dispatch(setFirstNameErr(err.firstName));
      } else {
        dispatch(setFirstNameErr(""));
      }
      if (err.lastName) {
        dispatch(setLastNameErr(err.lastName));
      } else {
        dispatch(setLastNameErr(""));
      }
      if (err.email) {
        dispatch(setEmailErr(err.email));
      } else {
        dispatch(setEmailErr(""));
      }
      if (err.username) {
        dispatch(setUsernameErr(err.username));
      } else {
        dispatch(setUsernameErr(""));
      }
      if (err.gender) {
        dispatch(setGenderErr(err.gender));
      } else {
        dispatch(setGenderErr(""));
      }
      dispatch(stop_submitForm());
      setValidate(false);
      console.log("the validation errors were", err);

      if (
        err.firstName ||
        err.lastName ||
        err.email ||
        err.username ||
        err.gender
      ) {
        setErrorState(true);
        setSubmitToBackend(false);
      } else {
        setErrorState(false);
        setSubmitToBackend(true);
      }
    }
  }, [Validate]);

  //submit to the backend api for submission.
  useEffect(() => {
    if (SubmitToBackend) {
      setFormData({
        user: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          username: username,
          password: password,
        },
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
        location: location,
        illness: illness,
        disability: disability,
        position: position,
        phone: phone,
        date_of_birth: date_of_birth,
      });

      console.log("FormData state", FormData);
      console.log("inputs from redux", inputs);

      try {
        Axios.post("api/register/register", inputs)
          .then((response) => console.log("submission response", response))
          .catch(({ response }) =>
            console.log("responseErrorFrontend", response)
          );
      } catch (err) {
        console.log(err);
      }
    }
    return setSubmitToBackend(false);
  }, [SubmitToBackend]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(submitForm());
    setValidate(true);

    //axios.post('api/register',);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FirstName />
      <LastName />
      <Username />
      <Email />
      <Phone />
      <Date_of_birth />
      <Location />
      <Disability />
      <Illness />
      <Position />
      <Gender />
      {/*<Photo /> this component has its own control.*/}
      <Password />
      <div className={`flex justify-center my-6 ${ErrorState ? "" : "hidden"}`}>
        <Typography variant="body1" color="secondary">
          Please fix the errors!
        </Typography>
      </div>
      <div className="flex justify-center my-9">
        <Button
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          className={`${Styles.button} `}
        >
          Submit{" "}
        </Button>
      </div>
    </form>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    maxWidth: "23rem",
  },
}));

const validate = (data) => {
  const { firstName, lastName, gender, email, username } = data;
  //a variable can be created at the beggining of the page
  //then later assigned with the value of all usernames and emails
  //to perfom checks on whether they are unique.
  const error = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    username: "",
  };
  if (!firstName.trim()) {
    //first_name is empty
    console.log("first name trim", firstName.trim());
    error.firstName = "First name field should not be empty!";
  }
  if (!lastName.trim()) {
    //last_name is empty
    error.lastName = "Last name field should not be left empty!";
  }
  if (!gender.trim()) {
    //gender is empty
    error.gender = "Select a sex!";
  }
  if (!email.trim()) {
    //email is empty
    error.email = "Provide an email!";
  }
  if (!username.trim()) {
    //username is empty
    error.username = "Username is mandatory!";
  }

  return error;
};

/*
 * note
 * There is a bug here.
 *  when settting the ErrorState, the state may be setted to false even if error
 *  exist because, for every if check when it is false the Errorstate will be set
 *  to false.
 *  May be there may be an in error in the first name. but becaues there is no e-
 *  rror in Gender, ErrorState may be setted to false.
 */
