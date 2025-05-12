import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slider/Slider";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
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
