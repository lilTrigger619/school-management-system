import cookie from "cookie";
import Axios from "axios";

export default async (req, res) => {
  if (req.method == "GET") {
    try {
      res.setHeader("Set-Cookie", [
        cookie.serialize("access", "", {
          expire: new Date(0),
          httpOnly: true,
          sameSite: "strict",
          path: "/",
          secure: process.env.NODE_ENV !== "development",
        }),
        cookie.serialize("refresh", "", {
          expire: new Date(0),
          sameSite: "strict",
          httpOnly: true,
          path: "/",
          secure: process.env.NODE_ENV !== "development",
        }),
      ]);
      res.status(200).json("logged out");
    } catch (err) {
      res.status(500).json({ message: "something went wrong", error: err });
    }
  }
};
