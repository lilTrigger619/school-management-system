
import Layout from "../components/managementLayout/layout";
import FlexCard from '../components/pages/students/flexCard';
import {Typography} from '@material-ui/core';

export default function StudentsPage(){
	return(
		<>
		<Layout>
			<div>
				<Typography variant="h5" className="text-center">Students</Typography>


				<FlexCard/>
			</div>
		</Layout>
		</>
		)
}