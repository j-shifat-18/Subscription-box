import React, { use } from "react";
import Navbar from "../Components/Header/Navbar";
import { useLocation } from "react-router";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import UserProfile from "../Components/UserProfile/UserProfile";
import Loading from "../Components/Loading/Loading";

const ProfileLayout = () => {
  const location = useLocation();

  const {user } = use(AuthContext);

  useEffect(() => {
    if (location.state?.loginSuccess) {
      toast.success("Logged in Successfully");
    }
  });



  const {loading}=use(AuthContext);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <Helmet>
        <title>My Profile | Subscription Box</title>
      </Helmet>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-11/12 mx-auto my-24">
        {
          user ? <UserProfile user={user}></UserProfile>:<div>no user here</div>
        }
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProfileLayout;
