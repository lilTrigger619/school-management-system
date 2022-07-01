import { configureStore } from "@reduxjs/toolkit";
import questions from "./pages/quiz/quizSlice";
import Auth from "./pages/login/loginSlice";
import Form from "./pages/register/registerSlice";
import StudentUi from "./students/reducers/uiReducer";
import DashboardData from "./pages/dashboard/dashboardSlice";
import RegisterStudent from "./pages/register/registerStudent/registerStudentSlice";
import Layout from "./managementLayout/layoutSlice";

export default configureStore({
  reducer: {
    Layout,
    questions,
    Auth,
    Form,
    StudentUi,
    DashboardData,
    RegisterStudent,
  },
});
