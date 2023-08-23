import {
  Container,
} from "@material-ui/core";
import StaffLayoutHeader from "./staffHeader";
import StaffLayoutSidebar from "./staffSidebar";

const StaffLayoutView = ({ children }) => {
  return (
    <>
      <StaffLayoutHeader/>
      <StaffLayoutSidebar/>
      <Container maxWidth="md">{children}</Container>
    </>
  );
};


export default StaffLayoutView;
