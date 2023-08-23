import cookie from "cookie";
import axios from "axios";

export default async (req, res) => {
  const cookies = cookie.parse(req.headers.cookie);
  const Access = cookies.access ?? "";
  const Refresh = cookies.refresh ?? "";

  if (Refresh) {
    //when refresh token exist in the headers cookie

    if (req.method == "GET" && Access) {
      //when request method is post and access token
      //resides in the headers cookie.
			console.log('[Authenticating] ...');
      const FuncRes = await VerifyToken(req, res, Access);
			FuncRes == "Error"
        ? RefreshToken(cookie, req, res, Refresh, Access, VerifyToken)
        : "ok";
    } else {
      RefreshToken(cookie, req, res, Refresh, Access, VerifyToken);
    }
  } else {
    //refresh token dosent exist in the header cookie
    //or has expired
    //This should send the user back to the login screen
    res.status(500).json("unauthorized");
  }
};

//this function would be run when the token in the
//verify cookies has expire
const RefreshToken = async (cookie, req, res, Refresh, Access, Callback) => {
  const RefreshConfig = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const RefreshUrl = process.env.Backend + "/refresh_token/";
  const RefreshBody = Refresh ?? "";
	console.log('[Refresh Token] Ok');
	const Body = {refresh:Refresh};
	console.log('[Refreshing status] ...');
  try {
		console.log('[Getting new access Token] ...');
    const ApiRes = await axios.post(RefreshUrl, Body, RefreshConfig);
    //checking if response from refresh token reques
    //is ok.
    const Status = await ApiRes.status;
    if(await Status == 200) {
			console.log('[Getting new access Token] Ok');
      const NewAccess = ApiRes.data.access;
			console.log('[Setting access Token as Cookie] ...');
      res.setHeader(
        "Set-Cookie",
					cookie.serialize('access',NewAccess, {
          maxAge: 60 * 60,
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          path: "/",
          sameSite: "strict",
        })
      );
			console.log('[Setting access Token as Cookie] Ok');
      //the callback function will be the Verify_token function
      //This is called after a new verify token is set by the
      //Refresh_token function.
      console.log('[Refreshing Status] Ok');
      Callback ? Callback(req, res, NewAccess) : "";
    } else {
      //when the resfresh response is not ok.
      //This should probably send the user to
      //the login screen
      res.status(500).json("unauthorized");
    }
  } catch (err) {
    //when for some reson the refresh token request is not
    //made from the frontend.
    //This should also send the user back to the login
    //screen
		console.log('refresh error', err);
    res.status(500).json("unauthorized");
  }
};

//this funciton would run when the Access Token and
//refresh token is available in an http cookie.
const VerifyToken = async (req, res, Access) => {
  let Response = "";
	let Status = "";
  const Url = process.env.Backend + "/verify_token/";
  const Body = { token: Access };
  const Config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    const ApiResponse = await axios.post(Url, Body, Config);
		Status = ApiResponse.status;
		if(ApiResponse.status==200){
			console.log('[Authenticating] Ok');
			console.log('[Authenticated]');
			res.status(ApiResponse.status).json(ApiResponse.data)
		}else{
			console.log("[Authenticating] Failed]");
		}
  } catch (err) {
    const ApiError = await err;
		console.log("[Authenticating] Failed]");
    console.log("[Token expired]\n[Refreshing access Token] ...");
		ApiError.response.data.detail == 'Token is invalid or expired'?
			Response='Error'
			:
    res
      .status(ApiError.response.status ? ApiError.response.status : 500)
      .json(ApiError.response.data ? ApiError.response.data : "unauthorized");
  }
  Status == 200 ? (Response = "Ok") : (Response = "Error");
  return Response;
};
