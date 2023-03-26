import React from 'react'
import { useSelector } from 'react-redux'
import style from './ProgressBar.module.css'
const ProgressBar = () => {
 const completed = useSelector((state) => state.typeform.completed)
  return (
     <div className= {style.meter}>
        <span className={style.progress} style = {{width: `${completed}%`}}></span>
     </div>
  )
}

export default ProgressBar