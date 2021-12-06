
import Layout from "../components/managementLayout/layout";
import {Typography} from '@material-ui/core';
import {Row1, Row2, Row3, Row4} from '../components/pages/quiz';

export default function ExamsPage(){
	return(
		<Layout>
			<div>
				<Typography variant="h5" className="text-center">Quiz</Typography>
				<Row1/>
				<Row2/>
				<Row3/>
				<Row4/>
			</div>
		</Layout>
		)
}
