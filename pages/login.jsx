import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    axios.get("api/login").then((res) => console.log(res));
  });

  return (
    <div style={OutterStyle}>
      <Container style={ContainerStyle} maxWidth="md">
        <div
          className="flex flex-col items-center justify-center border-2 border-blue-400 rounded-lg w-4/5 "
          style={FormStyle}
        >
          <div className="p-5 m-3">
            <TextField type="text" onChange={null} placeholder="email" />
          </div>

          <div className="p-5 m-3">
            <TextField type="password" onChange={null} placeholder="password" />
          </div>

          <div className="p-5 m-3">
            <Button
              variant="contained"
              color="primary"
              onClick={console.log("submit button was clicked")}
              className="w-full"
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

const OutterStyle = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
};
const ContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const FormStyle = {
  minHeight: "56%",
};
