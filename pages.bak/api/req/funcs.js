import Axios from 'axios';

//base request for all requests.
const Request = async ({accessToken, url}) => {
	console.log('[Getting All Staff Data] ...');
  const Config = {headers:{
    Authorization: 'Bearer '+accessToken,
  }}
  let Response;
  try{
    const Url = process.env.Backend +url;
    const ApiRes = await Axios.get(Url,Config);
    Response = await ApiRes;
		console.log('[Getting All Staff Data] Ok');
  }catch(err){
    Response = err;
  }
  return Response; };

//RefreshToken method
const RefreshToken = async (cookie, req, res,  Refresh,  Callback, data) => {
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
		console.log('	[Getting new access Token] ...');
    let Response;
    const ApiRes = await Axios.post(RefreshUrl, Body, RefreshConfig);
    //checking if response from refresh token reques
    //is ok.
    const Status = await ApiRes.status;
    if(await Status == 200) {
			console.log('	[Getting new access Token] Ok');
      const NewAccess = ApiRes.data.access;
			console.log('	[Setting access Token as Cookie] ...');
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
      //the callback function will be the Verify_token function
      //This is called after a new verify token is set by the
      //Refresh_token function.
			const Data = {
				accessToken: NewAccess,
				url: data.url,
			};
			console.log('[Refreshing status] Ok');
      Callback ? Response= await Callback(Data) : "";
    } else {
      //when the resfresh response is not ok.
      //This should probably send the user to
      //the login screen
      Response = 'Logout'
    }
  } catch (err) {
    //when for some reson the refresh token request is not
    //made from the frontend.
    //This should also send the user back to the login
    //screen
    console.log('refresh error', err);
    Response = err;
  }
  return { Response, res}	

};

export { Request,RefreshToken };
