import React from 'react'
import { Link } from 'react-router-dom'

const TopPicks = ({product}) => {
  return (
    <>
      <div className='bg-[#FFF] flex flex-col items-center p-4 space-y-2'>
        <Link to={`/product/details/${product._id}`}>
        <img 
        className='  w-full h-32 object-cover rounded-md mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:mb-4 cursor-pointer' src={product?.productImg?.url} alt={product.productName} />
        <h2 className='text-xl font-thin'>{product?.productName}</h2>
        <p className='font-bold'>Rs.{product?.price}.00</p>
        </Link>
      </div>
    </>
  )
}

export default TopPicks
