import {
  Card,
  CardContent,
  Typography,
  Grid,
  InputBase,
} from "@material-ui/core";
import { useState } from "react";

export default function Row1() {
  const [ClassPlaceholder, setClassPlaceholder] = useState([
    "Kingdergaten 1",
    "Kingdergaten 2",
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
    "JHS 1",
    "JHS 2",
    "JHS 3",
  ]);

  return (
    <>
      <div className="mt-9">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Card>
              <CardContent className="flex flex-row justify-around items-center">
                <Typography variant="h5">Class:</Typography>
                <select className="border-2 border-gray-400 p-2 rounded-lg">
                  {ClassPlaceholder.map((item, key) => {
                    return (
                      <option value={item} key={key}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="body1">Quiz title</Typography>
                <div className="flex">
                  <InputBase placeholder="title..." />
                </div>
                <Typography variant="body1">Quiz instructions</Typography>
                <textarea
                  rows="8"
                  cols="30"
                  placeholder="Instructions"
                  className="w-full border-2 border-gray-500 p-2 rounded-md"
                ></textarea>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
