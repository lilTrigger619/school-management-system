import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVerify, setStatus } from "../../login/loginSlice";
import {
  FormPage1,
  FormPage2,
  FormPage3,
  FormPage4,
  FormPage5,
  FormPage6,
} from "./formPages";
import { setValidateForm1 } from "./registerStudentSlice";

export default function StudentForm() {
  const dispatch = useDispatch();
  const [Gender, setGender] = useState();
  const [pages, setPages] = useState(1);
  const MaxPage = 6;
  const FormD = new FormData();
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const hometown = useRef();
  const currentLocation = useRef();
  const nationality = useRef();
  const illness = useRef();
  const allergies = useRef();
  const disability = useRef();
  const password = useRef();
  const otherName = useRef();
  const dateOfBirth = useRef();
  const religion = useRef();
  const maleParentName = useRef();
  const maleParentDateOfBirth = useRef();
  const maleParentPhone = useRef();
  const maleParentEmail = useRef();
  const femaleParentName = useRef();
  const femaleParentDateOfBirth = useRef();
  const femaleParentPhone = useRef();
  const femaleParentEmail = useRef();
  const parentMarriageStatus = useRef();
  const formValidate1 = useSelector(
    (state) => state.RegisterStudent.validate.validateForm1
  );
  const formValidate2 = useSelector(
    (state) => state.RegisterStudent.validate.validateForm2
  );
  const formValidate3 = useSelector(
    (state) => state.RegisterStudent.validate.validateForm3
  );
  const formValidate4 = useSelector(
    (state) => state.RegisterStudent.validate.validateForm4
  );
  const formValidate5 = useSelector(
    (state) => state.RegisterStudent.validate.validateForm5
  );
  const formValidate6 = useSelector(
    (state) => state.RegisterStudent.validate.validateForm6
  );
  const pageChange = useSelector((state) => state.RegisterStudent.page);
  const status = useSelector((state) => state.Auth.status);

  /*
  useEffect(()=>{
    console.log(" status of authentication", status);
    return dispatch(setStatus(""))
  }, [status]);
  */

  const onSubmit = async (e) => {
    e.preventDefault();
    //appending the form data to the FormData instance
    formD.append("user", {
      user: {
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      },
    });
    formD.append("parent", {
      parent: {
        male_partner_full_name: maleParentName.current.value,
        male_tel_number: maleParentPhone.current.value,
        male_email: maleParentEmail.current.value,
        male_date_of_birth: maleParentDateOfBirth.current.value,
        female_partner_full_name: femaleParentName.current.value,
        female_tel_number: femaleParentPhone.current.value,
        female_email: femaleParentEmail.current.value,
        female_date_of_birth: femaleParentDateOfBirth.current.value,
        marital_status: parentMarriageStatus.current.value,
      },
    });
    formD.append("first_name", firstName.current.value);
    formD.append("last_name", lastName.current.value);
    formD.append("username", username.current.value);
    formD.append("other_name", otherName.current.value);
    formD.append("email", email.current.value);
    formD.append("phone", phone.current.value);
    formD.append("hometown", hometown.current.value);
    formD.append("location", location.current.value);
    formD.append("current_location", currentLocation.current.value);
    formD.append("nationality", nationality.current.value);
    formD.append("illness", illness.current.value);
    formD.append("allergies", allergies.current.value);
    formD.append("disability", disability.current.value);
    formD.append("gender", Gender);
    formD.append("date_of_birth", dateOfBirth.current.value);
    formD.append("religion", regligion.current.value);
  };

  //page change button handler
  const PageChangeHandler = (e, pageNum) => {
    e.preventDefault();
    switch (pages) {
      case 1:
        return dispatch(setValidateForm1({
          ...formValidate1,
          ["validate"]: true,
          ["pageNum"]: pageNum,
        }));
        break;
      case 2:
        return dispatch(setValidateForm2({
          ...formValidate2,
          ["validate"]: true,
          ["pageNum"]: pageNum,
        }));
        break;
      case 3:
        return dispatch(setValidateForm3({
          ...formValidate3,
          ["validate"]: true,
          ["pageNum"]: pageNum,
        }));
        break;
      case 4:
        return dispatch(setValidateForm4({
          ...formValidate4,
          ["validate"]: true,
          ["pageNum"]: pageNum,
        }));
        break;
      case 5:
        return dispatch(setValidateForm5({
          ...formValidate5,
          ["validate"]: true,
          ["pageNum"]: pageNum,
        }));
        break;
      case 6:
        return dispatch(setValidateForm6({
          ...formValidate6,
          ["validate"]: true,
          ["pageNum"]: pageNum,
        }));
        break;
    }
  };


  //check for page change.
  useEffect(() => {
    //next page
    if (pageChange.next) {
      pages < MaxPage ? setPages((prev) => ++prev) : "";
    }
    //previous page
    else if (pageChange.previous) {
      pages == 1 ? setPages((prev) => --prev) : "";
    }
  }, [pageChange.next, pageChange.previous]);

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          {/* formPage 1 */}
          <FormPage1
            hidden={pages != 1 ? true : false}
            firstName={firstName}
            lastName={lastName}
            otherName={otherName}
            username={username}
            dateOfBirth={dateOfBirth}
            setGender={setGender}
          />

          {/* formPage 2 */}
          <FormPage2
            hidden={pages != 2 ? true : false}
            email={email}
            phone={phone}
          />

          {/* formPage 3 */}
          <FormPage3
            hidden={pages != 3 ? true : false}
            currentLocation={currentLocation}
            nationality={nationality}
            religion={religion}
            hometown={hometown}
          />

          {/* formPage 4 */}
          <FormPage4
            hidden={pages != 4 ? true : false}
            illness={illness}
            allergies={allergies}
            disability={disability}
          />

          {/* formPage 5 */}
          <FormPage5 password={password} hidden={pages != 5 ? true : false} />

          {/* formPage 6 */}
          <FormPage6
            hidden={pages != 6 ? true : false}
            maleParentName={maleParentName}
            maleParentDateOfBirth={maleParentDateOfBirth}
            maleParentPhone={maleParentPhone}
            maleParentEmail={maleParentEmail}
            femaleParentName={femaleParentName}
            femaleParentDateOfBirth={femaleParentDateOfBirth}
            femaleParentPhone={femaleParentPhone}
            femaleParentEmail={femaleParentEmail}
            parentMarriageStatus={parentMarriageStatus}
          />

          <div>
            <Button
              variant="contained"
              onClick={(e) => PageChangeHandler(e, "decreasePage")}
              disabled={pages == 1 ? true : false}
            >
              Prev
            </Button>

            <Button
              variant="outlined"
              onClick={(e) => PageChangeHandler(e, "increasePage")}
              disabled={pages == 6 ? true : false}
            >
              Next
            </Button>

            <Typography variant="body1"> Page {pages} of 6 </Typography>
          </div>

          <div className={`${pages != 6 ? "hidden" : ""}`}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}
