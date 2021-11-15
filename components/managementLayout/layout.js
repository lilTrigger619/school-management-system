import {
    Typography,
    AppBar,
    Toolbar,
    Drawer,
    CssBaseline,
    createMuiTheme,
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
import {AccountIcon} from '@material-ui/icons';
import SideBar from "./sideBar";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
    const isMobile = useMediaQuery("(max-width:700px)");
    const [showMenu, setShowMenu] = useState();
    const mTheme = createMuiTheme({
        palette: {
            type: "light",
        },
    });
    const Classes = useStyles();

    useEffect(() => {
        if (isMobile) {
            ()=>setShowMenu(false);
        } else {
            ()=>setShowMenu(true);
        }

        console.log(isMobile);
    }, {});

    return (
        <div  className={` w-full bg-gray-200`}>
            <ThemeProvider theme={mTheme}>
                <CssBaseline />
                <AppBar className={Classes.aboveDrawer} position="fixed"
                >
                    <Toolbar>
                        {isMobile ? (
                            <div className="-ml-2 mr-3">
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
                        <Typography variant="h3" className="flex-1">
                            Management
                        </Typography>
                        <IconButton color="inherit">
                            <PersonIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={Classes.appbarMargin} />
                <Grid container>
                    <Grid item xs={2}>
                        <SideBar show={isMobile? showMenu: true} />
                    </Grid>
                    <Grid item xs={10}>
                    <div>
                        <Container maxWidth="lg" className="bg-red-10">
                            <div>{children}</div>
                        </Container>
                    </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}
