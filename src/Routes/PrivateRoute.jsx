import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
  const { user , loading} = use(AuthContext);

  if(loading){
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
