import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProfileLayout from "../Layouts/ProfileLayout";
import ForgotPassword from "../Pages/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import SubscriptionBoxes from "../Components/SubscriptionBoxes/SubscriptionBoxes";
import Loading from "../Components/Loading/Loading";
import CardDetailsLayout from "../Layouts/CardDetailsLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <SubscriptionBoxes></SubscriptionBoxes>,
        loader: () => fetch("/subscriptionData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/category/:id",
    element: (
      <PrivateRoute>
        <CardDetailsLayout></CardDetailsLayout>
      </PrivateRoute>
    ),
    loader: () => fetch("/subscriptionData.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
  {
    path: "profile",
    element: (
      <PrivateRoute>
        <ProfileLayout></ProfileLayout>
      </PrivateRoute>
    ),
  },
]);
