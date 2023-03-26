import React from 'react'
import {GoAlert} from 'react-icons/go';
import styles from './Error.module.css'
// Reusable error container
const Error = () => {
  return (
    <div className={styles['error-wrapper']}>
        <GoAlert size={15}/>
        <p>Please fill this in</p>
    </div>
  )
}

export default Error