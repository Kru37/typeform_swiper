import React from 'react'
import { Mousewheel, Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import './Typeform.css'
import Intro from './slides/Intro';
import SingleLineQuestion from './slides/SingleLineQuestion';


const Typeform = () => {
  return (

    <Swiper
    style={{ height: "100vh" }}
     direction={"vertical"}
 
     autoplay = {false}
     mousewheel={{
      forceToAxis: true
    }}
     modules = {[ Mousewheel]}
     className="mySwiper"
     tabIndex={0}
    >
        <SwiperSlide><Intro/></SwiperSlide>
        <SwiperSlide><SingleLineQuestion number = {1} question = "What's your first name? *"/></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default Typeform