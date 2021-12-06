import {Card, Grid, Typography, CardContent, CardActionArea, CardMedia} from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';


export default function GridViewCard(props){
    return(
        <>
	<Card>
	    <CardMedia
	    image={props.userImage}
	    title={props.firstName}
	    className="w-full h-32"
	    /
	    >
	    <CardContent>
	    <div className="flex justify-between"><Typography variant="body1" >NAME: </Typography> <Typography variant="body2" >{props.name}</Typography></div>
	    <div className="flex  justify-between"><Typography variant="body1" >CLASS: </Typography> <Typography variant="body2">{props.class}</Typography></div>
	    <div className="flex  justify-between"><Typography variant="body1" >SUBJECT: </Typography> <Typography variant="body2">{props.subject}</Typography></div>
	    <div className="flex  justify-between"><Typography variant="body1" >CONTACT: </Typography> <Typography variant="body2">{props.contact}</Typography></div>
	    <div className="flex  justify-between"><Typography variant="body1" >EMAIL: </Typography>  <Typography variant="body2">{props.email}</Typography></div>

	    <div className="flex justify-between"><Typography variant="body1" >ACTIVE-STATUS:  </Typography>  <Typography variant="body2">{props.activeStatus}</Typography></div>

	    </CardContent>
	</Card>
	</>
    )
}
