import React, { useState , useEffect } from 'react'
import styles from './SingleLineQuestion.module.css'
import arrow from '../../../assets/Arrow.svg'
import Question from '../../../utils/question/Question'
import ButtonContainer from '../../../utils/button/ButtonContainer'
import Error from '../../../utils/error/Error'
import { useDispatch, useSelector } from 'react-redux'
import { formAction } from '../../../store/formSlice'
import { useSwiper } from 'swiper/react'
const SingleLineQuestion = (props) => {
  const [isError , setError] = useState(false);
  const [inputvalue , setValue] = useState('')
  const swiper = useSwiper()
  const formData = useSelector((state) => state.typeform.formData)
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
     setError(false)
     setValue(e.target.value)
     dispatch(formAction.addData({name: e.target.name , value: e.target.value}))
     dispatch(formAction.setProgress())
    //  if(!e.target.value){
    //   props.changeAllowance(false)
    //  }else{
    //   props.changeAllowance(true)
    //  }
  }

  const nextSlide = () => {
    if(inputvalue){
     
      swiper.slideNext()
    }else{
      setError(true)
  
    }
  }

  return (
    <div className={styles['single-question']}  >
      {/* Question  */}
        <Question number = {props.number} question = {props.question}/>
        {/* Answer */}
        <div className={styles["answer-wrapper"]}>
          <input 
          type="text" 
          name={props.name} 
          value = {inputvalue} 
          onChange={handleInputChange} 
          placeholder='Type your answer here...'/>
        </div>
        {/*if error is present error component will be shown else button container*/}
        { isError ? <Error/> : <ButtonContainer btnText = "OK" nextSlide = {nextSlide}/>}
    </div>
  )
}

export default SingleLineQuestion