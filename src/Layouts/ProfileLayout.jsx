import React from "react";
import Navbar from "../Components/Header/Navbar";
import { useLocation } from "react-router";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";

const ProfileLayout = () => {
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
      <main>
        <h2>Profile section</h2>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProfileLayout;
