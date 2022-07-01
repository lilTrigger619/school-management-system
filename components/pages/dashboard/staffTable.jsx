import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

export default function StudentTable({ tableHeading, tableData }) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Name</Typography>
            </TableCell>
            <TableCell>
              <Typography>Email</Typography>
            </TableCell>
            <TableCell>
              <Typography>Position</Typography>
            </TableCell>
            <TableCell>
              <Typography>Subject</Typography>
            </TableCell>
            <TableCell>
              <Typography>Grade</Typography>
            </TableCell>
            <TableCell>
              <Typography>Status</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData
            ? tableData.map((value, key) => {
                let course_set = [];
                value.couse_set.map((value, key) =>
                  course_set.push(value.short_name)
                );
                return (
                  <TableRow className="hover:bg-grey-800" key={key}>
                    <TableCell>
                      <Typography variant="body1">
                        {value.last_name + " " + value.first_name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{value.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{value.position}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        {course_set.toString() + " (" + course_set.length + ")"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        {value.level_set.toString()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        {value.user.is_active ? "Active" : "False"}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })
            : ""}
        </TableBody>
      </Table>
    </>
  );
}

/**
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
          **/
