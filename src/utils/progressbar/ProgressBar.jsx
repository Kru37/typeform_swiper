import React from 'react'
import style from './ProgressBar.module.css'
const ProgressBar = () => {
  return (
     <div className= {style.meter}>
        <span className={style.progress} style = {{width: '30%'}}></span>
     </div>
  )
}

export default ProgressBar