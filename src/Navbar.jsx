import React from "react";
import { Route } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import Banner from "./Banner";

const Navbar = () => {
  return (
    <div className="bg-primary text-white h-[600px] rounded-lg">
      <div className="navbar w-10/12 mx-auto shadow-sm">
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
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Statistics</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3">
          <div className="bg-white rounded-full p-1">
          <LuShoppingCart className="text-black "></LuShoppingCart>
          </div>
          <div  className="bg-white rounded-full p-1">
          <CiHeart className="text-black"></CiHeart>
          </div>
          </div>
        </div>
      </div>
      {/* banner */}
      <Banner></Banner>
    </div>
  );
};

export default Navbar;
