import {
  List,
  ListItem,
  Drawer,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import {
  ExpandMore as ExpandIcon,
  Home as HomeIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  Class as ClassroomIcon,
  AccountBalance as AccountIcon,
  PostAdd as AccountPrivIcon,
} from "@material-ui/icons";
import NextLink from "next/link";
import css from "../../styles/layout.module.css";
import useStyles from "./styles";
import { forwardRef, useImperativeHandle, useState } from "react";
//import {useStyles} from "./styles";

const DrawerItem = ({ links, linkOnly }) => {
  const muiStyles = useStyles();
  return (
    <span className="w-full">
      {linkOnly == undefined ? (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandIcon />}>
            <Typography>
              {" "}
              {links.icon}&nbsp;{links.title}{" "}
            </Typography>
          </AccordionSummary>

          {/*rgb(218 220 224 / 52%)*/}
          <AccordionDetails className={muiStyles["accordionContent"]}>
            <List className="w-full">
              {links.links.map((val, key) => (
                <>
                  <ListItem>
                    <NextLink href={val.link} passHref>
                      <Link color="textPrimary">{val.title}</Link>
                    </NextLink>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ) : (
        <>
          <NextLink href={linkOnly.link} passHref>
            <Link
              color="textPrimary"
              className="flex justify-start items-center p-3"
            >
              {linkOnly.icon}&nbsp;{linkOnly.title}
            </Link>
          </NextLink>
          <Divider />
        </>
      )}
    </span>
  );
}; // end of DrawerItem component.

const ShortcutLink = ({ title, to }) => {
  const muiStyles = useStyles();
  return (
    <>
      <NextLink href={to} passHref>
        <Link color="textPrimary" className={muiStyles["lineHeight"]}>
          {title}
        </Link>
      </NextLink>
      <Divider />
    </>
  );
};

//{ links, title, linkOnly }
export default forwardRef(
  function Sidebar(props, ref) {
    const isMobile = useMediaQuery("(max-width:43rem)");
    const muiStyles = useStyles();
    const [toggleState, setToggle] = useState(false);

    useImperativeHandle(ref, function () {
      return {
        toggleSidebar() {
          setToggle(!toggleState);
        },
      };
    });

    return (
      <Drawer
        variant={isMobile != undefined ? "temporary" : "permanent"}
        className={muiStyles["DrawerContainer"]}
        open={toggleState}
        onClose={() => setToggle(false)}
      >
        <span className={`${muiStyles.appbarMargin}`} />

        {/*Dashboard*/}
        <DrawerItem
          linkOnly={{ link: "/", title: "Dashboard", icon: <HomeIcon /> }}
        />

        {/*Students*/}
        <DrawerItem
          links={{
            icon: <GroupIcon />,
            title: "Students",
            links: [
              { title: "All", link: "#" },
              { title: "Manage Student", link: "#" },
              { title: "Student stats", link: "#" },
              { title: "Reported students", link: "#" },
              { title: "Messages", link: "#" },
            ],
          }}
        />

        {/*staff*/}
        <DrawerItem
          links={{
            icon: <PersonIcon />,
            title: "Staff",
            links: [
              { title: "All", link: "#" },
              { title: "Manage Staff", link: "#" },
              { title: "Staff stats", link: "#" },
              { title: "Reported staff", link: "#" },
              { title: "Messages", link: "#" },
            ],
          }}
        />

        {/*Classroom*/}
        <DrawerItem
          links={{
            icon: <ClassroomIcon />,
            title: "Classroom",
            links: [
              { title: "All", link: "#" },
              { title: "Manage Classrooms", link: "#" },
              { title: "Classroom stats", link: "#" },
              { title: "Reported Classrooms", link: "#" },
              //{ title: "Messages", link: "#" },
            ],
          }}
        />

        {/*Finance*/}
        <DrawerItem
          links={{
            icon: <AccountIcon />,
            title: "Finance",
            links: [
              { title: "All", link: "#" },
              { title: "Manage finance models", link: "#" },
              { title: "Manage student finance", link: "#" },
              { title: "Manage staff finance", link: "#" },
              //{ title: "Messages", link: "#" },
            ],
          }}
        />

        {/*Account privilages*/}
        <DrawerItem
          links={{
            icon: <AccountPrivIcon />,
            title: "Account privilages",
            links: [
              { title: "All", link: "#" },
              { title: "Manage Admin accounts", link: "#" },
              { title: "Manage staff privilages", link: "#" },
              { title: "Manage student privilages", link: "#" },
              { title: "View privilaged account logs", link: "#" },
              //{ title: "Messages", link: "#" },
            ],
          }}
        />

        {/*shortcuts*/}
        <br />
        <Typography variant="h6" color="textSecondary">
          Shortcuts
        </Typography>
        <ShortcutLink title="Create new student" to="#" />
        <ShortcutLink title="Create new Staff" to="#" />
        <ShortcutLink title="View student fees log" to="#" />
      </Drawer>
    );
  } // end of sidebar component.
);
