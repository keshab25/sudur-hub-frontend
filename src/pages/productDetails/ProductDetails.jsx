import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Loader from "../../components/layout/loader/Loader";
import { clearError, singleProduct } from "../../redux/features/productSlice";
import ReactStars from "react-rating-stars-component";
import MyContext from "../../context/Context";
import myKey from "./KhaltiKey.jsx";
import KhaltiCheckout from "khalti-checkout-web";
const ProductDetails = () => {
  const {count,updateCount}=useContext(MyContext);
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
  let config = {
    // replace this key with yours
    "publicKey": "test_public_key_ed99a724e11a41d4bffa9998f4afc113",
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

// let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
//     // minimum transaction amount must be 10, i.e 1000 in paisa.
//     checkout.show({amount: 1000});
// }


let checkout = new KhaltiCheckout(config);
let buttonStyles = {
  backgroundColor: "purple",
  padding: "10px",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
  border: "1px solid white",
};

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
      <input type="number" value={quantity} onChange={
        (e)=>{
          if(parseInt(e.target.value)>=0){
            setQuantity(parseInt(e.target.value))
          }
          
          }} 
          id="points" name="points" step="1" className='border-2 rounded my-2'></input>
      </div>
      <div className='flex justify-start my-2'>
      <button onClick={()=>updateCount(count+quantity)} className='bg-red-600 rounded px-2 mx-2 py-1 w-40 hover:bg-red-500'>
        Add To Cart
        </button>
      {/* <button  className='bg-green-500 rounded px-2 mx-2 py-1 w-40 '>
        Buy Now
        </button> */}
        <button
          onClick={() => checkout.show({ amount:((product.price)*100*quantity)})}
          style={buttonStyles}
        >
          Pay Via Khalti
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
