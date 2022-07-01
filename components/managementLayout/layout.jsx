import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Drawer,
  CssBaseline,
  createTheme,
  IconButton,
  Switch,
  ThemeProvider,
  Container,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountIcon } from "@material-ui/icons";
import SideBar from "./sideBar";
import { setSaveUrl } from "./layoutSlice";
import { useState, useEffect, useLayoutEffect } from "react";
import {
  Authenticate,
  de_Authenticate,
  load,
  stop_loading,
  setLogout,
  setVerify,
  setStatus,
} from "../pages/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import Loading from "./loading";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const route = useRouter();
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const SaveUrl = useSelector((state) => state.Layout.saveUrl);
  const isLoading = useSelector((state) => state.Auth.isLoading);
  const verify = useSelector((state) => state.Auth.verify);
  const logout = useSelector((state) => state.Auth.logout);
  const isMobile = useMediaQuery("(max-width:700px)");
  const [showMenu, setShowMenu] = useState(false);
  const [Load, setLoad] = useState(true);
  const mTheme = createTheme({
    palette: {
      type: "light",
    },
  });
  const Classes = useStyles();

  //on logout
  useEffect(() => {
    if (logout) {
      SaveUrl ? cookies.set("url", route.pathname, { expires: 1 / 24 }) : "";
      onLogout();
      dispatch(setSaveUrl(true));
    }
    return dispatch(setLogout(false));
  }, [logout]);

  //show menu on mobile
  useEffect(() => {
    if (isMobile) {
      () => setShowMenu(false);
    } else {
      () => setShowMenu(true);
    }
  }, [isMobile]);

  //on page load
  useLayoutEffect(() => {
    onLoad();
  }, []);

  //request for verification
  useEffect(() => {
    verify ? onLoad() : "";
    return dispatch(setVerify(false));
  }, [verify]); //

  //loading animation stop.
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      console.log("stop loading");
    }, 2000);
  }, []);

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

      const Status = await ApiRes.status;
      const SText = await ApiRes.statusText;
      if (Status == 200 && SText == "OK") {
        dispatch(Authenticate());
        dispatch(setStatus("ok"));
        const cookie = cookies.get("url") ?? "";
        cookies.remove("url");
        if (cookie != "" || cookie != undefined || cookie != "undefined") {
          console.log("cookie", cookie);
          route.push(cookie);
        }
      } else {
        dispatch(setLogout(true));
      }
    } catch (error) {
      console.log("layout request error", error);
      const ApiError = await error;
      dispatch(load());
      dispatch(setLogout(true));
    }
  };

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
  };

  return (
    <>
      {!isAuthenticated ? (
        ""
      ) : Load ? (
        <Loading />
      ) : (
        <div className={` w-full bg-gray-200`}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <ThemeProvider theme={mTheme}>
            <CssBaseline />
            <AppBar className={Classes.aboveDrawer} position="fixed">
              <Toolbar>
                {isMobile ? (
                  <div className="-ml-6 mr-1">
                    <IconButton
                      color="inherit"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <MenuIcon color="inherit" />
                    </IconButton>
                  </div>
                ) : (
                  ""
                )}
                <Typography variant={isMobile ? "h6" : "h3"} className="flex-1">
                  Management
                </Typography>
                {/**<IconButton color="inherit">**/}
                <Button
                  color="inherit"
                  onClick={
                    //onLogout
                    () => {
                      dispatch(setLogout(true));
                      dispatch(setSaveUrl(false));
                    }
                  }
                >
                  Exit
                </Button>
                {/**</IconButton>**/}
              </Toolbar>
            </AppBar>
            <div className={Classes.appbarMargin} />

            <div>
              <SideBar show={isMobile ? showMenu : true} />
            </div>

            <div className={`${isMobile ? "ml-9" : "ml-40"}`}>
              <Container maxWidth="md">
                <div style={ContentStyle}>
                  {children}
                </div>
              </Container>
            </div>
          </ThemeProvider>
        </div>
      )}
    </>
  );
}

const ContentStyle = {
  minHeight: "100vh",
};

export function getServerSideProps({ req, res }) {
  //i will come back
  console.log("Res and response from the layout component", req);
  return { props: { data: { hello: "hs" } } };
}
