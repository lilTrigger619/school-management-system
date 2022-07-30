import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useDispatch, useSelector } from "react-redux";
import {
  Authenticate,
  de_Authenticate,
  load,
  stop_loading,
} from "../components/pages/login/loginSlice";
import TestApi from "../components/pages/login/testApi";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export default function Login() {
  const route = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const Styles = useStyles();
  const [passVisible, setPassVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [apiError, setApiError] = useState("");
  const { username, password } = credentials;

  //password visible?
  const visibilityHandler = () => {
    setPassVisible(!passVisible);
  };
  //icon for input
  const InputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={visibilityHandler}>
          {passVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  //on input change..
  const onChangeHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  //Submit button handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const url = "api/login";
    const body = JSON.stringify({ username, password });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    try {
      const ApiRes = await axios.post(url, body, config);
      const Status = await ApiRes.status;
      const SText = await ApiRes.statusText;
      if (Status == 200) {
        setApiError("");
        dispatch(Authenticate());
        const cookie = cookies.get("url") ?? "";
        if ((cookie != "") && (cookie != "undefined") && cookie != undefined) {
          route.push(cookie);
        } else {
          route.push("/");
        }
      }
    } catch (err) {
      const ApiError = await err.response;
      //checking for 401 unauthorized error in api status
      //code.
      if (ApiError?.statusText == "Unauthorized") {
        dispatch(de_Authenticate());
        setApiError("Incorrect username or password");
        console.log(isAuthenticated);
      } else if (ApiError?.statusText == "Bad Request") {
        dispatch(de_Authenticate());
        setApiError("Something went wrong! Please Try again");
      } else {
        dispatch(de_Authenticate());
        console.log(err.json);
        console.log(err);
        setApiError(
          "Something went wrong on the server please try again else contact admin to resolve the error"
        );
      }
    }
  };

  return (
    <div className={Styles.OutterStyle}>
      <Container className={Styles.ContainerStyle} maxWidth="md">
        <div
          className={`flex 
					flex-col 
					items-center 
					justify-center 
					border-2 
					border-blue-400 
					rounded-lg w-4/5 
					${Styles.FormStyle}`}
        >
          <div className="p-5 m-3">
            <TextField
              type="text"
              onChange={onChangeHandler}
              placeholder="username"
              name="username"
              value={username}
              label="username"
              error={apiError ? true : false}
            />
          </div>

          <div className="p-5">
            <TextField
              type={passVisible ? "text" : "password"}
              onChange={onChangeHandler}
              placeholder="password"
              name="password"
              value={password}
              InputProps={InputProps}
              label="password"
              error={apiError ? true : false}
            />
          </div>

          <div className={Styles.error}>
            <Typography center variant="caption">
              {apiError ? apiError : ""}
            </Typography>
          </div>

          <div className="p-5">
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmitHandler}
              className="w-full"
              type="submit"
            >
              Login
            </Button>
          </div>

          <div>
          {/*test div remove when done*/}
            <TestApi />
          </div>
        </div>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  OutterStyle: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
  },
  ContainerStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem",
    marginBottom: "7rem",
  },
  FormStyle: {
    minHeight: "56px",
  },
  error: {
    color: theme.palette.error.light,
    textAlign: "center",
    display: "inline-block",
    width: "60%",
  },
}));
