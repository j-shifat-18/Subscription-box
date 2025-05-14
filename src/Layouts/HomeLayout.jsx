import React, { use, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slider/Slider";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import Benifits from "../Components/Benifits/Benifits";

const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.loginSuccess) {
      toast.success("Logged in Successfully");
    }
  }, [location]);

  const { loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-11/12 mx-auto">
        <Banner></Banner>
        <Slider></Slider>
        <Outlet></Outlet>
        <Benifits></Benifits>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HomeLayout;
