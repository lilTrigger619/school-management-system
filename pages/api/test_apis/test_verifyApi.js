import http_cookie from "cookie";

const Globals = {
  newAccess: "",
};
export default async function TestHandler(req, res) {
  const { cookie } = req.headers;
  if (!cookie) return res.status(401).json("No cookie");
  try {
     const _parsed_cookie = http_cookie.parse(cookie);
     const {refresh} = _parsed_cookie;
     let { access } = _parsed_cookie;
     const Access = access ?? Globals.newAccess;
    // if (!refresh) return res.status(401).json("No cookie");
    // if (!access){
    //   const RefreshToken = require("");
    //  return await RefreshAccessToken(req, res, access, refresh, TestHandler);
    // }
    // const {Req} = require("../req/funcs");
    // const VerifyRequest = new Req(access, refresh, '','', res);
    // const VerifyResponse = await VerifyRequest.verify();
    // console.log({VerifyResponse});
    // res.status(VerifyResponse.status).json(VerifyResponse.data);
    const {Req} = require("../req/funcs");
    const VerifyRequest = new Req(Access, refresh, "", "", res);
    const VerifyResponse = await VerifyRequest.verify();
    return res.status(VerifyResponse.status).json(VerifyResponse.data);
  } catch (err) {
    throw err;
  }
}
