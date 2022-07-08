import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValidateForm6, setPage } from "../registerStudentSlice";
import {
  normalValidate,
  emailValidate,
  dateValidate,
  fullNameValidate,
  radioValidate,
} from "../../../../../utils/validations";

const FormPage6 = ({
  hidden,
  maleParentName,
  maleParentDateOfBirth,
  maleParentPhone,
  maleParentEmail,
  femaleParentName,
  femaleParentDateOfBirth,
  femaleParentPhone,
  femaleParentEmail,
  parentMarriageStatus,
}) => {
  const [InputErrors, setInputErrors] = useState({
    maleParentName: "",
    maleParentDateOfBirth: "",
    femaleParentName: "",
    femaleParentDateOfBirth: "",
    maritalStatus: "",
  });
  const VInfo = useSelector(
    (state) => state.RegisterStudent.validate.validateForm6
  );
  const dispatch = useDispatch();
  const PInfo = useSelector((state) => state.RegisterStudent.page);
  console.log("debug validate info", VInfo);
  console.log("debug Page infor", PInfo);

  //validate triggered
  useEffect(() => {
    if (VInfo.validate) {
      let isValid = false;
      let localInputErrors = {
        maleParentName: "",
        maleParentDateOfBirth: "",
        femaleParentName: "",
        femaleParentDateOfBirth: "",
        maritalStatus: "",
      };
      localInputErrors["maleParentName"] = fullNameValidate(
        maleParentName.current.value
      );
      localInputErrors["maleParentDateOfBirth"] = dateValidate(
        maleParentDateOfBirth.current.value
      );
      localInputErrors["femaleParentName"] = fullNameValidate(
        femaleParentName.current.value
      );
      localInputErrors["femaleParentDateOfBirth"] = dateValidate(
        femaleParentDateOfBirth.current.value
      );
      localInputErrors["maritalStatus"] = radioValidate(
        parentMarriageStatus.current.value
      );

      if (
        localInputErrors["maleParentName"] ||
        localInputErrors["femaleParentName"] ||
        localInputErrors["maleParentDateOfBirth"] ||
        localInputErrors["femaleParentDateOfBirth"] ||
        localInputErrors["maritalStatus"]
      ) {
        setInputErrors(localInputErrors);
        isValid = false;
      } else if(
        !localInputErrors["maleParentName"] &&
        !localInputErrors["femaleParentName"] &&
        !localInputErrors["maleParentDateOfBirth"] &&
        !localInputErrors["femaleParentDateOfBirth"] &&
        !localInputErrors["maritalStatus"]
      ){
        setInputErrors({
          maleParentName: "",
          maleParentDateOfBirth: "",
          femaleParentName: "",
          femaleParentDateOfBirth: "",
          maritalStatus: "",
        });
        isValid=true;
        console.log("it is valid", localInputErrors);
      }
      dispatch(
        setValidateForm6({
          ...VInfo,
          ["isValid"]: isValid,
          ["validate"]: false,
        })
      );
    }
  }, [VInfo.validate]);

  //when form is valid
  useEffect(() => {
    if (VInfo.isValid) {
      if (VInfo.pageNum == "increasePage") {
        dispatch(setPage({ ...PInfo, ["next"]: true }));
      } else if (VInfo.pageNum == "decreasePage") {
        dispatch(setPage({ ...PInfo, ["previous"]: true }));
      }
      dispatch(setValidateForm6({ ...VInfo, ["isValid"]: false }));
    }
  }, [VInfo.isValid]);

  return (
    <>
      <div className={`${hidden ? "hidden" : ""}`}>
        {/* Male Parent or guardian */}
        <FormControl component="fieldset">
          <FormLabel component="legend"> Male Parent / Guardian</FormLabel>

          {/* Fathers  name */}
          <FormControlLabel
            control={
              <TextField
                name="father's name"
                onChange={(e) =>
                  (maleParentName.current.value = e.target.value)
                }
                ref={maleParentName}
                error={InputErrors.maleParentName}
                helperText={InputErrors.maleParentName}
              />
            }
            label="Full name"
            labelPlacement="start"
          />

          {/* Fathers number*/}
          <FormControlLabel
            control={
              <TextField
                name="father's phone"
                onChange={(e) =>
                  (maleParentPhone.current.value = e.target.value)
                }
                ref={maleParentPhone}
              />
            }
            label="Phone number"
            labelPlacement="start"
          />

          {/* Father's email*/}
          <FormControlLabel
            control={
              <TextField
                type="email"
                name="email"
                ref={maleParentEmail}
                onChange={(e) =>
                  (maleParentEmail.current.value = e.target.value)
                }
              />
            }
            label="Email"
            labelPlacement="start"
          />

          {/*Father's dateOfBirth*/}
          <FormControlLabel
            control={
              <TextField
                name="father's dateOfBirth"
                type="date"
                ref={maleParentDateOfBirth}
                onChange={(e) =>
                  (maleParentDateOfBirth.current.value = e.target.value)
                }
                error={InputErrors.maleParentDateOfBirth}
                helperText={InputErrors.maleParentDateOfBirth}
              />
            }
            label="Date of birth"
            labelPlacement="start"
          />
        </FormControl>

        {/* mothers details */}
        <FormControl component="fieldset">
          <FormLabel component="legend"> Female Parent / Guardian</FormLabel>

          {/* mother's name */}
          <FormControlLabel
            control={
              <TextField
                onChange={(e) =>
                  (femaleParentName.current.value = e.target.value)
                }
                ref={femaleParentName}
                name="mother's full name"
                error={InputErrors.femaleParentName}
                helperText={InputErrors.femaleParentName}
              />
            }
            label="Full Name"
            labelPlacement="start"
          />

          {/* mother's phone */}
          <FormControlLabel
            control={
              <TextField
                ref={femaleParentPhone}
                onChange={(e) =>
                  (femaleParentPhone.current.value = e.target.value)
                }
                name="Mother's phone number"
              />
            }
            label="Phone number"
            labelPlacement="start"
          />

          {/* mother's email */}
          <FormControlLabel
            control={
              <TextField
                type="email"
                ref={femaleParentEmail}
                onChange={(e) =>
                  (femaleParentEmail.current.value = e.target.value)
                }
                name="email"
              />
            }
            label="Email"
            labelPlacement="start"
          />

          {/*mother's date of birth */}
          <FormControlLabel
            control={
              <TextField
                type="date"
                ref={femaleParentDateOfBirth}
                name="Mother's date of birth"
                onChange={(e) =>
                  (femaleParentDateOfBirth.current.value = e.target.value)
                }
                error={InputErrors.femaleParentDateOfBirth}
                helperText={InputErrors.femaleParentDateOfBirth}
              />
            }
            label="Date of birth"
            labelPlacement="start"
          />
        </FormControl>

        {/* Parent marriage status*/}
        <FormControl component="fieldset">
          <FormLabel component="legend"> Parent Marital status</FormLabel>
          <RadioGroup
            onChange={(e) =>
              (parentMarriageStatus.current.value = e.target.value)
            }
            name="Father's marital status"
            ref={parentMarriageStatus}
          >
            {/* Guardian */}
            <FormControlLabel
              control={<Radio />}
              label="Guardian"
              value="Guardian"
              labelPlacement="end"
            />

            {/* Single */}
            <FormControlLabel
              control={<Radio />}
              label="Single"
              value="Single"
              labelPlacement="end"
            />

            {/* married */}
            <FormControlLabel
              control={<Radio />}
              label="Married"
              value="Married"
              labelPlacement="end"
            />

            {/* Together */}
            <FormControlLabel
              control={<Radio />}
              label="Together"
              labelPlacement="end"
              value="Together"
            />

            {/* Splitted */}
            <FormControlLabel
              control={<Radio />}
              label="Splitted"
              labelPlacement="end"
              value="Splitted"
            />

            {/* Divorced */}
            <FormControlLabel
              control={<Radio />}
              label="Divorced"
              labelPlacement="end"
              value="Divorced"
            />

            {/* Deceased Partner */}
            <FormControlLabel
              label="Deceased Partner"
              labelPlacement="end"
              value="Deceased_partner"
              control={<Radio />}
            />
            <Typography variant="body2" color="error" >{InputErrors.maritalStatus}</Typography>
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default FormPage6;
