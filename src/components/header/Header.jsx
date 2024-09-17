/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/images/nablogo.png";
import { GoSearch } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/Md";
// import {GoShareAndroid} from "react-icons/go";
import { NavLink } from "react-router-dom";
import MyContext from "../../context/Context";

const Header = () => {
  // const {count,updateCount}= useContext(MyContext);
  const count= useContext(MyContext);
  console.log(count);
  return (
    <>
      <div className='flex justify-between border-30 m-30 ...'>
    <div className='flex pl-5 h-5 '>
      <div className=" font-sans flex" />
      <div className="flex-auto my-3 mx-3 space-x-3..."></div>
      <div>
        <NavLink to="/" activeClassName="active">
          <img
            src={Logo}
            className="h-12 w-40 pr-5  border-rose-500"
            alt="img logo"
          />
        </NavLink>
      </div>
      <div className="flex  my-3 mx-3  justify-center absolute left-32 top-1 w-90 right-32">
        <input
          type="text"
          placeholder="i'm searching for..."
          className=" border-2  p-2 m-1 w-75 h-9 my-3"
        />
        <button className="border h-9 flex relative top-1 right-1 py-2 px-2 bg-pink-300 w-10 my-2.5 ">
          <GoSearch />
        </button>
        <div />
        <div className="flex items-center ml-2">
          <div className="flex items-center">
            <MdFavoriteBorder  className="h-6 w-6 text-gray-700" />
            <span className="ml-1 text-gray-700">Wishlist</span>
          </div>
          <div className="ml-4">
            <button className="relative">
              <FaCartShopping className="h-6 w-6 text-gray-700" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full">
                {count}
              </span>
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Header;
