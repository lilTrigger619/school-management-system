import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setStaffTable,
  setStudentTable,
  setUser,
  setDataArrived,
} from "./dashboardSlice";
import { useEffect, useState } from "react";
import Loader from "./loader";

const Context = ({ children }) => {
  const [contextDone, setContextDone]= useState(false);
  const staffTableData = useSelector(
    (state) => state.DashboardData.tableData.staffTable
  );
  const studentTableData = useSelector(
    (state) => state.DashboardData.tableData.studentTable
  );
  const user = useSelector((state) => state.DashboardData.user);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const isLoading = useSelector((state) => state.Auth.isAuthenticated);
  const dataArrived = useSelector((state) => state.DashboardData.dataArrived);
  console.log({dataArrived}, "from context comp");
  const dispatch = useDispatch();

  const request = async () => {
    try {
      const url = "api/req/dashboard";
      const res = await Axios.get(url);
      if (res.status == 200) {
        dispatch(setStaffTable(res.data.basicStaffData.data));
        dispatch(setStudentTable(res.data.basicStudentData));
        dispatch(setUser(res.data.basicStaffData.user));
        dispatch(setDataArrived(true));
      } else {
        //log the user out if response's status is not 200;
        // else the page will just keep loading.
        console.log("[Data was not recieved]", res);
      }
    } catch (err) {
      console.log(err.response ?? err, "when getting data");
    }
  };

  //when Authentication is complete;
  useEffect(() => {
    if (isAuthenticated) request();
  }, [isAuthenticated]); //end of useEffect

  //when the data is arrived.
  useEffect(()=>{
    setContextDone(dataArrived);
    console.log("is context done", dataArrived)
  },[dataArrived]); //end of useEffect.

  return <>{!contextDone ? <Loader /> : children}</>;
};

export default Context;
