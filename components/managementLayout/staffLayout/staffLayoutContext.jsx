import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import GlobalAuthContext from "../../globals/authContext";

const StaffLayoutContext = ()=>{

  return(
    <>
      <GlobalAuthContext/>
    </>
  );
};

export default StaffLayoutContext;
