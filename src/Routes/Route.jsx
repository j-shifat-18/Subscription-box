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
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <ProfileLayout></ProfileLayout>
      </PrivateRoute>
    ),
  },
]);
