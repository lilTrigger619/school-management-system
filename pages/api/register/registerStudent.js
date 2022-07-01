import Axios from 'axios';
import cookie from 'cookie';
import {Req, _Response} from '../req/funcs';  

export default async function  handler(req, res){
  const cookies = cookie.parse(req.headers.cookie);
  const Access = cookies.access ?? "";
  const Refresh = cookies.refresh ?? "";

  if(Refresh){
    // if the refresh token exist.
    if(req.method=="GET" && Access){
      //get
      console.log("Access cookies exist and request method is get");
      const Request =new Req(Access, Refresh, "/student/");
      const RequestResponse = await Request.get();
      console.log("you hit register student");
      _Response(res, RequestResponse.status, RequestResponse.data);
    };

    if(req.method=="Post" && Access){
      //post

    };
  }else{
    res.status(404).json("Unauthorized");
  };
};
