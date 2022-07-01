import {
  Header,
  Greetings,
  Courses,
  Assignments,
  Finance,
  Voting,
  News,
  Links,
} from "../../components/students/";
import Container from "@material-ui/core/Container";
import AuthContext from "../../components/students/AuthContext";

export default function Hompage() {
  return (
    <>
      <AuthContext>
        <Container maxWidth="lg">
          <Header />
          <Greetings />
          <News />
          <Courses />
          <Assignments />
          <Finance />
          <Voting />
          <Links />
        </Container>
      </AuthContext>
    </>
  );
}
