import Axios from "axios";
import cookie from "cookie";
import { Req, _Response } from "../req/funcs";
import FormData from "form-data";

export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie);
  const Access = cookies.access ?? "";
  const Refresh = cookies.refresh ?? "";
  const FormD = new FormData();
  const {body}  = req;
  FormD.append('user', body.user);

  if (Refresh) {
    // if the refresh token exist.
    if (req.method == "GET" && Access) {
      //get
      const Request = new Req(Access, Refresh, "/student/");
      const RequestResponse = await Request.get();
      _Response(res, RequestResponse.status, RequestResponse.data);
    }

    if (req.method == "POST" && Access) {
      //post
      const { body } = req;
      const Request = new Req(
        Access,
        Refresh,
        "/student/create_student/",
        body
      );
      const RequestResponse = await Request.post()
      console.log("Requet response", RequestResponse);
      _Response(res, RequestResponse.status, RequestResponse.data);
    }
  } else {
    res.status(401).json("Unauthorized");
  }
}
