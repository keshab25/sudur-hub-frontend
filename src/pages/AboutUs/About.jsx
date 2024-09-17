/* eslint-disable no-unused-vars */
import React from 'react'
import AboutImg from "../../assets/images/about2.png";
import CommonPages from '../commonPages/CommonPages';
import MoreAbout from './MoreAbout';



function About() {
  return (
    <>
    <CommonPages title="Sudur Hub"
    subtitle="About"
    desc="We bring to you an online clothes delivery service where you can
    purchase and order your favorite clothes - creating a unique 
    shopping experience without having to hop from one shop or website
    to another looking for your desired fashion. We ambitiously claim to
    deliver 100% quality at your doorstep with complete ease and
    care on the same day or as planned."
    
    desc1="our online shopping sells the latest model of clothes."
    btnView="Learn More"
    imgAbout={AboutImg}
    Visit="/more-info"
    /> 
    <MoreAbout/>        
    </>
  )
}

export default About
