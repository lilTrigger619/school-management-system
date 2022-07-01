import Typography from "@material-ui/core/Typography";
import Layout from "../../components/managementLayout/layout";
import Context from "../../components/pages/register/registerStudent/context";
import {useState, useRef} from "react";


export default function RegisterStudent(){
  return(
    <>
      <Layout>
        <div className="my-9">
          <Typography variant="h3">Register Student</Typography>

          {/* input fields*/}
          {/* display the form in pages */}
          <Context />

        </div>
      </Layout>
    </>
  );
};
