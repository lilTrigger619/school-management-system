import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/",
    "/pending_account",
    "/admin/:path*",
    "/Staff/:path*",
    "/Student/:path*",
  ],
};

const { Backend } = process.env;
export const middleware = async (req) => {
  const cookie = req.headers.get("cookie"); //type map
  const { pathname } = req.nextUrl;
  const { url } = req;
  const LoginPage = new URL("/login", url);
  const AdminPage = new URL("/admin", url);
  const StaffPage = new URL("/Staff", url);
  const StudentPage = new URL("/Student", url);
  const PendingUserPage = new URL("/pending_account", url);
  if (!cookie) return NextResponse.redirect(LoginPage);
  const HttpCookieHandler = require("cookie");
  const { access, refresh } = HttpCookieHandler.parse(cookie);

  //try verify
  let verifyResponse = {};
  const ValidResponse = NextResponse.next();
  try {
    const Vresponse = await VerifyOrRefresh({ access, refresh });
    if (Vresponse.status != 200) return NextResponse.redirect(LoginPage);
    verifyResponse = Vresponse;
    //console.log({ verifyResponse });
  } catch (error) {
    console.log("there was an error while trying to verify.", { error });
    return NextResponse.redirect(LoginPage);
  } // end of try catch block.

  //try get user type for routing.
  let RouteResponse = "";
  try {
    let accessToken = access;
    if (verifyResponse.refresh) accessToken = verifyResponse.access; //when the token was refreshed
    //console.log({ accessToken });
    //ValidResponse = SetAccessCookie({ access: accessToken, response: ValidResponse, }); //set new access token in headers.
    //console.log("refreshed", { Response });
    const userData = await GetUserType({ access: accessToken });
    if (userData.is_admin) {
      let response = req.nextUrl.pathname.startsWith("/admin")
        ? NextResponse.next()
        : NextResponse.redirect(AdminPage);
      RouteResponse = SetAccessCookie({ access: accessToken, response });
      return RouteResponse;
    } else if (userData.is_student) {
      let response = req.nextUrl.pathname.startsWith("/Student")
        ? NextResponse.next()
        : NextResponse.redirect(StudentPage);
      RouteResponse = SetAccessCookie({ access: accessToken, response });
      return RouteResponse;
    } else if (userData.is_staff) {
      //console.log("the user is staff", userData.isStaff);
      let response = req.nextUrl.pathname.startsWith("/Staff")
        ? NextResponse.next()
        : NextResponse.redirect(StaffPage);
      RouteResponse = SetAccessCookie({ access: accessToken, response });
      return RouteResponse;
    } else {
      console.log("pending", userData);
      let response = req.nextUrl.pathname.startsWith("/pending_account")
        ? NextResponse.next()
        : NextResponse.redirect(PendingUserPage);
      RouteResponse = SetAccessCookie({ access: accessToken, response });
      return RouteResponse;
    }
    //NextResponse.next();
    //console.log("right before return", { RouteResponse });
    //return RouteResponse; // with new access cookie
  } catch (error) {
    console.log("there was an error", { error });
    throw error;
    return NextResponse.redirect(LoginPage);
  } //end of try catch block.
}; //end of middleware function.

//make verification or refresh.
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
            return refreshResponse.json();
          } else {
            return reject({ status: refreshResponse.status, refresh: false });
          }
        }) //end of .then block
        .then((body) => {
          const { access } = body;
          if (access) return resolve({ status: 200, refresh: true, access });
        })
        .catch((error) => {
          throw error;
          return reject({ status: 500, refresh: false });
        }); //end of .then block
    } //end of if block
    else {
      //when the access token exist
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
                  ? res.json()
                  : reject({ status: res.status, refresh: false })
              )
              .then((refreshBody) => {
                const { access } = refreshBody;
                if (access)
                  return resolve({ status: 200, refresh: true, access });
              })
              .catch((error) => reject({ status: 500, refresh: false }));
          } //end of else if block
        }) //end of .then function.
        .catch((error) => {
          throw error;
          return reject({ status: 500, refresh: false });
        });
    } //end of else block
  }); //end of promise
}; // end of VerifyOrRefresh func.

// function to make request and get type of user.
const GetUserType = ({ access }) => {
  let status = null;
  return new Promise((resolve, reject) => {
    fetch(Backend + "/profile/account_type/", {
      method: "get",
      headers: {
        authorization: "Bearer " + access,
      },
    }) //end fetch function.
      .then((response) => {
        status = response.status;
        return response.json();
      }) // end of the then method
      .then((body) => {
        if (status == 200) return resolve(body);
        return reject("failed to get type");
      }) //end of then method
      .catch((error) => {
        console.log("GetUserType", { error });
        return reject({ error });
      }); //end of catch method.
  });
}; // end of GetUserType.

const SetAccessCookie = ({ access, response }) => {
  const HttpCookieHandler = require("cookie");
  response.headers.set(
    "Set-Cookie",
    HttpCookieHandler.serialize("access", access, {
      maxAge: 60 * 60,
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      path: "/",
      sameSite: "strict",
    })
  );
  return response;
};
