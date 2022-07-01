import Layout from "../../components/managementLayout/layout";
import { makeStyles } from "@material-ui/core/styles";
import {S_form} from '../../components/pages/register/';
import Typography from '@material-ui/core/Typography';

export default function Register() {
  const Styles = useStyles();
	console.log('dd');
	return (
    <>
      <Layout>
        <div className={Styles.pageStyle}>
          <Typography 
						className="mb-6 p-3 
						flex 
						justify-start" 
						variant="h4">
            Register Staff
          </Typography>
          <br />
          <div className={`${Styles.form} mx-1 p-5`}>
						<S_form />
					</div>
        </div>
      </Layout>
    </>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    form: {
      background: theme.palette.background.default,
      borderRadius: ".7rem",
    },
    pageStyle: {
      width: "100%",
      minHeight: "100vh",
    },
    otherInputs: {
      maxWidth: "23rem",
      margin: "auto",
      marginTop: ".9rem",
    },
  };
});

