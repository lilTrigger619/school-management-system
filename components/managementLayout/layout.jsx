import {
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
import PersonIcon from "@material-ui/icons/Person";
import { AccountIcon } from "@material-ui/icons";
import SideBar from "./sideBar";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
    const isMobile = useMediaQuery("(max-width:700px)");
    const [showMenu, setShowMenu] = useState(false);
    const mTheme = createTheme({
        palette: {
            type: "light",
        },
    });
    const Classes = useStyles();

    useEffect(() => {
        if (isMobile) {
            () => setShowMenu(false);
        } else {
            () => setShowMenu(true);
        }

        console.log(isMobile);
    }, {});

    return (
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
                        <Typography
                            variant={isMobile ? "h6" : "h3"}
                            className="flex-1"
                        >
                            Management
                        </Typography>
                        <IconButton color="inherit">
                            <PersonIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={Classes.appbarMargin} />

                <div>
                    <SideBar show={isMobile ? showMenu : true} />
                </div>

                <div className={`${isMobile ? "ml-9" : "ml-40"}`}>
                    <Container maxWidth="lg">
                        <div>{children}</div>
                    </Container>
                </div>
            </ThemeProvider>
        </div>
    );
}
