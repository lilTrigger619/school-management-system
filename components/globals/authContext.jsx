import axios from "axios";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  Authenticate,
  de_Authenticate,
  load,
  stop_loading,
  setLogout,
  setVerify,
  setStatus,
} from "../pages/login/loginSlice";
import {useRouter} from "next/router";

const AuthContext =()=>{
  const dispatch = useDispatch();
  const route = useRouter();
  const logout = useSelector((state) => state.Auth.logout);
  const verify = useSelector((state) => state.Auth.verify);
  const isLoading = useSelector((state) => state.Auth.isLoading);
  const SaveUrl = useSelector((state) => state.Layout.saveUrl);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  
  //on page load
  useEffect(() => {
    onLoad();
  }, []); //end of useEffect hook.

  //request for verification
  useEffect(() => {
    verify ? onLoad() : "";
     dispatch(setVerify(false));
  }, [verify]); // end of useEffect hook.

  //on logout
  useEffect(() => {
    if (logout) {
      //SaveUrl ? cookies.set("url", route.pathname, { expires: 1 / 24 }) : "";
      onLogout();
      //dispatch(setSaveUrl(true));
    }
    return()=>{dispatch(setLogout(false))} ;
  }, [logout]); //end of useEffect hook.

  //onload method
  const onLoad = async () => {
    //checking for authentication
    try {
      const Config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const ApiRes = await axios.get("/api/auth", Config);
      //change Authenticate to true when the response is ok
      console.log(ApiRes);
      const Status = await ApiRes.status;
      const SText = await ApiRes.statusText;
      if (Status == 200 && SText == "OK") {
        dispatch(Authenticate());
        dispatch(setStatus("ok"));
        /*
        const cookie = cookies.get("url") ?? "";
        cookies.remove("url");
        if (cookie != "" || cookie != undefined || cookie != "undefined") {
          console.log("cookie", cookie);
          route.push(cookie);
        }
        */
      } else {
        dispatch(setLogout(true));
      }
    } catch (error) {
      console.log("layout request error", error);
      const ApiError = await error;
      dispatch(load());
      dispatch(setLogout(true));
    }
  }; //end of onLoad func.


  //onlogout method
  const onLogout = async () => {
    try {
      const Config = {
        headers: {
          Accept: "application/json",
        },
      };
      const Url = "/api/logout";
      const Apires = await axios.get(Url, Config);
      if (Apires.status == 200) {
        route.push("/login");
      } else {
        route.push("/login");
      }
    } catch (err) {
      console.log("Logout error", err);
      route.push("/login");
    }
  }; //end of onlogout FUnc.

  return(
    <></>
  );
};
export default AuthContext;
