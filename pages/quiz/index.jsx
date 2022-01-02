import CardHeader from "@material-ui/core/CardHeader";
import { MyCard } from "../../components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Layout from "../../components/managementLayout/layout";
import AddIcon from "@material-ui/icons/Add";

export default function Quiz() {
  const PlaceHolder = [
    { value: "40", data: "Total Assignments" },
    { value: "25", data: "Total Submissions" },
    { value: "12", data: "Open Pending Quizes" },
  ];
  return (
    <Layout>
      <div style={{ minheight: "100vh" }}>
        <Typography variant="h4" className="w-full text-center">
          Quiz
        </Typography>
        <Grid container spacing={3}>
          {PlaceHolder.map((item, key) => {
            return (
              <Grid item xs={12} md={6} key={key}>
                <MyCard
                  dataValue={item.value}
                  dataInfo={item.data.toUpperCase()}
                />
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Link href="quiz/createQuestionPage">
              <Button>
                Create Quiz
                <AddIcon className="m-3" />
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardHeader title="Pending Quiz" />
              <CardContent>
                <Typography variant="body1">None</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
