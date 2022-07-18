import cookie from "cookie";
import axios from "axios";
import { Req } from "./req/funcs";

export default async (req, res) => {
  const cookies = cookie.parse(req.headers.cookie);
  const Access = cookies.access ?? "";
  const Refresh = cookies.refresh ?? "";
  if (Refresh) {
    //when refresh token exist in the headers cookie

    if (req.method == "GET" && Access) {
      //when request method is post and access token
      //resides in the headers cookie.

      const Request = new Req(Access, Refresh);
      let response = await Request.verify();

      if (response.status == 200) {
        res.status(response.status).json(response.data);
      } else {
        let refreshRes = await Request.refresh();
        if (refreshRes.status != 200) {
          res.status(500).json("Unauthorized");
        } else {
          // setting new access token to the instance
          Request.setAccessToken(refreshRes.data.access);
          // setting the httpOnly cookie by passing res to
          // the instance's method.
          const Res = await Request.setCookie(res);
          res = Res;
          const VerifyResponse = await Request.verify();
          res.status(VerifyResponse.status).json(VerifyResponse.data);
        }
      }
    } else {
      //Refresh Token exist BUT Access token dosent
      //exist.
      console.log("no access token");
      const Request = new Req("", Refresh);
      const RefreshRes = await Request.refresh();
      if (RefreshRes.status == 200) {
        Request.setAccessToken(RefreshRes.data.access);
        const Res = Request.setCookie(res);
        res = Res;
        const verifyResponse = await Request.verify();
        verifyResponse.status == 200
          ? res.status(verifyResponse.status).json(verifyResponse.data)
          : res.status(401).json("Unauthorized");
      } else {
        res.status(401).json("Unauthorized");
      }
    }
  } else {
    //refresh token dosent exist in the header cookie
    //or has expired
    //This should send the user back to the login screen
    console.log("No refresh Token LOGOUT NOW!");
    res.status(401).json("Unauthorized");
  }
};
