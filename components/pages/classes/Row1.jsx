import { MyCard } from "../../index";
import { Grid } from "@material-ui/core";

export default function Row1() {
  const PlaceHolder = [
    { value: "172", data: "Class Room" },
    { value: "500", data: "Teachers" },
    { value: "8500", data: "Students" },
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
