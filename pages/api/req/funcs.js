import axios from "axios";
import cookie from "cookie";

//base request for all
class Req {
  constructor(accessToken, refreshToken, url, body, res) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.res = res;
    this.postConfig = {
      headers: {
        accept: "application/json",
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
    // refresh response
    this.refreshResponse = {
      status: "",
      data: "",
      res: this.res,
    };

    // verify response
    this.verifyResponse = {
      status: "",
      data: "",
      res: this.res,
    };

    //post response
    this.postResponse = {
      status: "",
      data: "",
      res: this.res,
    };

    //get response
    this.getResponse = {
      status: "",
      data: "",
      res: this.res,
    };

    //put response
    this.putResponse = {
      status: "",
      data: "",
      res: this.res,
    };

    const UnknownResponseObj = {
      data: "Unknown Error",
      status: 500,
      res: this.res,
    };
    const UnauthorizedResponseObj = {
      data: "Unauthorized",
      status: 401,
      res: this.res,
    };
    this.getUnknownResponseObj = () => UnknownResponseObj;
    this.getUnauthorizedResponseObj = () => UnauthorizedResponseObj;
  }

  async verify() {
    //console.log({ UnknownResponseObj: this.getUnknownResponseObj() });
    const RefreshCallback = "verify";
    if (!this.refreshToken)
      return (this.verifyResponse = this.getUnauthorizedResponseObj());
    if (!this.accessToken) return await this._refreshAccess(RefreshCallback);
    try {
      const response = await axios.post(
        process.env.Backend + "/verify_token/",
        { token: this.accessToken },
        this.postConfig
      );
      this.verifyResponse = {
        res: this.res,
        data: response.data,
        status: response.status,
      };
      return this.verifyResponse;
    } catch (err) {
      return await this._tryFixResponseError(err, RefreshCallback);
    }
  }

  //refresh request
  async refresh() {
    /*
     * this method will automatically refresh the access token
     * and set the http_only cookie the the res object passed during
     * the creation of the instance object.
     *
     * the whole response object is return atlong last.
     *
     * this is refresh method so there is no need to check for
     * the existence of access token.
     */
    if (this.refreshToken) {
      // when the refresh token exist
      try {
        const RefreshRes = await axios.post(
          process.env.Backend + "/refresh_token/",
          {
            refresh: this.refreshToken,
          }
        ); // the request.

        this.accessToken = RefreshRes.data.access;
        const _res = this.setCookie(this.res); // set access cookie from the res obj
        this.res = _res;
        this.refreshResponse.status = RefreshRes.status;
        this.refreshResponse.data = RefreshRes.data;
        this.refreshResponse.res = this.res;
        console.log("breakPoint refresh");
        return this.refreshResponse;
      } catch (err) {
        if (await err.response) {
          //when the response object exit inside the response object.
          // Logout is adviced
          this.refreshResponse.status = err.response.status;
          this.refreshResponse.data = err.response.data;
          this.refreshResponse.res = this.res;
        } else {
          //when there is no response object inside the error object.
          // Logout is adviced
          console.log({ err });
          this.refreshResponse.status = 500;
          this.refreshResponse.data = "Unknown Error occurred";
          this.refreshResponse.res = this.res;
        }
      }
    } else {
      // when the refreshToken dosent exist
      this.refreshResponse.status = 401;
      this.refreshResponse.data = "Unauthorized";
      this.refreshResponse.res = this.res;
    }
  }

  // post request.
  async post() {
    const RefreshCallback = "post";
    if (!this.refreshToken)
      return (this.postResponse = this.getUnauthorizedResponseObj());

    if (!this.accessToken) return await this._refreshAccess(RefreshCallback);

    try {
      const PostRes = await axios.post(
        process.env.Backend + this.url,
        this.body,
        this.postConfig
      );
      this.postResponse.status = PostRes.status;
      this.postResponse.data = PostRes.data;
      this.postResponse.res = this.res;
      return this.postResponse;
    } catch (error) {
      return await this._tryFixResponseError(error, RefreshCallback);
    }
  }

  // get request
  async get() {
    const RefreshCallback = "get";
    if (!this.refreshToken)
      return (this.getResponse = this.getUnauthorizedResponseObj());
    if (!this.accessToken) return await this._refreshAccess(RefreshCallback);

    try {
      const response = await axios.get(
        process.env.Backend + this.url,
        this.getConfig
      );
      this.getResponse = {
        data: response.data,
        status: response.status,
        res: this.res,
      };
      return this.getResponse;
    } catch (err) {
      return await this._tryFixResponseError(err, RefreshCallback);
    }
  }

  async put() {
    const RefreshCallback = "put";
    if (!this.accessToken) return await this._refreshAccess(RefreshCallback);
    if (!this.refreshToken)
      return (this.putResponse = this.getUnauthorizedResponseObj());

    try {
      const PutResponse = await axios.put(
        process.env.Backend + this.url,
        this.body,
        this.putConfig
      );
      this.putResponse = {
        data: PutResponse.data,
        status: PutResponse.status,
        res: this.res,
      };
      return this.putResponse;
    } catch (err) {
      return await this._tryFixResponseError(err, RefreshCallback);
    }
  }

  /*
   * Delete Request.
   * This is practically a get request.
   * 
   */
  delete = async ()=>{
   return await this.get();
  };

  //set the access cookie with the instance's access token
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

  /*
   * this method is used by other methods
   * of this class to solve a response error
   */
  _tryFixResponseError = async (error, prop) => {
    const Prop = prop ?? "";
    //when there is a response object inside the error
    console.log("Trying to fix response error");
    if (!error.response) return this.getUnknownResponseObj();
    const { response } = error;
    if (!response.status == 401)
      return { status: response.status, data: response.data, res: this.res };
    this._refreshAccess(Prop);
  };

  /*
   * this method is for refreshing when there is no
   * access token
   */
  _refreshAccess = async (prop) => {
    const Prop = prop ?? "";
    const RefreshResponse = await this.refresh();
    console.log("breakPoint at _refreshAccess");
    if (RefreshResponse.status == 200) {
      switch (prop.toLowerCase()) {
        case "verify":
          return await this.verify();
          break;
        case "post":
          return await this.post();
          break;
        case "get":
          return await this.get();
          break;
        case "put":
          return await this.put();
          break;
        default:
          return await this.verify();
          break;
      }
    } else return this.getUnknownResponseObj();
  };
} //end of req class



//RefreshToken method
const RefreshToken = async (req, res, access, refresh, callback) => {
  const { Req } = require("../req/funcs");
  const RefreshRequest = new Req(access, refresh, "", "", res);
  const RefreshResponse = await RefreshRequest.refresh();
  if (RefreshResponse.status == 200) {
    console.log("succesful refresh", RefreshResponse.data.access);
    Globals.newAccess = RefreshResponse.data.access;
    const _res = RefreshResponse.data?.res ?? res;
    res = _res;
    callback(req, res);
    return;
  } else res.status(500).json("Failed to refresh");
};

const _Response = (res, status, data, consoleData) => {
  let _console = consoleData ?? "";
  _console.constructor == Array
    ? _console.forEach((value) => console.log(value))
    : console.log(_console);

  res.status(status).json(data);
};


export { RefreshToken, Req, _Response };
