import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { setPage, setValidateForm2 } from "../registerStudentSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  normalValidate,
  emailValidate,
} from "../../../../../utils/validations";
import { useState, useEffect } from "react";

// this form will contain the phone, email,

const FormPage2 = ({ phone, email, hidden }) => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState('');
  const FormValidate = useSelector(
    (state) => state.RegisterStudent.validate.validateForm2
  );
  const PageChange = useSelector(
    (state) => state.RegisterStudent.page
  );

  //on validate change
  useEffect(() => {
    if (FormValidate.validate) {
      let isValid = false;
      let localEmailEr = "";
      //email contains something
      if(email.current.value != undefined || email.current.value != ""){
        localEmailEr = emailValidate(email.current.value);
      }else {isValid=true};
      
      if(localEmailEr){
        setEmailError(localEmailEr)
      }else{
        isValid=true;
      };

      dispatch(
        setValidateForm2({
          ...FormValidate,
          ["isValid"]: isValid,
          ["validate"]: false,
        })
      );
    }
  }, [FormValidate.validate]);

  //Input field is valid
  useEffect(() => {
    if (FormValidate.isValid) {
      FormValidate.pageNum == "increasePage"
        ? dispatch(setPage({ ...PageChange, ["next"]: true }))
        : FormValidate.pageNum == "decreasePage"
        ? dispatch(setPage({ ...PageChange, ["previous"]: true }))
        : "";
      dispatch(
        setValidateForm2({
          ...FormValidate,
          ["isValid"]: false,
          ["pageNum"]: "",
        })
      );
    }
  }, [FormValidate.isValid]);

  return (
    <>
      <div className={` ${hidden ? "hidden" : ""}`}>
        <Typography className="my-3" variant="h4">
          Contact
        </Typography>
        {/* email */}
        <TextField
          type="email"
          placeholder="eg. john.d@yahoo.com"
          label="Email"
          name="email"
          ref={email}
          onChange={(e) => (email.current.value = e.target.value)}
          error={emailError}
          helperText={emailError}
        />

        {/* phone */}
        <TextField
          type="text"
          label="phone"
          name="phone"
          ref={phone}
          onChage={(e) => (phone.current.value = e.target.value)}
        />
      </div>
    </>
  );
};

export default FormPage2;
