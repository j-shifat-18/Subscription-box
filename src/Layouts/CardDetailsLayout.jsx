import React, { useEffect } from "react";
import Navbar from "../Components/Header/Navbar";
import CardDetails from "../Components/CardDetails/CardDetails";
import Footer from "../Components/Footer/Footer";
import ReviewSection from "../Components/CardDetails/ReviewSection";
import { useLocation } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading/Loading";

const CardDetailsLayout = () => {
  const location = useLocation();

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
        <title>Home | Subscription Box</title>
      </Helmet>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-11/12 mx-auto my-24">
        <CardDetails></CardDetails>
        <ReviewSection></ReviewSection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CardDetailsLayout;
