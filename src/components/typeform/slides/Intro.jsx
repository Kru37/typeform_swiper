import React from 'react'
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
        <div className={styles['intro-btn-container']}>
            {/* To go to next slide */}
            <button className={styles['intro-agree-btn']}>I agree</button>
            <div className= {styles['intro-helpertext-container']}>
                
                    <div className={styles['intro-helpertext']}>
                        press 
                        <strong>Enter ↵</strong>
                    </div>
             
            </div>
        </div>
    </div>
  )
}

export default Intro