import { List, ListItem, Drawer, Typography, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import css from "../../styles/layout.module.css";
import {
  Class,
  Dashboard,
  Description,
  Today,
  Person,
  Group,
  AccountBalance,
  PostAdd,
	Add,
} from "@material-ui/icons";
import Link from "next/link";

export default function SideBar({ show }) {
  const Classes = useStyles();
  return (
	  <Drawer variant="permanent" className={css.hideScroll}>
      <List className="p-5">
        <ListItem className={`${Classes.appbarMargin} -mx-2`} />

        <Link href="/admin">
          <ListItem className="my-4 -mx-2 hover:bg-gray-200 cursor-pointer">
            <Dashboard className={`${show ? "-ml-.5 mr-2" : "p-1"}`} />{" "}
            <Typography variant="body1" className={show ? "flex" : "hidden"}>
              Dashboard
            </Typography>
          </ListItem>
        </Link>

        <Link href="/admin/students">
          <ListItem className="my-4 -mx-2 hover:bg-gray-200 cursor-pointer">
            <Group className={`${show ? "-ml-.5 mr-2" : "p-1"}`} />{" "}
            <Typography variant="body1" className={show ? "flex" : "hidden"}>
              Students
            </Typography>
          </ListItem>
        </Link>

        <Link href="/admin/instructor">
          <ListItem className="my-4 -mx-2 hover:bg-gray-200 cursor-pointer">
            <Person className={`${show ? "-ml-.5 mr-2" : "p-1"}`} />{" "}
            <Typography variant="body1" className={show ? "flex" : "hidden"}>
              Instructor
            </Typography>
          </ListItem>
        </Link>

        <Link href="/admin/classes">
          <ListItem className="my-4 -mx-2 hover:bg-gray-200 cursor-pointer">
            <Class className={`${show ? "-ml-.5 mr-2" : "p-1"}`} />{" "}
            <Typography variant="body1" className={show ? "flex" : "hidden"}>
              Classes
            </Typography>
          </ListItem>
        </Link>

        <Link href="/admin/quiz">
          <ListItem className="my-4 -mx-2 hover:bg-gray-200 cursor-pointer">
            <Description className={`${show ? "-ml-.5 mr-2" : "p-1"}`} />{" "}
            <Typography variant="body1" className={show ? "flex" : "hidden"}>
              Quiz
            </Typography>
          </ListItem>
        </Link>

        <Link href="/admin/finance">
          <ListItem className="my-4 -mx-2 hover:bg-gray-200 cursor-pointer">
            <AccountBalance className={`${show ? "-ml-.5 mr-2" : "p-1"}`} />{" "}
            <Typography variant="body1" className={show ? "flex" : "hidden"}>
              Finance
            </Typography>
          </ListItem>
        </Link>

        <Link href="/admin/register">
          <ListItem className="my-4 -mx-2 hover:bg-gray-200 cursor-pointer">
            <Add className={`${show ? "-ml-.5 mr-2" : "p-1"}`} />{" "}
            <Typography variant="body1" className={show ? "flex" : "hidden"}>
              Add / Edit
            </Typography>
          </ListItem>
        </Link>

        <Link href="/admin/repro">
          <ListItem className="my-4 -mx-2 hover:bg-gray-200 cursor-pointer">
            <PostAdd className={`${show ? "-ml-.5 mr-2" : "p-1"}`} />{" "}
            <Typography variant="body1" className={show ? "flex" : "hidden"}>
              Reprographic
            </Typography>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}
