import { List, ListItem, Drawer, Typography, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import css from "../../styles/layout.module.css";
import {
	CameraAlt,
	Dashboard,
	AvTimer,
	Today,
	Announcement,
	Payment,
	Person

} from "@material-ui/icons";

export default function SideBar({ show }) {
	const Classes = useStyles();
	return (
		<Drawer variant="permanent">
			<List className="p-5">
				<ListItem className={Classes.appbarMargin} />
				<ListItem className="my-2"
				>
					<Avatar alt="Shadrack" src="" className={show ? "-ml-4 mr-2 " : "-mx-4"} />
				</ListItem>
				<ListItem className="my-4">
					<Dashboard className={`${show} ? -ml-2 mr-2 : -mx-2 `} />{" "}
					<Typography
						variant="body1"
						className={show ? "flex" : "hidden"}
					>
						Dashboard
					</Typography>
					</ListItem>

					<ListItem className="my-4">
					<AvTimer className={show ? "-ml-2 mr-2" : "-mx-2"} />{" "}
					<Typography
						variant="body1"
						className={show ? "flex" : "hidden"}
					>
						Performance
					</Typography>
					</ListItem>

					<ListItem className="my-4">
					<Today className={show ? "-ml-2 mr-2" : "-mx-2"} />{" "}
					<Typography
						variant="body1"
						className={show ? "flex" : "hidden"}
					>
						Calender
					</Typography>
					</ListItem>

					<ListItem className="my-4">
					<Announcement
						className={show ? "-ml-2 mr-2" : "-mx-2"}
					/>{" "}
					<Typography
						variant="body1"
						className={show ? "flex" : "hidden"}
					>
						News
					</Typography>
					</ListItem>

					<ListItem className="my-4">
					<Payment className={show ? "-ml-2 mr-2" : "-mx-2"} />{" "}
					<Typography
						variant="body1"
						className={show ? "flex" : "hidden"}
					>
						Fees
					</Typography>
				</ListItem>
			</List>
		</Drawer>
	);
}
