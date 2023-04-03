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
import { useState, useEffect, useLayoutEffect, useRef } from "react";
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
//import { useRouter } from "next/router";
import Loading from "./loading";
import AuthContext from "../globals/authContext";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const [Load, setLoad] = useState(true);
  const isMobile = useMediaQuery("(max-width:700px)");
  const [showMenu, setShowMenu] = useState(false);
  const mTheme = createTheme({
    palette: {
      type: "light",
    },
  });
  const Classes = useStyles();
  //show menu on mobile
  useEffect(() => {
    if (isMobile) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [isMobile]);

  //loading animation stop.
  useEffect(() => {
    setLoad(true);
    const timeoutCallb = ()=>setLoad(false);
    setTimeout(timeoutCallb, 2000);
    return ()=>{clearTimeout(timeoutCallb)};
  }, []); //end of useEffect.

  const sidebarRef = useRef();
  console.log({sidebarRef});

  return (
    <>
      <AuthContext/>
      {Load ? (
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
                      onClick={() => sidebarRef.current.toggleSidebar()}
                    >
                      <MenuIcon color="inherit" />
                    </IconButton>
                  </div>
                ) : (
                  ""
                )}
                <Typography variant={isMobile ? "h6" : "h3"} className="flex-1">
                  Appollo-admin
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
              <SideBar ref={sidebarRef} />
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
