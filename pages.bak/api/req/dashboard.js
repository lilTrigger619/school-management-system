import Axios from "axios";
import { Request, RefreshToken } from "./funcs";
import cookie from "cookie";

export default async (req, res) => {
  const TheRequest = req;
  //the access cookie to make the user request.
  const Cookie = cookie.parse(req.headers.cookie);
  console.log("[Preparing Access Token] ...");
  const { access, refresh } = Cookie;
  console.log("[Preparing Access Token] Ok");
  if (req.method == "POST") {
    if (req.body["Data"] == "getAllStaff") {
      const Data = {
        accessToken: access,
        url: "/staff/basic/",
      };
      const ApiRes = await Request(Data);
      if (ApiRes.status == 200) {
        const { data } = await ApiRes;
        console.log("[Sending Data to client] ...");
        res.status(ApiRes.status).json(data);
        console.log("[Sending Data to client] Ok");
      } else {
        console.log("[Getting All Staff Data] Error");
        const RefreshRes = await RefreshToken(
          cookie,
          req,
          res,
          refresh,
          Request,
          Data
        );
        res = await RefreshRes.res;
        if (RefreshRes.Response.status == 200) {
          res.status(status).json(data);
        } else {
          res.status(500).json("Logout");
        }
      }
    }
  }
};
