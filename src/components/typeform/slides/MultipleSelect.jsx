import React, { useState } from "react";
import { optionList } from "../../../data/data";
import Question from "../../../utils/question/Question";
import styles from "./MultipleSelect.module.css";
import { useSwiper } from "swiper/react";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import ButtonContainer from "../../../utils/button/ButtonContainer";
import Error from "../../../utils/error/Error";
const MultipleSelect = (props) => {
  const [value, setValue] = useState();
  const [isError , setError] = useState(false)
  const swiper = useSwiper();
//   HANDLES THE OPTION CLICKED 
  const handleSelect = (currentValue) => {
    setValue(currentValue);
    setError(false)
    setTimeout(() => {
      swiper.slideNext();
    }, 1000);
  };
 const nextSlide = () => {
    if(!value){
        setError(true)
    }else{
        swiper.slideNext();
    }
 }
  return (
    <div className={styles["multipleSelect-container"]}>
      {/* Question */}
      <Question number={props.number} question={props.question} />
      {/* Info */}
      {props.children}
      {/* Option List */}
      <div className={styles.optionList}>
        {optionList.map((data) => {
          return (
            //single list item
            <div
              key={data.key}
              className={`${styles["optionList-item"]} ${
                data.value === value ? styles["optionList-item-active"] : ""
              }`}
              onClick={() => handleSelect(data.value)}
            >
              <div className={styles["optionItemLabel"]}>
                <div className={styles["key-wrapper"]}>
                  <span>{data.key}</span>
                </div>
                <div className={styles.optionValue}>
                  <span>{data.value}</span>
                </div>
              </div>
              <div className={styles.checkbox}>
                {data.value === value ? (
                  <MdOutlineRadioButtonChecked />
                ) : (
                  <MdOutlineRadioButtonUnchecked />
                )}
              </div>
            </div>
          );
        })}
      </div>
         {/*if error is present error component will be shown else button container*/}
         { isError ? <Error/> : <ButtonContainer btnText = "OK" nextSlide = {nextSlide}/>}
    </div>
  );
};

export default MultipleSelect;
