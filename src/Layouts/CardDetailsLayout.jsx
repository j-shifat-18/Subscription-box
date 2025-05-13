import React from "react";
import Navbar from "../Components/Header/Navbar";
import CardDetails from "../Components/CardDetails/CardDetails";
import Footer from "../Components/Footer/Footer";
import ReviewSection from "../Components/CardDetails/ReviewSection";

const CardDetailsLayout = () => {
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
    </div>
  );
};

export default CardDetailsLayout;
