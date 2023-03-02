import React from 'react'

//css
import '../components/Experience.css'
import Plcards from './Plcards'

//PLICONS
import react from '../assets/images/react.png'
import csharp from '../assets/images/csharp.png'
import javascript from '../assets/images/js.png'
import css from '../assets/images/css.png'
import htmlcss from '../assets/images/html5.png'
import mysql from '../assets/images/mysql.png'
import python from '../assets/images/python.jpeg'

//css
import '../components/Experience.css'

//swipper configuration

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules



const Experience = () => {
  return (

    <div className='baslik'>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        className="mySwiper"
      >
    
    
    <div className="king">
        <SwiperSlide><Plcards plPhoto={javascript}/></SwiperSlide>
        <SwiperSlide><Plcards plPhoto={react}/></SwiperSlide>
        <SwiperSlide><Plcards plPhoto={csharp}/></SwiperSlide>
        <SwiperSlide><Plcards plPhoto={mysql}/></SwiperSlide>
        <SwiperSlide><Plcards plPhoto={python}/></SwiperSlide>
    </div>
    </Swiper>

    </div>
  )
}

export default Experience