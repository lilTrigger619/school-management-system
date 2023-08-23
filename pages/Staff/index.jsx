import { Typography } from "@material-ui/core";
import {StaffLayoutView, StaffLayoutContext} from "../../components/managementLayout/staffLayout/";

const StaffHompage = () =>{
  return(
    <>
      <StaffLayoutContext/>
      <StaffLayoutView>
        <Typography>Hello staff</Typography>
      </StaffLayoutView>
    </>
  )
};

export default StaffHompage;
