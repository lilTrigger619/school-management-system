import Http_cookie_handler from "cookie";

export default async function Handler (req, res){
  const {headers} = req;
  const { cookie } = req.headers;
  if (!cookie) return res.status(401).json("no cookie");
  const AllCookies = Http_cookie_handler.parse(cookie);
  let {access, refresh} = AllCookies;
  const Access = access ?? "";
  console.log({req})

  try{
    const {Req} = require("../req/funcs");
    const  GetMiniUser = new Req(Access, refresh, "/profile/mini_user/", "", res);
    const _miniUserResponse = await GetMiniUser.get();
    return res.status(_miniUserResponse.status).json(_miniUserResponse.data);
  }catch(error){
    throw error;
    return res.status(500).json({"message":"local server error"})
  }

}
