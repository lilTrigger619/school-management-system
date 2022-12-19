import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Finance(){
	return(
		<>
			<div className='mb-10'>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon/>}>
						<div className='flex justify-between  w-full'>
							<Typography variant='body1' className=''>Finance</Typography>
							<Typography variant='body1' className=''> Owing Status: Owing</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails>
					<Typography variant='body1'> This is a detail</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</>
	)
}
