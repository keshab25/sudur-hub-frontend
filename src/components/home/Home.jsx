/* eslint-disable no-unused-vars */

import React, {useEffect } from 'react';
import "./Home.css";
import BannerPage from './banner/BannerPage';
import TopPicks from './topPicks/TopPicks';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../../redux/features/productSlice';
import Loader from '../layout/loader/Loader';
import {toast} from "react-toastify";
const Home = () => {
  const {products,loading,error} = useSelector((state)=>state.product);
  console.log(products);
   const dispatch = useDispatch()
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch(clearError());
    }
    dispatch(allProducts());
  },[dispatch,error])
  return(
    <>
    
    <div className=' mt-4'>
       <BannerPage/>
         
      </div> 
      <div className='container  bg-[#F5F5F5] mx-auto  py-8'>
      <h1 className='text-2xl my-3'>On Sale Now</h1>
      {loading ? (<Loader/>): (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {products.map((product,index) =>(
        <TopPicks key={product._id} product={product} />
       ))}
        </div>
        </>
      )}
        
     
      </div>
      </>
  );
};
 
export default Home;
