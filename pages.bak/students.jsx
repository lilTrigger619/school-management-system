import Layout from "../components/managementLayout/layout";
import {Typography} from '@material-ui/core';
import {Row1,Row2, Row3 } from '../components/pages/students'

export default function StudentsPage(){
	return(
		<>
		<Layout>
			<div>
				<Typography variant="h5" className="text-center">Students</Typography>
				<Row1 />	
				<Row2 />
				<Row3 />
			</div>
		</Layout>
		</>
		)
}
