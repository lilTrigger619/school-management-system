import Layout from "../../components/managementLayout/layout";
import { Row1, Row2, Row3, Row4 } from "../../components/pages/finance";
import { Typography } from "@material-ui/core";

export default function FinancePage() {
  const Styles = {
    minHeight: "100vh",
  };

  return (
    <Layout>
      <div style={Styles}>
        <div>
          <Typography variant="h5" className="text-center">
            Finance
          </Typography>
        </div>
        <Row1 />
        <Row2 />
        <Row3 />
		<Row4 />
      </div>
    </Layout>
  );
}
