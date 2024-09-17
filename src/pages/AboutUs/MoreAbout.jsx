/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Banner from "../../assets/images/moreabout.png";
import { Link } from 'react-router-dom';
import DetailsInfo from './DetailsInfo';
const MoreAbout = () => {
  const [showMore,setShowMore] = useState(false)
  const handleDetails = ()=>{
    setShowMore(true)

  }
  return (
    <>
    <div className="font-sans px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={Banner}
              alt="SUDUR HUB"
              className="w-full h-full max-w-md object-contain animate-moveUpDown"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
               <span className="text-orange-500">More About</span>
            </h2>
            <p className="mb-4 text-gray-700">Sudur Hub is an innovative and dynamic e-commerce platform that has rapidly emerged as a market leader in the online shopping industry. With a vast array of products spanning diverse categories, including electronics, fashion, home appliances, beauty, and more, Sudur Hub offers customers a one-stop shopping destination for all their needs. The user-friendly interface and seamless navigation make browsing through the extensive product catalog a breeze.As a result, Sudur Hub has earned the trust of millions of satisfied customers and continues to revolutionize the e-commerce landscape.</p>
           
            <Link
              
              className="inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
              onClick={handleDetails}
            >
              <button>About Our Company</button>
            </Link>
          </div>
        </div>
       {showMore ? <DetailsInfo /> : ""}
      </div>
    </>
  )
}
export default MoreAbout