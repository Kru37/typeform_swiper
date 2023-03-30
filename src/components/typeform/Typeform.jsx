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
import { useDispatch, useSelector } from "react-redux";
import { formAction } from "../../store/formSlice";
import { founderGoal, industriesList, optionList, otherGoals } from "../../data/data";
import MultipleSelect from "./slides/MultipleSelect";


const Typeform = () => {
  const [isAllowedNext, setisAllowedNext] = useState(true);
  const formData = useSelector((state) => state.typeform.formData)
  const dispatch = useDispatch();
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
  // const firstMove = (swiper) => {
  //   console.log("move");
  //   // const swiper = swipeRef.current.swiper
  //   // gets the active slide
  //   const inputSlide = swiper.slides[swiper.activeIndex];
  //   if (inputSlide.querySelector("input")) {
  //     // get the input value
  //     const inputValue = inputSlide.querySelector("input").value;
  //     // if value is not there disables next slide .
  //     if (!inputValue) {
  //       setisAllowedNext(false);
  //     } else {
  //       setisAllowedNext(true);
  //     }
  //   }
  //   // if the slide is first slide enable next
  //   if (swiper.activeIndex === 0) {
  //     setisAllowedNext(true);
  //   }
  // };

  const firstMove = (swiper) => {
    // const swiper = swipeRef.current.swiper
    // gets the active slide
  
  
    if (swiper.activeIndex > 0) {
      //Get the index
      const index = swiper.activeIndex - 1
   // Covert the object into value array
      const values = Object.values(formData)
      // get the input value
    
      // if value is not there disables next slide .
      if (!values[index]) {
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
  // To hide industry list when clicked outside options container
  const hideList = (e) => {
    if (!e.target.closest(".input-options-container")) {
      dispatch(formAction.changeListstatus(false));
    }
  };
  const changeAllowance = (status) => {
    setisAllowedNext(status);
  };
  // const handleWheel = (e) => {
  //   if(e.target.querySelector('input')){
  //      const name = e.target.querySelector('input').getAttribute('name')
  //      if(name !== 'industry'){
  //         if(!e.target.querySelector('input').value){
  //           setisAllowedNext(false)
  //         }else{
  //           setisAllowedNext(true);
  //         }
  //      }else{
  //          const value = e.target.querySelector('input').value;
  //          if(industriesList.includes(value)){
  //           setisAllowedNext(true)
  //          }else{
  //           setisAllowedNext(false)
  //          }
  //      }

  //   }

  // }
  // const handleIndexChange = () => {
  //   setisAllowedNext(false)
  //   setisWheeled(false)
  // }

  // mousewheel pagination check
//   <Swiper
//   style={{ height: "100vh" }}
//   direction={"vertical"}
//   autoplay={false}
//   mousewheel={{
//     forceToAxis: true,
//     thresholdDelta: 100,
//     thresholdTime: 3000,
//   }}
//   modules={[Mousewheel, Pagination]}
//   onSliderFirstMove={firstMove}
//   allowSlideNext={isAllowedNext}
//   className="mySwiper"
//   tabIndex={0}
// >
  return (
    <Swiper
      style={{ height: "100vh" }}
      direction={"vertical"}
      autoplay={false}

      modules={[ Pagination]}
      onSliderFirstMove={firstMove}
      allowSlideNext={isAllowedNext}
      className="mySwiper"
     
    >
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <SingleLineQuestion
          number={1}
          question="What's your first name? *"
          name="firstName"
          type="text"
          isAllowedNext={isAllowedNext}
          changeAllowance={changeAllowance}
          placeholder="Type your answer here..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <SingleLineQuestion
          number={2}
          question="What's your last name? *"
          name="lastName"
          type="text"
          isAllowedNext={isAllowedNext}
          changeAllowance={changeAllowance}
          placeholder="Type your answer here..."
        />
      </SwiperSlide>
      <SwiperSlide onClick={hideList}>
        <SelectionQuestion
          number={3}
          question="What industry is your company in? *"
          name="industry"
          isAllowedNext={isAllowedNext}
          changeAllowance={changeAllowance}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MultipleSelect
          type="single"
          number={4}
          question="Your role in your company? *"
          name="role"
          isAllowedNext={isAllowedNext}
          optionList = {optionList}
          changeAllowance={changeAllowance}
        >
          <div className="moreInfo">
            <p>We want to understand how you spend your time right now.</p>
            <br />
            <p>
              [🔴{" "}
              <em>
                DEVELOPER NOTICE: Options in the questions ahead depend on this
                question's response/s.{" "}
              </em>
              ]
            </p>
          </div>
        </MultipleSelect>
      </SwiperSlide>
      <SwiperSlide>
        <MultipleSelect
          type="multiple"
          number={5}
          question="what's your professional goal for the next 12 months? *"
          name="goal"
          isAllowedNext={isAllowedNext}
          changeAllowance={changeAllowance}
          optionList = {formData.role === "Founder or CXO" ? founderGoal : otherGoals}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SingleLineQuestion
          number={6}
          question="Email you'd like to register with? * "
          name="email"
          isAllowedNext={isAllowedNext}
          changeAllowance={changeAllowance}
          placeholder="name@example.com"
          type="email"
        >
          <div className="moreInfo">
            <p>
              We will keep all our communications with you through this email.
              Do check your spam inbox if you can't find our application
              received email.
            </p>
            <br />
            <p>
              [🔴{" "}
              <em>
                DEVELOPER NOTICE: Responses submitted to this form will be
                forwarded to the email you input here, for you to test data
                submissions.{" "}
              </em>
              ]
            </p>
          </div>
        </SingleLineQuestion>
      </SwiperSlide>

   
    </Swiper>
  );
};

export default Typeform;
