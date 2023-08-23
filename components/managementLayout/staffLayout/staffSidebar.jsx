import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";

import {Person} from "@material-ui/icons";

const StaffLayoutSidebar = () => {
  const isMobile = useMediaQuery('(max-width: 756px)');
  const MuiStyles = useStyles();
  console.log({isMobile});
  return <>
    <Drawer variant="permanent">
      <ListItem className={MuiStyles.toolbarMargin}>
      </ListItem>
      <ListItem>
        <ListItemIcon><Person/></ListItemIcon>
        <ListItemText>Hello world</ListItemText>
      </ListItem>
    </Drawer>
    </>;
};

const useStyles = makeStyles((theme)=>({
  one: console.log({theme}),
  toolbarMargin: theme.mixins.toolbar,
}));

export default StaffLayoutSidebar;
