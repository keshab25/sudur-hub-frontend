/* eslint-disable no-unused-vars */
import React from 'react'
import { DataServices } from './Data'
const Services = () => {
  return (
    <>
    <div className="font-sans px-6 py-10s mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-15 lg:py-18 ">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <div className="flex flex-wrap -mx-2">
        {DataServices.map((value,index)=>(
           <>
           <div
              key={value.id}
              className="bg-white rounded-lg shadow-md p-2 md:p-4 w-64 mb-2 sm:mb-4 px-4 mx-2"
            >
              <img
                src={value.image_url}
                alt={value.title}
                className="w-full h-32 object-cover rounded-md mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:mb-4 cursor-pointer"
                style={{ objectFit: "cover" }}
              />
              <h2 className=" text-gray-500 hover:text-orange-500 cursor-pointer">
                {value.title}
              </h2>
              <h4 className="mt-2 text-gray-800">{value.description}</h4>
            </div>
            </>
        ))}
      </div>
    </div>
    </>
  )
}
export default Services
