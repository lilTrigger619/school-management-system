import Typography from "@material-ui/core/Typography";
import Layout from "../../components/managementLayout/layout";
import Context from "../../components/pages/register/registerStudent/context";
import { useEffect } from "react";
import cookie from "cookie";
import {useDispatch} from "react-redux"; 
import {setToken} from "../../components/globalSlice";

export default function RegisterStudent({serverSideCookies}) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setToken(serverSideCookies));
  }, []);
  return (
    <>
      <Layout>
        <div className="my-9">
          <Typography variant="h3">Register Student</Typography>

          {/* input fields*/}
          {/* display the form in pages */}
          <Context/>
        </div>
      </Layout>
    </>
  );
}

export function getServerSideProps({ req, res }) {
  const Cookie = cookie.parse(req.headers.cookie);
  return { props: { serverSideCookies: Cookie } };
}
