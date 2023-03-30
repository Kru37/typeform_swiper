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
import { useDispatch } from "react-redux";
import { formAction } from "../../../store/formSlice";
const MultipleSelect = (props) => {
  const [value, setValue] = useState([]);
  const [isError , setError] = useState(false)
  const swiper = useSwiper();
  const dispatch = useDispatch()
//   HANDLES THE OPTION CLICKED 
  // const handleSelect = (currentValue) => {
  //   if(props.type === 'single'){
  //      setValue([currentValue])
  //   }
  //   setValue(currentValue);
  //   dispatch(formAction.addData({name: props.name , value : currentValue}))
  //   setError(false)
  //   setTimeout(() => {
  //     swiper.slideNext();
  //   }, 1000);
  // };
  const handleSelect = (currentValue) => {
    if(props.type === 'single'){
       setValue([currentValue])
       dispatchFuction([currentValue])
    }else{
      let newValue = [...value]
      if(newValue.length === 2){
        if(newValue.includes(currentValue)){
          console.log('dd')
          const index = newValue.indexOf(currentValue)
          newValue.splice(index , 1)
          setValue(newValue)
          return
        }
      }
      if(newValue.length < 2){
         if(!newValue.includes(currentValue)){
          newValue = [...newValue , currentValue]
           if(newValue.length === 2 ){
            console.log(newValue)
            dispatchFuction(newValue)
            dispatch(formAction.setProgress())
           }
         }else{
         
          const index = newValue.indexOf(currentValue)
          newValue.splice(index , 1)
          console.log(newValue , 'dd')
         }
         setValue(newValue)
      }
     
    }

  };
  const dispatchFuction = (currentValue) => {
    dispatch(formAction.addData({name: props.name , value : currentValue}))
    setError(false)
    // setTimeout(() => {
    //   swiper.slideNext();
    // }, 1000);
  }
//  const nextSlide = () => {
//     if(!value){
//         setError(true)
//     }else{
//         swiper.slideNext();
//     }
//  }
 const nextSlide = () => {
if(props.type === 'single'){
  if(value.length === 1){
    swiper.slideNext()
  }else{
    setError(true)
  }
}else{
  if(value.length === 2){
    swiper.slideNext()
  }else{
    setError(true)
  }
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
        {props.optionList.map((data) => {
          return (
            //single list item
            <div
              key={data.key}
              className={`${styles["optionList-item"]} ${
                value.includes(data.value) ? styles["optionList-item-active"] : ""
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
                { value.includes(data.value) ? (
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
