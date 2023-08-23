import Axios from "axios";
import { Req, Response } from "../req/funcs";
import cookie from "cookie";

export default async function Handler() {
  const cookies = cookie.parse(req.headers.cookie);
  const { access, refresh } = cookies;
  if (req.method == "GET") {
    const Request = new Req(access, refresh, "/student/");
    const Res = await Request.get();
    Res.status == 200
      ? Response(res, Res.status, Res.data)
      : Response(res, Res.status, Res.data);
  }
}
