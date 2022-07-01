import {
  Typography,
  Card,
  CardContent,
  Drawer,
  CardHeader,
  Grid,
  CardMedia,
  CardActionArea,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
import Layout from "../components/managementLayout/layout";
import SwiperComp from "../components/pages/dashboard/slider";
import { useEffect, useState } from "react";
import StudentTable from "../components/pages/dashboard/studentTable";
import Link from "next/link";
import { GetTableStaff } from "./api/req/funcs";
import { GetUser, GetAllStaff, GetAllStudent } from "../utils/requests";
import CustomPie from "../components/pages/dashboard/piechart";
import { useDispatch, useSelector } from "react-redux";
import {
  Authenticate,
  de_Authenticate,
  load,
  stop_loading,
  setLogout,
} from "../components/pages/login/loginSlice";
import axios from "axios";
import { useRouter } from "next/router";
import NoticeBoard from "../components/pages/dashboard/noticeBoard";
import {
  setStaffTable,
  setStudentTable,
  setUser,
} from "../components/pages/dashboard/dashboardSlice";

export default function Homepage() {
  const [dataArrived, setDataArrived] = useState(false);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const dispatch = useDispatch();
  const user = ([setUser, user] = useState());
  const staffTable = useSelector(
    (state) => state.DashboardData.tableData.staffTable
  );
  console.log("staffTable", staffTable);

  //after data has arrived from the backend.
  useEffect(async () => {
    if (dataArrived) {
      dispatch(stop_loading());
    } else {
      dispatch(load());
    }
  }, [dataArrived]);

  //after Authentication is complete.
  useEffect(async () => {
    //get user's Profile
    //get data to populate the table
    if (isAuthenticated) {
      const Data = {
        getAllStaff: "getAllStaff",
        getAllStudents: "getAllStudents",
        getSelf: "getSelf",
        refresh: "api/auth",
        logout: "api/logout",
      };
      const AllStaff = await GetAllStaff(Data);
      if (AllStaff.status == 200) {
        setDataArrived(true);
        console.log("raw", AllStaff);
        dispatch(setStaffTable(AllStaff.data.data));
        console.log("allData", staffTable);
      } else {
        dispatch(setLogout(true));
      }
    }
  }, [isAuthenticated]);

  return (
    <>
      <Layout>
        <div className=" my-8">
          <Grid container justifyContent="center" spacing={4}>
            <Grid item sm={12} md={4}>
              <div>
                <Typography variant="h3" gutterBottom>
                  Welcome{" "}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Good Morning
                </Typography>
              </div>
            </Grid>

            <Grid item sm={12} md={8}>
              <Card>
                <CardHeader title="Quote of the day" subheader="Quote:" />
                <CardContent>
                  <Typography variant="body1">
                    {" "}
                    " When someone says you can't, do it twice and take pictures
                    "
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardHeader subheader="News" />
                <CardContent>
                  <NoticeBoard />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <div>
                <SwiperComp />
              </div>
            </Grid>

            <Grid item xs="12">
              <CustomPie />
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent className="flex justify-center">
                  <Typography variant="h6">Staff</Typography>
                </CardContent>
                <Grid container justifyContent="space-around">
                  <div className="max-w-full max-h-sm  overflow-auto">
                    <Grid item xs={12} md={8}>
                      <StudentTable tableData={staffTable} />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="bg-blue-200 flex justify-center cursor-pointer"
                    >
                      <Link href="instructor">
                        <Typography>See more</Typography>
                      </Link>
                    </Grid>
                  </div>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent className="flex justify-center">
                  <Typography variant="h6">Students</Typography>
                </CardContent>
                <Grid container justifyContent="space-around">
                  <div className="max-w-full max-h-sm  overflow-auto">
                    <Grid item xs={12} md={8}>
                      <StudentTable />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className="bg-blue-200 flex justify-center cursor-pointer"
                    >
                      <Link href="instructor">
                        <Typography>See more</Typography>
                      </Link>
                    </Grid>
                  </div>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
}

//Props for the page
/**
export async function getServerSideProps({req,res}){
  try{
    const Res = axios.get('pages/api/hello');
    console.log('the front end response', Res)
  }catch(err){
    console.log('front end getStaticProps error',err)
    if(err.response.data.code == 'token_not_valid'){
      r
    }
  }
  return{
    props:{
    }
  }
}
**/
