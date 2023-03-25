import React from 'react'
import arrow from '../../../assets/Arrow.svg'
const SingleLineQuestion = (props) => {
  return (
    <div>
        <div className="question">
            <span>{props.number}</span>
            <img src={arrow} alt="" />
            <p>{props.question}</p>
        </div>
    </div>
  )
}

export default SingleLineQuestion