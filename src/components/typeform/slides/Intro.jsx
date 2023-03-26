import React from 'react'
import ButtonContainer from '../../../utils/button/ButtonContainer'
import styles from './Intro.module.css'
const Intro = () => {
  return (
    // Intro section
    <div className={styles['intro-container']}>
        {/* Title */}
        <p className={styles['intro-title']}>Up-skilling requires time commitment</p>
        {/* Description */}
        <p className={styles['intro-block-description']}>
         <span>The GrowthX experience is designed by keeping in mind the working hours founders & full time operators typically work in.</span>
         <br />
         <br />
         <span>You will spend</span>
         <br />
         <span>- 6 hours/week for the first 5 weeks</span>
         <br />
         <span>- 15 hours/week for the last 3 weeks</span>
        </p>
        {/* Button Container */}
      <ButtonContainer btnText = "I agree"/>
    </div>
  )
}

export default Intro