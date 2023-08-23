import Button from "@material-ui/core/Button";
import Layout from "../../components/managementLayout/layout";
import Typography from "@material-ui/core/Typography";
import {
  Row1,
  Row2,
  Row3,
  Row4,
  SavedQuestions,
} from "../../components/pages/quiz";
import Link from "next/link";

export default function ExamsPage() {
  return (
    <Layout>
      <div style={{ minheight: "100vh" }}>
        <div className="flex">
          <Link href="/quiz">
            <Button
              variant="contained"
              size="small"
              className="m-2 mt-1"
              color="primary"
            >
              Back
            </Button>
          </Link>
          <Typography variant="h5" className="text-center w-full">
            Create Quiz
          </Typography>
        </div>
        <Row1 />
        <Row2 />
        <SavedQuestions />
        <Row3 />
        <Row4 />
      </div>
    </Layout>
  );
}
