import { TailSpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

export default function Loader() {
  const [LongLoad, setLongLoad] = useState(false);
  const DataArrived = useSelector((state) => state.DashboardData.dataArrived);

  useEffect(() => {
    setTimeout(() => {
      !DataArrived ? setLongLoad(true) : setLongLoad(false);
    }, 10000);
  });
  return (
    <>
      <main style={Style}>
        <div className="w-1/2 height-1/2 m-auto flex justify-center align-center flex-col">
          <TailSpin color="blue" width={100} height={100} className="m-auto" />

          <div className="mt-9 text-red-700">
            {LongLoad ? (
              <>
                <Typography variant="body2">
                  {" "}
                  Page is taking too long to load.{" "}
                </Typography>
                <Typography variant="body2">
                  {" "}
                  Please reload to help fix the issue
                </Typography>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </>
  );
}

const Style = {
  minHeight: "100vh",
  width: "100%",
};
