import ContextRequest from "../../../../utils/context";
import ContextLoading from "../../../globals/loader";
import Forms from "./form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setDataArrived, setData} from "./registerStudentSlice";

const Context = () => {
  const dispatch = useDispatch();
  const DataArrived = useSelector(state=>state.RegisterStudent.dataArrived);
  console.log("data arrived", DataArrived);

  //getContext on page load
  useEffect(() => {
    GetContext();
  }, []);

  //getContext method
  const GetContext = async () => {
    console.log("anonymous function");
    const Request = new ContextRequest("/api/register/registerStudent");
    let data;
    data = await Request.get();
    if(await data.status == 200){
      dispatch(setData(data.data)); 
      dispatch(setDataArrived(true));
    }else{
      dispatch(setDataArrived(false));
    };
  };

  return (
    <>
      {!DataArrived ? <ContextLoading/> : <Forms/> }
    </>
  );
};

export default Context;
