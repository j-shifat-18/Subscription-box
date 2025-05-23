import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import logo from '../../assets/subscription-box-logo.png'

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/wishList">Wish List</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success('Logged Out Successfully');
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl md:text-2xl  lg:text-3xl font-bold ml-4 flex items-center gap-1">
          <img className="w-6 md:w-8 lg:w-10" src={logo} alt="" />
          Subscription<span className=" text-red-600">Box</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex flex-col md:flex-row md:items-center  gap-4 items-end object-cover">
        {user ? (
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={user.photoURL}
          ></img>
        ) : (
          <></>
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline border-primary hover:bg-primary hover:text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-outline border-primary hover:bg-primary hover:text-white"
          >
            Login
          </Link>
        )}
      </div>
    </nav>

  );
};

export default Navbar;
