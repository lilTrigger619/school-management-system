import {Card, CardContent, CardMedia, Typography, Grid} from '@material-ui/core';
import Styles from './styles/flexCard.module.css';

export default function FlexCard(props){
	return(
		<div className="max-w-md m-auto">
		<Card >
			<CardMedia image="/placeholder_1.jpg" className={Styles.flexImage} title="Profile Picture"/>
		</Card>
			<div className={`${Styles.flexCardTypo} flex w-full justify-around`}>
			<Typography>{props.name}</Typography>
			<Typography>{props.position}</Typography>
			</div>
		</div>
		)
}
