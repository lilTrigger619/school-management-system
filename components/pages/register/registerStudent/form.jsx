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
  FormPage7,
} from "./formPages";
import {
  setValidateForm1,
  setPage,
  setValidateForm2,
  setValidateForm3,
  setValidateForm4,
  setValidateForm5,
  setValidateForm6,
} from "./registerStudentSlice";

export default function StudentForm() {
  const dispatch = useDispatch();
  const [Gender, setGender] = useState();
  const [pages, setPages] = useState(1);
  const [ProfileImage, setProfileImage] = useState();
  const MaxPage = 7;
  const formD = new FormData();
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
  const profileImage = useRef();
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

  const onSubmit = (e) => {
    e.preventDefault();
    //appending the form data to the FormData instance
    console.log("onSubmit");
    formD.append("user", {
      user: {
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      },
    });
    
    formD.append("male_partner_full_name", maleParentName.current.value);
    formD.append("male_tel_number", maleParentPhone.current.value);
    formD.append("male_email", maleParentEmail.current.value);
    formD.append("male_date_of_birth", maleParentDateOfBirth.current.value);
    formD.append("female_partner_full_name", femaleParentName.current.value);
    formD.append("female_tel_number", femaleParentPhone.current.value);
    formD.append("female_email", femaleParentEmail.current.value);
    formD.append("female_date_of_birth", femaleParentDateOfBirth.current.value);
    formD.append("marital_status", parentMarriageStatus.current.value);
    formD.append("first_name", firstName.current.value);
    formD.append("last_name", lastName.current.value);
    formD.append("username", username.current.value);
    formD.append("other_name", otherName.current.value);
    formD.append("email", email.current.value);
    formD.append("phone", phone.current.value);
    formD.append("hometown", hometown.current.value);
    formD.append("current_location", currentLocation.current.value);
    formD.append("nationality", nationality.current.value);
    formD.append("illness", illness.current.value);
    formD.append("allergies", allergies.current.value);
    formD.append("disability", disability.current.value);
    formD.append("gender", Gender);
    formD.append("date_of_birth", dateOfBirth.current.value);
    formD.append("religion", religion.current.value);
    formD.append("profile_image", ProfileImage);

    const obj = {
      male_partner_full_name: maleParentName.current.value,
      male_tel_number: maleParentPhone.current.value,
      male_email: maleParentEmail.current.value,
      male_date_of_birth: maleParentDateOfBirth.current.value,
      female_partner_full_name: femaleParentName.current.value,
      female_tel_number: femaleParentPhone.current.value,
      female_email: femaleParentEmail.current.value,
      female_date_of_birth: femaleParentDateOfBirth.current.value,
      marital_status: parentMarriageStatus.current.value,
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      username: username.current.value,
      other_name: otherName.current.value,
      email: email.current.value,
      phone: phone.current.value,
      hometown: hometown.current.value,
      current_location: currentLocation.current.value,
      nationality: nationality.current.value,
      illness: illness.current.value,
      allergies: allergies.current.value,
      disability: disability.current.value,
      gender: Gender,
      date_of_birth: dateOfBirth.current.value,
      religion: religion.current.value,
      "profile-image": ProfileImage,
    }
    console.log("the object", obj);
  };

  //page change button handler
  const PageChangeHandler = (e, pageNum) => {
    console.log("current page", pages);
    e.preventDefault();
    switch (pages) {
      case 1:
        return dispatch(
          setValidateForm1({
            ...formValidate1,
            ["validate"]: true,
            ["pageNum"]: pageNum,
          })
        );
        break;
      case 2:
        console.log("form validate 2", formValidate2);
        return dispatch(
          setValidateForm2({
            ...formValidate2,
            ["validate"]: true,
            ["pageNum"]: pageNum,
          })
        );
        break;
      case 3:
        pageNum == "increasePage"
          ? nextPage()
          : pageNum == "decreasePage"
          ? previousPage()
          : "";
        break;
      case 4:
        pageNum == "increasePage"
          ? nextPage()
          : pageNum == "decreasePage"
          ? previousPage()
          : "";
        break;
      case 5:
        pageNum == "increasePage"
          ? nextPage()
          : pageNum == "decreasePage"
          ? previousPage()
          : "";
        break;
      case 6:
        return dispatch(
          setValidateForm6({
            ...formValidate6,
            ["validate"]: true,
            ["pageNum"]: pageNum,
          })
        );
        break;
      case 7:
        pageNum == "increasePage"
          ? nextPage()
          : pageNum == "decreasePage"
          ? previousPage()
          : "";
        break
    }
  };

  //check for page change.
  useEffect(() => {
    //next page
    if (pageChange.next) {
      pages < MaxPage ? setPages((prev) => ++prev) : "";
      dispatch(setPage({ ...pageChange, ["next"]: false }));
    }
    //previous page
    else if (pageChange.previous) {
      pages != 1 ? setPages((prev) => --prev) : "";
      dispatch(setPage({ ...pageChange, ["previous"]: false }));
    }
  }, [pageChange.next, pageChange.previous]);

  //page methods
  const nextPage = () => setPages((prev) => ++prev);
  const previousPage = () => setPages((prev) => --prev);

  return (
    <>
      <div>
        <form>
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

          {/* formPage 7 */}
          <FormPage7 hidden={pages != 7 ? true : false} setProfileImage={(File)=>setProfileImage(File)}/>

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
              disabled={pages == 7 ? true : false}
            >
              Next
            </Button>

            <Typography variant="body1"> Page {pages} of 7 </Typography>
          </div>

          <div className={`${pages != 7 ? "hidden" : ""}`}>
            <Button type="submit" onClick={onSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}
