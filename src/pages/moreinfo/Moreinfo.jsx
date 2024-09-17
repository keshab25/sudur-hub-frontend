/* eslint-disable no-unused-vars */
import React from 'react';
import CommonPages from '../commonPages/CommonPages';
import moreInfo from '../../assets/images/more-info.png';

const Moreinfo = () => {
  return (
    <>
      <CommonPages 
      title="More information"
    desc="We bring to you an online cloths delivery service where you can
    purchase and order your favorite products - creating a unique 
    shopping experience without having to hop from one shop or website
    to another looking for your favourite brand cloths. We ambitiously claim to
    deliver  at your doorstep with complete ease and
    care on the same day or as planned."
    
    desc1="Our online cloths delivery in Kathmandu, Bhaktapur, and Lalitpur
    allows for cross-country purchases enabling you to send
    different brands to your parents, relatives, or friends on
    various occasions from any part of the world. We are here to
    create some unforgettable memories and some undying emotions by
    helping you to send  to your favourite cloths. We invite
    you to celebrate your special occasions with your favorite cloths
    from sudur hub."
    btnView="Explore Our Services"
    imgAbout={moreInfo}
    Visit=""
    />
    </>
  )
}

export default Moreinfo
