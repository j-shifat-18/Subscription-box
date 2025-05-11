import {
  createBrowserRouter,
} from "react-router";
import Home from "../Components/Home/Home";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProfileLayout from "../Layouts/ProfileLayout";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        }
    ]
  },
  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[
        {
            path:"/auth/login",
            element:<Login></Login>
        },
        {
            path:"/auth/register",
            element:<Register></Register>
        }
    ]
  },
  {
    path:"profile",
    element:<ProfileLayout></ProfileLayout>,
  }
]);