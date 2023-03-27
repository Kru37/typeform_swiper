import React, { useRef, useState } from "react";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "./Typeform.css";
import Intro from "./slides/Intro";
import SingleLineQuestion from "./slides/SingleLineQuestion";
import SelectionQuestion from "./slides/SelectionQuestion";

const Typeform = () => {
  const [isAllowedNext, setisAllowedNext] = useState(true);
  //  const swipeRef = useRef()
  // const nextSlide = () => {
  //   console.log('clicked')
  //   if(swiper){
  //     swiper.slideNext()
  //   }

  // }
  // const changeAllowance = (status) => {

  //   setisAllowedNext(status)
  // }

  // Will be fired when the slide transition starts
  const firstMove = (swiper) => {
    console.log("move");
    // const swiper = swipeRef.current.swiper
    // gets the active slide
    const inputSlide = swiper.slides[swiper.activeIndex];
    if (inputSlide.querySelector("input")) {
      // get the input value
      const inputValue = inputSlide.querySelector("input").value;
      // if value is not there disables next slide .
      if (!inputValue) {
        setisAllowedNext(false);
      } else {
        setisAllowedNext(true);
      }
    }
    // if the slide is first slide enable next
    if (swiper.activeIndex === 0) {
      setisAllowedNext(true);
    }
  };

  return (
    <Swiper
      style={{ height: "100vh" }}
      direction={"vertical"}
      autoplay={false}
      mousewheel={{
        forceToAxis: true,
      }}
      modules={[Mousewheel, Pagination]}
      onBeforeTransitionStart={firstMove}
      onSliderFirstMove = {firstMove}
      allowSlideNext={isAllowedNext}
      className="mySwiper"
      tabIndex={0}
    >
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <SingleLineQuestion
          number={1}
          question="What's your first name? *"
          name="firstName"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <SingleLineQuestion
          number={2}
          question="What's your last name? *"
          name="lastName"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SelectionQuestion
          number={3}
          question="What industry is your company in? *"
          name="industry"
        />
      </SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default Typeform;
