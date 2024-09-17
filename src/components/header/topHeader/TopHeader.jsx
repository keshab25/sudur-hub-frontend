/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import  { FaWhatsapp } from "react-icons/fa6"
import  { FaViber } from "react-icons/fa"
import  { FaMobileAlt } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";
import { setLogout } from '../../../redux/features/authSlice';
import { toast } from 'react-toastify';
import decode from "jwt-decode";

const TopHeader = ({isAuthenticated,user}) => {
  
  const userToken = localStorage.getItem("token")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShownDropDown,setIsShownDropDown] = useState(false)

 

  useEffect(()=>{
  if(userToken){
    const decodedToken = decode(userToken)
    if(decodedToken.exp *1000 < new Date().getTime()){
      dispatch(setLogout())
      toast.warning("your session has been expired, login first")
      navigate("/login")
    }
  }
})
  const handleLogout = ()=>{
    dispatch(setLogout());
    navigate("/");
    toast.success("logout successFully!");
  };
  return (
    <>
      <div className='flex justify-between border-2 m-30  ...'>
    <div className='flex pl-5 h-5 '>
    <FaWhatsapp className='h-8'/>
   <span className='h-4 pl-1 pr-1'>|</span> <FaViber className='h-8' />
    <span className='pl-1 text-slate-600 '>9806406251/9865574728</span>
    </div>
    <div>
        <div className='flex justify-between  ...' >
        <span className='flex pl-5 pr-5 text-slate-600 '>Sudur Rewards</span>
        <span className='flex pl-5 pr-5 text-slate-600 '>Delivery option</span>
        
       <div className='relative'>
        {isAuthenticated ? (
          <div className='flex items-center'>
            <button className='flex items-center space-x-2 focus:outline-none' onClick={()=>setIsShownDropDown(!isShownDropDown)}>
            <img src={user?.avatar?.url} alt="avatar Img" className='w-8 h-8 rounded-full'/>
            <span>{user.fullName}</span>
            </button>

            {isShownDropDown && (
              <div className='fixed z-10 mt-12 top-0 bg-white w-44 shadow rounded-sm'>
                <ul className='py-2'>
                  <li className='px-4 py-2'>
                    <NavLink to="/profile" className="no-underline text-gray-500">profile</NavLink>
                  </li>
                  <li className='px-4 py-2'>
                    <NavLink to="/my-orders" className="no-underline text-gray-500">my orders</NavLink>
                  </li>
                  <li className='px-4 py-2'>
                    <NavLink to="/cart-details" className="no-underline text-gray-500">my cart</NavLink>
                  </li>
                  <li className='px-4 py-2'>
                    <NavLink to="/change/password" className="no-underline text-gray-500">Change Password</NavLink>
                  </li>
                  {user && user.role === "admin" &&(
                    <li className='px-4 py-2'>
                    <NavLink to="/admin-hamrobazar-dashboard-panel" className="no-underline text-gray-500">admin dashboard</NavLink>
                  </li>
                  )}
                  <li className='px-4 py-2'>
                    <button onClick={handleLogout} className='text-gray-500 hover:text'>
                      Logout
                      </button>
                  </li>
                </ul>

              </div>
            )}
          </div>
         
        ):(
          <NavLink to="/login">
          <span className='flex pl-5 pr-5 text-slate-600 '>Login/Register</span>
          </NavLink>
        )}
       </div>
        
        <div className='flex pt-1 text-slate-600  pr-5' >
         <FaMobileAlt />
        </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default TopHeader;
