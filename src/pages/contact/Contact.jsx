/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import MyContext from "../../context/Context";

const Contact = () => {
  
  return (
    

    <div className="container mx-auto md:p-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4 ">
          <h1 className="text-2xl font-bold">CONTACT DETAILS</h1>
          <div>
            <strong>Email:</strong>
            <span> info@Sudur.com</span>
          </div>
          <div>
            <strong>Address:</strong>
            <span> Koteshor,Kathmandu</span>
          </div>
          <div>
            <strong>Website:</strong>
            <span> https://www.Sudur.com</span>
          </div>
          <div>
            <strong>Phone:</strong>
            <span> 9806406251/98869233005</span>
          </div>
          <div>
            <strong>Sudur Hub Marketplace Pvt.Ltd</strong>
          </div>
          <iframe
            className="h-y-auto max-w-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5631.040437293277!2d85.34045703027411!3d27.676303086081788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f2804a02bf%3A0x85468199859b2d8d!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1689848021756!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <form className="bg-white">
            <div className="border-4">
              <h1 className="text-2xl font-bold">Contact Us</h1>
              <input
                type="text-"
                placeholder="enter your name"
                className="border-2 mx-2 my-3 px-2"
              ></input>
              <input
                type="text"
                placeholder="enter your email"
                className="border-2 mx-2 my-3 px-2"
              ></input>
              <input
                type="text"
                placeholder="Subject"
                className="border-2 mx-2 my-3 px-2"
              ></input>
              <div>
                <textarea
                  type="text"
                  placeholder="Message"
                  className="border-2  mx-2 my-3 px-2 py-4"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  className="border-2 mx-2 mt-2 py-2 px-6 btn-waft outline-double bg-red-500"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
