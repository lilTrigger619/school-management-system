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
import Layout from "../../components/managementLayout/layout";
import SwiperComp from "../../components/pages/dashboard/slider";
import { useEffect, useLayoutEffect, useState } from "react";
import StudentTable from "../../components/pages/dashboard/studentTable";
import Link from "next/link";
import Image from "next/image";
import CustomPie from "../../components/pages/dashboard/piechart";
import { useDispatch, useSelector } from "react-redux";
import {
  load,
  stop_loading,
  setLogout,
} from "../../components/pages/login/loginSlice";
import axios from "axios";
import { useRouter } from "next/router";
import NoticeBoard from "../../components/pages/dashboard/noticeBoard";
import Context from "../../components/pages/dashboard/Context";

export default function Homepage({ at}) {
  const [greetings, setGreetings] = useState();
  const user = useSelector((state) => state.DashboardData.user);
  const dataArrived = useSelector((state) => state.DashboardData.dataArrived);
  const StaffTableData = useSelector(
    (state) => state.DashboardData.tableData.staffTablewn
  );
  const StudentTableData = useSelector( (state) => state.DashboardData.tableData.studentTable);
  const dispatch = useDispatch();
  const TableHead = ["Name", "Email", "Position", "Subject", "Grade", "Status"];
  //after data has arrived from the backend.
  useEffect(() => {
    if (dataArrived) {
      dispatch(stop_loading());
    } else {
      dispatch(load());
    }
  }, [dataArrived]);

  useEffect(() => {
    let time = new Date();
    setGreetings(
      time.getHours() <= 1
        ? "Dawn"
        : time.getHours() <= 11
        ? "Morning"
        : time.getHours() <= 17
        ? "Afternoon"
        : time.getHours() <= 21
        ? "Evening"
        : time.getHours() > 21
        ? "Night"
        : "Day"
    );
    console.log("this is the homepag" );
  }, []);

  return (
    <>
      <Layout>
        <Context>
          <div className=" my-8">
            <Grid container justifyContent="center" spacing={4}>
              <Grid item sm={12} md={4}>
                <div>
                  <Typography variant="h3" gutterBottom>
                    Welcome {user.first_name ?? "$user"}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Good {greetings}
                  </Typography>
                </div>
              </Grid>

              {/*Daily quote from an external API*/}
              <Grid item sm={12} md={8}>
                <Card>
                  <CardHeader title="Quote of the day" subheader="Quote:" />
                  <CardContent>
                    <Typography variant="body1">
                      {" "}
                      " When someone says you can't, do it twice and take
                      pictures "
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                {/*notice board*/}
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

              <Grid item xs={12} sm={6}>
                {/*Grid to contain userimage and user login details*/}
                <Card>
                  <CardContent className={`
                        flex
                        justify-center
                      `}>
                    <Image
                      src="/001_a.png"
                      width={240}
                      height={240}
                      className={`
                        rounded-full 
                      `}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                {/*login details: last date of login, last time of login name of device browser name*/}
                <Card>
                  <CardContent>
                      <div className="p-6">
                      <div className="flex justify-between">
                          <Typography variant="body1" gutterBottom>First name :</Typography>
                        <Typography variant="body1" gutterBottom>{`${user.first_name ? user.first_name : 'Unkown'}`}</Typography>
                      </div>
                      <div className="flex justify-between">
                          <Typography variant="body1" gutterBottom>Last name :</Typography>
                        <Typography variant="body1" gutterBottom>{`${user.last_name ? user.last_name : 'Unknown'}`}</Typography>
                      </div>
                      <div className="flex justify-between">
                          <Typography variant="body1" gutterBottom>Position:</Typography>
                        <Typography variant="body1" gutterBottom>{`${user.position ? user.position : 'Unkown'}`}</Typography>
                      </div>
                      <div className="flex justify-between">
                          <Typography variant="body1" gutterBottom>Account-Type:</Typography>
                          <Typography variant="body1" gutterBottom>Administrator</Typography>
                      </div>
                      <div className="flex justify-between">
                          <Typography variant="body1" gutterBottom>Last login:</Typography>
                          <Typography variant="body1" gutterBottom>Unknown</Typography>
                      </div>
                          </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Context>
      </Layout>
    </>
  );
}

