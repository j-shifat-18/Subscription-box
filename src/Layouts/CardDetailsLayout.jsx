import React, { useEffect } from "react";
import Navbar from "../Components/Header/Navbar";
import CardDetails from "../Components/CardDetails/CardDetails";
import Footer from "../Components/Footer/Footer";
import ReviewSection from "../Components/CardDetails/ReviewSection";
import { useLocation } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const CardDetailsLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.loginSuccess) {
      toast.success("Logged in Successfully");
    }
  });
  return (
    <div>
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
