import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setStaffTable, setStudentTable, setUser, setDataArrived} from "./dashboardSlice";
import { useEffect } from "react";
import Loader from "./loader";

const Context = ({ children }) => {
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
  const dispatch = useDispatch();

  const request = async () => {
    let _data = "";
    try {
      const url = "api/req/dashboard";
      _data = await Axios.get(url);
    } catch (err) {
      console.log(err.response);
      _data = await err.response;
    }
    return await _data;
  };

  //when Authentication is complete;
  useEffect(async () => {
    if (isAuthenticated) {
      const res = await request();
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
    } else {
      console.log("[Failed to get context]\n[Reason: Authentication Failed]");
    }
  }, [isAuthenticated]);

  return <>{!dataArrived? <Loader/>:children}</>;
};

export default Context;
