import Layout from "../../../components/managementLayout/layout";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";

export default function AddOrEdit(){
  return(
    <>
      <Layout>
        <div className="my-3"/>
        <Link href="register/registerStaff">
          <a>Register Staff</a>
        </Link>
      <br/>

        <Link href="register/registerStudent">
          <a>Register Student</a>
        </Link>
      <br/>


        <Link href="register/editStaff">
          <a>Edit Staff Account</a>
        </Link>
      <br/>


        <Link href="register/editStudent">
          <a>Edit Student</a>
        </Link>
      <br/>

      </Layout>
    </>
  )
};
