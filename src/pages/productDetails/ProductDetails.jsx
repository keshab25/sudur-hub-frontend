import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Loader from "../../components/layout/loader/Loader";
import { clearError, singleProduct } from "../../redux/features/productSlice";
import ReactStars from "react-rating-stars-component";
const ProductDetails = () => {
  const [quantity,setQuantity]= useState(0);
  const { product, loading, error } = useSelector((state) => state.product);
  const options = {
    edit: false,
    color: "#",
    activeColor: "#ffd707",
    size: window.innerWidth < 600 ? 12 : 16,
    value: product.ratings,
    isHalf: true,
  };

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    dispatch(singleProduct(id));
  }, [dispatch, error, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="conatiner bg-base  min-h-screen text-sm justify-center mx-auto md:flex border border-sky-500 py-10">
            <div className="border border-sky-500 grid-cols-6 my-10 px-10">
              <img src={product?.productImg?.url} alt={product.productName} />
            </div>
            <div className="border border-sky-500 my-10 px-20">
              <h1>{product?.productName}</h1>
              <div className="flex items-center mb-2">
                <div className="mr-2">
                  <span className="text-yellow-500">
                    <ReactStars {...options} />
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">customer reviews</span>
                </div>
              </div>
              <div className="flex py-2 border-b border-t my-3">
                <span className="original_price text-md  block mr-4 font-bold">
                  price: Rs.{product?.price}
                </span>
              </div>
              <div>
                <span
                  className={
                    product.isInstock ? "text-green-600" : "text-red-500"
                  }
                >
                  {product.isInstock ? "In stock" : "out of stock"}
                </span>
              </div>
              <div>
        <label for="points">Qty:</label>
      <input type="number" value={quantity} onChange={(e)=>setQuantity(parseInt(e.target.value))} id="points" name="points" step="1" className='border-2 rounded my-2'></input>
      </div>
      <div className='flex justify-start my-2'>
      <button className='bg-red-600 rounded px-2 mx-2 py-1 w-40 hover:bg-red-500'>
        Add To Cart
        </button>
      <button className='bg-green-500 rounded px-2 mx-2 py-1 w-40 '>
        Buy Now
        </button>
      </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
