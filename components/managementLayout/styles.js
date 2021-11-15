import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
	return(
			{
				//appbar margin
				appbarMargin: theme.mixins.toolbar,
				//side bar z-index;
				aboveDrawer: {
					zIndex: theme.zIndex.drawer + 1,
				[theme.breakpoints.down('sm')]:{
				}
				},
			}
		)
});

export default useStyles;
