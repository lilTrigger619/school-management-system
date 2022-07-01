import axios from "axios";

const RefreshToken = async () => {
  //refres the token incase the response says unauthorized
  let Response;
  try {
    const Url = "api/auth";
    const ApiRes = await axios.get(Url);
    Response = await ApiRes;
  } catch (err) {
    Response = await err;
  }

  return Response;
};

const Logout = async () => {
  let Response;
  try {
    const Url = "api/logout";
    const ApiRes = await axios.get(Url);
    Response = await ApiRes;
  } catch (err) {
    Response = await err;
  }

  return Response;
};

const Request = async (data) => {
  //the base request of all requests.
  let Response;
  try {
    const Body = { Data: data };
    const ApiRes = await axios.post("/api/req/dashboard/", Body);
    Response = await ApiRes;
  } catch (err) {
    Response = await err;
  }
  return Response;
};

const GetAllStaff = async ({ getAllStaff, logout }) => {
  //hit the server side of nextjs app to get staff data
  // to populate the table.
  let Response;
  const Body = JSON.stringify(getAllStaff);
  const ApiRes = await Request(getAllStaff);

  if (ApiRes.status != 200) {
    //Logout();
    Response = "Logged_out";
  } else {
    //if the first request returns 200 ok.
    Response = await ApiRes;
  }
  return Response;
};

const GetAllStudent = async ({ getAllStudents }) => {
  //hit the server side of nextjs app to get students data
  // to populate the table.
  let Response;
  const Body = JSON.stringify(getAllStudents);
  const ApiRes = await Request(Body);

  if (ApiRes.status != 200) {
    //Logout();
    Response = "Logged_out";
  } else {
    //if the first request returns 200 ok.
    Response = await ApiRes;
  }
  return Response;
};

//getUser but it's deprecated cus it the user is going to
//be attained from th request from Django.
const GetUser = async ({ getUser }) => {
  //hit the server side of nextjs app to get students data
  // to populate the table.
  let Response;
  const Body = JSON.stringify(getUser);
  const ApiRes = await Request(Body);

  if (ApiRes.status != 200) {
    //Logout();
    Response = "Logged_out";
  } else {
    //if the first request returns 200 ok.
    Response = await ApiRes;
  }
  return Response;
};

export { GetUser, GetAllStaff, GetAllStudent };
