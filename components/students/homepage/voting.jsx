import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useSelector} from "react-redux";
import {useState} from "react";

export default function Voting(){
	const Styles = useStyles();
  const [votingActive, setVotingActive] = useState(true)
  const isMobile = useSelector(state=>state.StudentUi.isMobile)
  
	return(
		<>
			<div className={`${Styles.Card}`}>
				<Card>
          <CardContent className={`flex flex-wrap justify-between items-center bg-${votingActive?"red-300":"gray-600"}`}>
						<Typography variant='h6' component='h3'>Voting System</Typography>
            {!votingActive?
            (
              <div>
              <Typography variant="body2" component='h3'>
                status: <b>Disabled</b>
              </Typography>
                </div>
            ):(
            <Button size="small" color="primary">Open</Button>
            )}
					</CardContent>
				</Card>
			</div>
		</>
	)
}

const useStyles = makeStyles(theme=>({
	Card: {
		maxWidth: "28.125rem",
    marginBottom: '1rem', 
	},
}))
