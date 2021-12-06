//This pages main functionality is to generate a table of all the students in the school
//It should be visible to all the teachers too.
//
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardContent,
  Grid,
} from "@material-ui/core";
import data from "./tableData";
import SearchComponent from "./searchComponent";
import { useState } from "react";
import GridViewCard from "./GridView";

export default function Row3() {
  const [result, setResult] = useState([]);
  const [searchFieldText, setSearchField] = useState("");
  const [ListChecked, setListCheck] = useState(true);
  const [GridChecked, setGridCheck] = useState(false);
  let resultt = []; //this is the array that take the result of the search
  const listChecked = () => {
    setListCheck(true);
    setGridCheck(false);
  };

  const gridChecked = () => {
    setListCheck(false);
    setGridCheck(true);
  };

  //This function runs every time the search bar recieves an input.
  //It loops through the students data for matching first name and last name
  const searchOnChange = (event) => {
    console.log(event.target.value.length);
    setSearchField(event.target.value);
    data.filter((i) => {
      if (
        i.firstName.toLowerCase().slice(0, event.target.value.length) ==
          event.target.value.toLowerCase() ||
        i.lastName.toLowerCase().slice(0, event.target.value.length) ==
          event.target.value.toLowerCase()
      ) {
        resultt.push(i);
        setResult(resultt);
      } else {
        setResult("No data found");
      }
    });

    console.log(resultt);
  };

  //Hoping to loop to the result variable and show the values in the table when the search bar is interacted with.
  //But for some reason, when you useState to set the result the value is set to later than expected.

  return (
    <>
      <Card>
        <CardContent>
          <Grid container justifyContent="space-around">
            <Grid item xs={12} className="flex justify-center">
              <SearchComponent
                searchFunction={searchOnChange}
                value={searchFieldText}
              />
            </Grid>

            <Grid item xs={12}>
              <div className="flex justify-center w-full">
                <div className="flex justify-between">
                  {/** Grid radio input **/}
                  <div className="flex justify-between items-center">
                    <input
                      type="radio"
                      name="view"
                      checked={GridChecked}
                      onChange={gridChecked}
                    />
                    <Typography variant="body2">
                      <pre> Grid </pre>
                    </Typography>
                  </div>

                  {/** List radio input **/}
                  <div className="flex justify-between items-center">
                    <input
                      type="radio"
                      name="view"
                      checked={ListChecked}
                      onChange={listChecked}
                    />
                    <Typography variant="body2">
                      <pre> List </pre>{" "}
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>

            <Card className={`${GridChecked ? "block" : "hidden"}`}>
              <CardContent>
                <Grid container spacing={6}>
                  {data.map((usr) => {
                    return (
                      <Grid item xs={12} md={4}>
                        <GridViewCard
                          userImage={"/placeholder_1.jpg"}
                          firstName={usr.firstName}
                          name={`${usr.firstName} ${usr.lastName}`}
                          class={usr.class}
                          subject={usr.subject}
                          contact={usr.contact}
                          email={usr.email}
                          activeStatus="Active"
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </CardContent>
            </Card>
            <Grid item={12}>
              <div className="my-12" />
            </Grid>

            <Grid
              item
              xs={12}
              md={8}
              className={`max-w-full max-h-sm overflow-auto ${
                ListChecked ? "block" : "hidden"
              }`}
            >
              {/**
	For every user entry in the table should have a page of the student selected with student details.
	  **/}
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Class</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Active Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.map((data) => {
                    return (
                      <TableRow className="hover:bg-gray-300">
                        <TableCell>{`${data.firstName} ${data.lastName}`}</TableCell>
                        <TableCell>{data.class}</TableCell>
                        <TableCell>{data.contact}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>Active</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
