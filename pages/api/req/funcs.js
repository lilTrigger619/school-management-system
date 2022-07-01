import axios from "axios";
import cookie from "cookie";

//base request for all
class Req {
  constructor(accessToken, refreshToken, url, body) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.postConfig = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + this.accessToken,
      },
    };
    this.getConfig = {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + this.accessToken,
      },
    };
    this.url = url;
    this.body = body;
  }

  async verify() {
    let response = { status: "", data: "" };
    try {
      response = await axios.post(process.env.Backend + "/verify_token/", {
        token: this.accessToken,
      });
    } catch (err) {
      response = await err.response;
    }
    return response;
  }

  async refresh() {
    let response = { status: "", data: "" };
    try {
      response = await axios.post(process.env.Backend + "/refresh_token/", {
        refresh: this.refreshToken,
      });
    } catch (err) {
      response = await err.response;
    }
    return response;
  }

  async post() {
    let response = { status: "", data: "" };
    const url = process.env.backend + this.url;
    try {
      response = await axios.post(
        url,
        JSON.stringify(this.body),
        this.postConfig
      );
    } catch (err) {
      response = await err.response;
    }
    return response;
  }

  async get() {
    let response = { status: "", data: "" };
    const url = process.env.Backend + this.url;
    try {
      response = await axios.get(url, this.getConfig);
    } catch (err) {
      response = await err.response;
    }
    return response;
  }

  async put() {
    let response = { status: "", data: "" };
    const url = process.env.Backend + this.url;
    try {
      response = await axios.put(
        url,
        JSON.stringify(this.body),
        this.postConfig
      );
    } catch (err) {
      response = await err.response;
    }
    return response;
  }

  setCookie(res) {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("access", this.accessToken, {
        maxAge: 60 * 60,
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        path: "/",
        sameSite: "strict",
      })
    );
    return res;
  }

  //getters and setters
  setAccessToken(accessToken) {
    return (this.accessToken = accessToken);
  }
  setUrl(url) {
    return (this.url = url);
  }
  setBody(body) {
    return (this.body = body);
  }
}

//base post request for all request.
const PostRequest = async ({ accessToken, url, body }) => {
  const response = {
    ok: null,
    response: "",
  }; // this would be returned at the end of the method
  const Config = {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  try {
    axios
      .post(url, body, config)
      .then((resp) => {
        response.ok = true;
        response.response = resp;
      })
      .catch(({ response }) => {
        response.ok = false;
        response.response = response;
      });
  } catch (err) {
    response.ok = false;
  }

  return response;
};

//base get request for all requests.
const Request = async ({ accessToken, url }) => {
  const Config = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  let Response;
  try {
    const Url = process.env.Backend + url;
    const ApiRes = await axios.get(Url, Config);
    Response = await ApiRes;
  } catch (err) {
    Response = err;
  }
  return Response;
};

//RefreshToken method
const RefreshToken = async (cookie, req, res, Refresh, Callback, data) => {
  const RefreshConfig = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const RefreshUrl = process.env.Backend + "/refresh_token/";
  const RefreshBody = Refresh ?? "";
  console.log("[Refresh Token] Ok");
  const Body = { refresh: Refresh };
  console.log("[Refreshing status] ...");
  try {
    console.log("	[Getting new access Token] ...");
    let Response;
    const ApiRes = await axios.post(RefreshUrl, Body, RefreshConfig);
    //checking if response from refresh token reques
    //is ok.
    const Status = await ApiRes.status;
    if ((await Status) == 200) {
      console.log("	[Getting new access Token] Ok");
      const NewAccess = ApiRes.data.access;
      console.log("	[Setting access Token as Cookie] ...");
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("access", NewAccess, {
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
      console.log("[Refreshing status] Ok");
      Callback ? (Response = await Callback(Data)) : "";
    } else {
      //when the resfresh response is not ok.
      //This should probably send the user to
      //the login screen
      Response = "Logout";
    }
  } catch (err) {
    //when for some reson the refresh token request is not
    //made from the frontend.
    //This should also send the user back to the login
    //screen
    console.log("refresh error", err);
    Response = err;
  }
  return { Response, res };
};

const _Response = ( res, status, data, consoleData ) => {
  let _console = consoleData ?? "";
  _console.constructor == Array
    ? _console.forEach((value) => console.log(value))
    : console.log(_console);

  res.status(status).json(data);
};

export { Request, RefreshToken, Req, _Response };
