import React from 'react'
import styles from './SingleLineQuestion.module.css'
import arrow from '../../../assets/Arrow.svg'
import Question from '../../../utils/question/Question'
import ButtonContainer from '../../../utils/button/ButtonContainer'
import Error from '../../../utils/error/Error'
const SingleLineQuestion = (props) => {
  return (
    <div className={styles['single-question']}>
      {/* Question  */}
        <Question number = {props.number} question = {props.question}/>
        {/* Answer */}
        <div className={styles["answer-wrapper"]}>
          <input type="text" name={props.name} id=""  placeholder='Type your answer here...'/>
        </div>
        {/* Button container */}
        <ButtonContainer btnText = "OK"/>
        {/* Error Container */}
        <Error/>
    </div>
  )
}

export default SingleLineQuestion