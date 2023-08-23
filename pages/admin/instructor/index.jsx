import {Row1, Row2, Row3} from '../../../components/pages/instructors/';
import Layout from "../../../components/managementLayout/layout";
import {Typography} from '@material-ui/core';

export default function InstructorsPage(){
	return(
		<Layout>
			<div>
				<Typography variant="h5" className="text-center">Instructors</Typography>
				<Row1 />
				<Row2 />
				<Row3 />
			</div>
		</Layout>
		)
}
