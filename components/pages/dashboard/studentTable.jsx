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
            {tableHeading
              ? tableHeading.map((value, key) => (
                  <TableCell key={key}>{value}</TableCell>
                ))
              : "None"}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData
            ? tableData.map((Cred, key) => {
                return (
                    <TableRow>
                        <TableCell>

                        </TableCell>
                    </TableRow>
                );
              })
            : "No Data"}
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
