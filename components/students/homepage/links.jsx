import { Button } from "@material-ui/core/";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const Link = () => {
  const Styles = useStyles();
  const isMobile = useSelector((state) => state.StudentUi.isMobile);
  console.log(isMobile);
  return (
    <>
      <div className={`w-full my-12 ${Styles.btn_container}`}>
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row"
          } flex-wrap  justify-around items-between`}
        >
          <Link>
            <a>Account</a>
          </Link>
          <Link>
            <a>Results</a>
          </Link>
          <Link>
            <a>All_Staff</a>
          </Link>
          <Link>
            <a>All_Students</a>
          </Link>
          <Link>
            <a>About Class</a>
          </Link>
          <Link>
            <a>Anon message</a>
          </Link>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  btn_container: {
    maxHeight: "50rem",
  },
}));
export default Link;
