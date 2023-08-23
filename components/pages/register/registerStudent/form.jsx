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
  setSubmissionStatus,
  setRegisterStudentData,
} from "./registerStudentSlice";
import LoadingDialog from "../../../globals/loadingDialog";
import SuccessRegister from "../../../globals/successRegister";
import ErrorRegister from "../../../globals/errorRegister";

export default function StudentForm() {
  const dispatch = useDispatch();
  const [Gender, setGender] = useState();
  const [pages, setPages] = useState(1);
  const [ProfileImage, setProfileImage] = useState();
  const [process, setProcess] = useState(false);
  const [showSubmitStat, setShowSubmitStat] = useState({
    error: false,
    success: false,
  });
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
  const SubmissionStatus = useSelector(
    (state) => state.RegisterStudent.submissionStatus
  );
  const RegisterFormData = useSelector(
    (state) => state.RegisterStudent.registerFormData
  );

  /*
  useEffect(()=>{
    console.log(" status of authentication", status);
    return dispatch(setStatus(""))
  }, [status]);
  */

  //the loading dialog box close
  const onLoadingDialogClose = () => {
    //do nothing when outside the dialog is clicked.
    setProcess(true);
  };
  //submission satus dialog close.
  const submissionStat_d_Onclose = () => {
    //do nothing when outside the dialog is clicked.
    setShowSubmitStat(true);
  };

  // submission made?
  useEffect(() => {
    if (SubmissionStatus.submitted) {
      setTimeout(() => {
        if (SubmissionStatus.ok) {
          setProcess(false);
          setShowSubmitStat({
            ...showSubmitStat,
            ["error"]: false,
            ["success"]: true,
          });
        } else {
          setProcess(false);
          setShowSubmitStat({
            ...showSubmitStat,
            ["error"]: true,
            ["success"]: false,
          });
        }
        console.log("Submission data", SubmissionStatus);
      }, 3000);
      dispatch(
        setSubmissionStatus({
          ...SubmissionStatus,
          ["submitted"]: false,
        })
      );
    }
  }, [SubmissionStatus.submitted]);

  //Processing or loading prompts takes too long
  useEffect(()=>{
    setTimeout(()=>{
      if(process){
        setShowSubmitStat({
          ...showSubmitStat,
          ["error"]: true,
          ["success"]: false,
        });
        setProcess(false);
      };
    }, 10000);
  }, [process]);

  //onsubmit button click
  const onSubmit = (e) => {
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
    ProfileImage ? formD.append("profile_image", ProfileImage) : "";

    const obj = {
      user: {
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      },
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
    };

    //confirm user registration.
    if (typeof window != "undefined") {
      if (window.confirm("Are you sure you want to register this student ?")) {
        setProcess(true);
        dispatch(setRegisterStudentData(obj));
      }
    }
  };

  //page change button handler
  const PageChangeHandler = (e, pageNum) => {
    //console.log("current page", pages);
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
        break;
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
          <FormPage7
            hidden={pages != 7 ? true : false}
            setProfileImage={(File) => setProfileImage(File)}
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
              disabled={pages == 7 ? true : false}
            >
              Next
            </Button>

            <Typography variant="body1"> Page {pages} of 7 </Typography>
          </div>

          <div className={`${pages != 7 ? "" : ""}`}>
            <Button type="submit" onClick={onSubmit} disabled={false}>
              Submit
            </Button>
          </div>
        </form>
      </div>
      <LoadingDialog open={process} onClose={onLoadingDialogClose} />
      <SuccessRegister
        open={showSubmitStat.success}
        closeButton={() =>
          setShowSubmitStat({
            ...showSubmitStat,
            ["success"]: false,
          })
        }
      />
      <ErrorRegister
        open={showSubmitStat.error}
        closeButton={() =>
          setShowSubmitStat({ ...showSubmitStat, ["error"]: false })
        }
      />
    </>
  );
}
