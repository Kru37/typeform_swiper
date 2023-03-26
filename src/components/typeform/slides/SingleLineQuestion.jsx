import React from 'react'
import styles from './SingleLineQuestion.module.css'
import arrow from '../../../assets/Arrow.svg'
import Question from '../../../utils/question/Question'
const SingleLineQuestion = (props) => {
  return (
    <div className={styles['single-question']}>
      {/* Question  */}
        <Question number = {props.number} question = {props.question}/>
        {/* Answer */}
        <div className={styles["answer-wrapper"]}>
          <input type="text" name={props.name} id=""  placeholder='Type your answer here...'/>
        </div>
    </div>
  )
}

export default SingleLineQuestion