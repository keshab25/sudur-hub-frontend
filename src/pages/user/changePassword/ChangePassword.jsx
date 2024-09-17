import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword, clearError } from '../../../redux/features/authSlice';
import { toast } from 'react-toastify';
import Spinner from "react-bootstrap/Spinner";
const ChangePassword = () => {
  const{loading, error} = useSelector((state)=>state.auth)
  const dispatch =useDispatch();
  const navigate = useNavigate();
  
  const [passwordValue,setPasswordValue] = useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword: "",
});

const [passwordErr, setPasswordErr] = useState({});
const {oldPassword, newPassword, confirmPassword} = passwordValue

const validatedForm = () => {
  let newErrors = {};
  
  if (!oldPassword) {
    newErrors.oldPassword = "oldPassword is required";
  } 

  if (!newPassword) {
    newErrors.newPassword = "newPassword is required";
  } else if (newPassword.length < 8) {
    newErrors.newPassword = "newPassword must be 8 character long";
  }
  if(!confirmPassword){
    newErrors.confirmPassword = "confirmPassword is required";
  }else if(newPassword !==confirmPassword){
    newErrors.confirmPassword = "password must be match!";

  }
  setPasswordErr(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleChange = (e) => {
  let {name,value} = e.target;
  setPasswordValue({...passwordValue,[name]:value})
};

const handleSubmit = (e)=>{
  e.preventDefault();
  if(validatedForm()){
    dispatch(changePassword({passwordValue, toast, navigate}));
  } else{
    return toast.warning("Invalid Input!");
  }
};

useEffect(()=>{
if(error){
  toast.error(error);
  dispatch(clearError());
}
},[dispatch,error])


  return (
    <>
      <div className='bg-[#F5F5F5] py-2 my-4'>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
  <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label
        htmlFor="fullName"
        className="block text-sm font-medium text-gray-700"
      >
        oldPassword
      </label>
      <input
        type="password"
        id="oldPassword"
        name="oldPassword"
        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
        value={oldPassword}
        onChange={handleChange}
      />
      {passwordErr && (
                <span className="text-red-500 text-sm">
                  {passwordErr.oldPassword}
                </span>
              )}
    </div>
    
    
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        newPassword
      </label>
      <input
        type="password"
        id="newPassword"
        name="newPassword"
        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
        value={newPassword}
        onChange={handleChange}
      />
      {passwordErr && (
                <span className="text-red-500 text-sm">
                  {passwordErr.newPassword}
                </span>
              )}
       
    </div>
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"

      >
       confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
        value={confirmPassword}
        onChange={handleChange}
      />
      {passwordErr && (
                <span className="text-red-500 text-sm">
                  {passwordErr.confirmPassword}
                </span>
              )}
         
    </div>
    
    <div className="mt-4">
      <button
        type="submit"
        className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleChange}
      >
        {loading && <Spinner animation="border" size="sm" />}Change Password
      </button>
    </div>
    
    </form>
    </div>
    </div>
    </>
  )
}

export default ChangePassword
