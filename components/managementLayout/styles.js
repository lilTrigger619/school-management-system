import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
	return(
			{
				//appbar margin
				appbarMargin: theme.mixins.toolbar,
				//side bar z-index;
				aboveDrawer: {
					zIndex: theme.zIndex.drawer+99,
          logger: console.log({theme}),
				[theme.breakpoints.down('sm')]:{
				}
				},
        DrawerContainer: {
          zIndex: theme.zIndex.appBar,
        },
        accordionContent: {
          backgroundColor: "rgb(218 220 224 / 52%)",
        },
        lineHeight: {
          lineHeight: "3rem",
          paddingLeft: "1rem",
        },
			}
		)
});

export default useStyles;
