import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Link,
  Menu,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { ExitToApp, Person } from "@material-ui/icons";
import NextLink from "next/link";
import { useDispatch } from "react-redux";
import { setLogout } from "../../pages/login/loginSlice";
import { useState } from "react";

const StaffHeader = () => {
  const [menuTarget, setMenuTarget] = useState(null);
  const MuiStyles = useStyles();

  const onLogout = () => dispatch(setLogout(true));

  const onMenuOpen = (clickEvent) => setMenuTarget(clickEvent.currentTarget);

  const onMenuClose = () => setMenuTarget(null);

  return (
    <>
      <AppBar
        className={MuiStyles.appbar + "  " + MuiStyles.aboveDrawer}
        position="fixed"
      >
        <Toolbar>
          {/** whole toolbar div**/}
          <div className="flex  w-full justify-between items-center color-white">
            {/*Logo*/}
            <div>
              <NextLink href="/Staff" passHref>
                <Link color="inherit">
                  <Typography variant="h5" component="h1" color="inherit">
                    Apolilo
                  </Typography>
                </Link>
              </NextLink>
            </div>

            {/* icons and toolbar stuff */}
            <div>
              <IconButton color="inherit" onClick={onMenuOpen}>
                <Person />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={MuiStyles.toolbarMargin}></div>
      
      {/** menu when the person icon is clicked **/}
      <Menu
        open={Boolean(menuTarget)}
        onClose={onMenuClose}
        anchorEl={menuTarget}
        className={MuiStyles.menu}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>View profile</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menu:{
    marginTop: "2.2rem",
  }
}));

export default StaffHeader;
