import Axios from "axios";
import { Req, _Response } from "./funcs";
import cookie from "cookie";

export default async (req, res) => {
  const Cookie = cookie.parse(req.headers.cookie);
  const { access, refresh } = Cookie;
  const studentUrl = "/student/";
  const staffUrl = "/staff/basic/";
  if (req.method == "GET") {
    // Getting student data staff data.
    console.log("[Getting Staff basic data] ....");
    console.log("[Getting Student basic data] ....");
    const StaffRequest = new Req(access, refresh, staffUrl);
    const StaffResponse = await StaffRequest.get();
    if (StaffResponse.status == 200) {
      console.log("[Getting Staff basic data] Ok");
      const StudentRequest = new Req(access, refresh, studentUrl);
      // when the staff request is complete get student data
      const StudentResponse = await StudentRequest.get();
      //response
      let data = {
        consoleData:
          StudentResponse.status == 200
            ? "[Getting Student basic data] Ok"
            : "[Getting Student basic data] Failed",
        res: res,
        data:
          StudentResponse.status == 200
            ? {
                basicStaffData: StaffResponse.data,
                basicStudentData: StudentResponse.data,
              }
            : "Internal server err",
        status: StudentResponse.status ?? 500,
      };
      _Response(data.res, data.status, data.data, data.consoleData);
    } else {
      let data = {
        console: [
          "[Getting Staff basic data] Failed",
          "[Getting Student basic data] Failed",
        ],
        res: res,
        data: StaffResponse.data ?? "Internal server err",
        status: StaffResponse.status ?? 500,
      };
      _Response(data.res, data.status, data.data, data.console);
    }
  }
};
