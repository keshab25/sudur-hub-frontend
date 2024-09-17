/* eslint-disable no-unused-vars */
import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import GooglePlay from "../../assets/images/google.png";
import AppStore from "../../assets/images/appstore.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="font-sans bg-gray-200 py-8 my-10 ">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-600 text-lg font-semibold mb-4">
              Inside Deals and Offers !!
            </h2>
            <div className="flex flex-col">
              <Link>
                <div className="mb-2">
                  <img
                    src={GooglePlay}
                    alt="Google Pay"
                    className="h-8 md:h-12 inline rounded-md shadow-md"
                  />
                </div>
              </Link>
              <Link>
                <div>
                  <img
                    src={AppStore}
                    alt="App Store"
                    className="h-8 md:h-12 inline rounded-md shadow-md"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-600 text-lg font-semibold mb-4">Links</h2>
            <ul className="text-gray-600">
              <li className="mb-2 ">
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-orange-400 no-underline"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-orange-400 no-underline "
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to=""
                  className="text-gray-600 hover:text-orange-400 no-underline"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to=""
                  className="text-gray-600 hover:text-orange-400 no-underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-600 hover:text-orange-400 no-underline"
                >
                  Hiring
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-600 text-lg font-semibold mb-4">
              Policies
            </h2>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link
                  to=""
                  className="text-gray-600 hover:text-pink-400 no-underline"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to=""
                  className="text-gray-600 hover:text-pink-400 no-underline"
                >
                  Return Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to=""
                  className="text-gray-600 hover:text-pink-400 no-underline"
                >
                  Data Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to=""
                  className="text-gray-600 hover:text-pink-400 no-underline"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-600 hover:text-pink-400 no-underline"
                >
                  G-Cash Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-600 text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <ul className="text-gray-600 ">
              <Link to="" className="no-underline">
                <li className="mb-2 flex items-center text-gray-600 no-underline">
                  <FaPhone className="mr-2 " />
                  <span className="no-underline">123-456-7890/9861315260</span>
                </li>
              </Link>
              <Link to="" className="no-underline text-gray-600">
                <li className="mb-2 flex items-center">
                  <FaEnvelope className="mr-2 " />
                  <span>info@Sudur.com</span>
                </li>
              </Link>
              <li className="flex items-center">
                <Link>
                  <SiFacebook className="mr-2 text-blue-500" />
                </Link>
                <Link>
                  <SiTwitter className="mr-2 text-blue-700" />
                </Link>
                <Link>
                  <SiInstagram className="text-red-400" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-center">
            Copyright © 2021{" "}
            <Link
              className="no-underline text-pink-400 hover:text-pink-500"
              to="/"
            >
              Sudur Hub
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
