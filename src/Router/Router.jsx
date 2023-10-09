import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Member from "../Components/Member/Member";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
      },
     
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/view-details/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      },
      {
        path: "/member/:id",
        element: <Member></Member>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
    ],
  },
]);

export default Router;
