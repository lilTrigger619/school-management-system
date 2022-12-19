import { configureStore } from "@reduxjs/toolkit";
import questions from "./pages/quiz/quizSlice";
import Auth from "./pages/login/loginSlice";
import Form from "./pages/register/registerSlice";
import StudentRouteUiSlice from "./pages/StudentRoute/reducers/uiReducer";
import DashboardData from "./pages/dashboard/dashboardSlice";
import RegisterStudent from "./pages/register/registerStudent/registerStudentSlice";
import Layout from "./managementLayout/layoutSlice";
import GlobalState from "./globalSlice";

export default configureStore({
  reducer: {
    Layout,
    questions,
    Auth,
    Form,
    StudentRouteUiSlice,
    DashboardData,
    RegisterStudent,
    GlobalState,
  },
});
