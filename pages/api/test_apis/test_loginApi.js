import cookie from "cookie";

export default async function TestHandler(req, res){
  //if(req.method != "POST") return res.status(500).json("Invalid method");

  try{
    const Body = {
      username : "escobar619",
      password : "hidden",
    };
    const {Req} = require("../req/funcs");
    const LoginRequest = new Req('fake', 'fake', "/login/", Body, res);
    const LoginResponse = await LoginRequest.post();
    res.setHeader( 'Set-Cookie', [cookie.serialize(
      "access", LoginResponse.data.access, {
        maxAge : 60 * 60,
        sameSite : "strict",
        secure : false,
        httpOnly : true,
        path : "/",
      }
    ),
      cookie.serialize("refresh", LoginResponse.data.refresh, {
        maxAge : 60 * 60,
        sameSite: "strict",
        path : "/",
        httpOnly : true,
        secure : false,
      })
    ]);
    res.status(LoginResponse.status).json(LoginResponse.data);
  }catch(err){
    console.log(err);
    res.status(err.response?.status ?? 500).json(err.response?.data ?? "Failed to make requeset");
  };
}
