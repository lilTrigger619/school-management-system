import ContextRequest, { Ppost } from "../../../../utils/context";
import ContextLoading from "../../../globals/loader";
import Forms from "./form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataArrived,
  setData,
  setRegisterStudentData,
  setSubmissionStatus,
} from "./registerStudentSlice";

const Context = () => {
  const dispatch = useDispatch();
  const DataArrived = useSelector((state) => state.RegisterStudent.dataArrived);
  const Token = useSelector((state) => state.GlobalState.token);
  const RegisterStudentFormData = useSelector(
    (state) => state.RegisterStudent.registerFormData
  );
  console.log("Register student form data", RegisterStudentFormData);
  const SubmissionStatus = useSelector(
    (state) => state.RegisterStudent.submissionStatus
  );
  //post register data
  useEffect(() => {
    if (RegisterStudentFormData != "") {
      PostFormData(RegisterStudentFormData);
      //dispatch(setRegisterStudentData(""));
    }
  }, [RegisterStudentFormData]);

  //getContext on page load
  useEffect(() => {
    GetContext();
  }, []);

  //getContext method
  const GetContext = async () => {
    const Request = new ContextRequest("/api/register/registerStudent");
    let data;
    data = await Request.get();
    if ((await data.status) == 200) {
      dispatch(setData(data.data));
      dispatch(setDataArrived(true));
    } else {
      dispatch(setDataArrived(false));
    }
  };

  //postFormData method

  const PostFormData = (data) => {
    const PostRequest = new ContextRequest(
      "/api/register/registerStudent",
      data
    );
    //post the data
    PostRequest.postFormData()
      .then((res) => {
        console.log("checking what is inside the res", res);
        
        //if there is an error the response object will be returned
        //submission status.
        if(res?.response){
          //when there is an error.
          console.log("There was an error", res.response);
          dispatch(
            setSubmissionStatus({
              ...SubmissionStatus,
              ["data"]: res.response?.data ?? "There was and error",
              ["ok"]: false,
              ["submitted"]: true,
            })
          );
        }else if (res.status == 200 || res.status==201){
          console.log("successful request");
          dispatch(
            setSubmissionStatus({
              ...SubmissionStatus,
              ["data"]: res.data,
              ["ok"]: true,
              ["submitted"]: true,
            })
          );

        } else {
          console.log("oops something happend");
          dispatch(
            setSubmissionStatus({
              ...SubmissionStatus,
              ['data']: "Something went wrong",
              ['ok']: false,
              ['submitted']: true,
            })
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return <>{!DataArrived ? <ContextLoading /> : <Forms />}</>;
};

export default Context;
