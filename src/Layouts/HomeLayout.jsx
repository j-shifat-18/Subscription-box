import React, { use } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slider/Slider";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading/Loading";

const HomeLayout = () => {

  const {loading}=use(AuthContext);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-11/12 mx-auto">
        <Slider></Slider>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
