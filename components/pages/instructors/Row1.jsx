import { MyCard } from "../../index";
import { Grid } from "@material-ui/core";

export default function Row1() {
  const PlaceHolder = [
    { value: "17200", data: "TOTAL NUMBER OF INSTRUCTORS" },
    { value: "500", data: "TOTAL NUMBER OF FOREIGN INSTRUCTORS" },
    { value: "8500", data: "TOTAL NUMBER OF FEMALE INSTRUCTORS" },
    { value: "8700", data: "TOTAL NUMBE OF MALE INSTRUCTORS" },
    { value: "129", data: "Total Number of christian instructors" },
    { value: "133", data: "Total number of Muslim instructors" },
    {
      value: "12",
      data: "Total number of instructors with more than one class/subject",
    },
    {
      value: "221",
      data: "Total number of instructors with no-assigned class / no-assigned subject",
    },
    { value: "22", data: "Total number of in-active instructors" },
    { value: "456", data: "Total number of part-time instructors" },
    { value: "3", data: "TOTAL NUMBER OF INACTIVE INSTRUCTORS" },
  ];

  return (
    <>
      <Grid container spacing={3} justifyContent="space-between">
        {PlaceHolder.map((data) => {
          return (
            <Grid item xs="12" md="6" key={data}>
              <MyCard
                dataValue={data.value}
                dataInfo={data.data.toUpperCase()}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
