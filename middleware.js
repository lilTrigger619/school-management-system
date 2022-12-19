import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/",
    "/finance/:path*",
    "/instructor/:path*",
    "/quiz/:path*",
    "/register/:path*",
    "/calender",
    "/classes",
    "/repro",
    "/students",
    "/Student/:path*",
  ],
};

const { Backend } = process.env;
export const middleware = async (req) => {
  console.log(process.env);
  const cookie = req.headers.get("cookie"); //type map
  const { pathname } = req.nextUrl;
  const { url } = req;
  console.log(req.nextUrl, { url });
  console.log({ cookie });
  if (!cookie) return NextResponse.rewrite(new URL("/login", url));
  const HttpCookieHandler = require("cookie");
  const { access, refresh } = HttpCookieHandler.parse(cookie);

  try{
    const Vresponse  = await VerifyOrRefresh({access, refresh});
    console.log({Vresponse})
    return NextResponse.next();
  }catch(error){
    console.log({error});
    return NextResponse.rewrite(new URL("/login", url))
  };// end of try catch block.
};

const VerifyOrRefresh = ({ access, refresh }) => {
  return new Promise((resolve, reject) => {
    if (!Boolean(refresh)) return reject({ status: 401, refresh: false });
    if (!Boolean(access)) {
      //when there is no access token
      return fetch(Backend + "/refresh_token/", {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({ refresh }),
      }) //end of fetch request
        .then((refreshResponse) => {
          if (refreshResponse.status == 200) {
            return resolve({status:200, refresh:false})
          } else {
            return reject({ status: refreshResponse.status, refresh: false });
          }
        }) //end of .then block
        .catch((error) => {
          throw error;
          return reject({ status: 500, refresh: false });
        }); //end of .then block
    } //end of if block
    else {
      console.log({access});
      fetch(Backend + "/verify_token/", {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        method: "post",
        body: JSON.stringify({ token: access }),
      }) //end of fetch func.
        .then((rawResponse) => {
          const { status } = rawResponse;
          if (status == 200) return resolve({ status: 200, refresh: false });
          else if (status == 401) {
            // when verify status is unauthtorized try refresh.
            fetch(Backend + "/refresh_token/", {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ refresh }),
            })
              .then((res) =>
                res.status == 200
                  ? resolve({ status: 200, refresh: false })
                  : reject({ status: res.status, refresh: false })
              )
              .catch((error) => reject({ status: 500, refresh: false }));
          }//end of else if block
        }) //end of .then function.
        .catch((error) => {
          throw error;
          return reject({ status: 500, refresh: false });
        });
    } //end of else block
  }); //end of promise
}; // end of VerifyOrRefresh func.
