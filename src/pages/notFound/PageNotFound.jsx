/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import pagenotfound from "../../assets/images/pagenotfound.png";
// import CommonPages from '../commonPages/CommonPages';
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <div className="border border-sky-500 m-20 justify-center">
        <div className="  border border-sky-500...">
          <div className="text-center"><h1>Page Not Found</h1></div>
          <div className="flex justify-center">
          <img src={pagenotfound} alt="pagenotfound" />
          </div>
          
          <p className="text-center">Oops! The page you are looking for does not exist.</p>
          <div className="flex justify-center">
          <Link to="/" className=" no-underline">Go back to home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
