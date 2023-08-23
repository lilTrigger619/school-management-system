import HTTP_COOKIE from "cookie";

export default async function AuthHandler (req, res){
  const {headers} = req;
  const { cookie } = req.headers;
  if (!cookie) return res.status(401).json("no cookie");
  const AllCookies = HTTP_COOKIE.parse(cookie);
  let {access} = AllCookies;
  const {refresh} = AllCookies;
  const Access = access ?? "";

  try {
    const { Req } = require("./req/funcs");
    const VerifyRequest = new Req(Access, refresh, "", "", res);
    const VerifyResponse = await VerifyRequest.verify();
    return res.status(VerifyResponse.status).json(VerifyResponse.data);
  } catch (err) {
    throw err;
  }
};
