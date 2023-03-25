import React from 'react'
import ProgressBar from '../../utils/progressbar/ProgressBar'
import logo from '../../assets/Dark background full logo.svg'
import styles from './Header.module.css'
// The header component displays the progress bar and logo
const Header = () => {
  return (
    <>
    {/* Progress bar to show how many questions are completed */}
    <ProgressBar/>
    {/* to display logo */}
    <div className={styles.logo}>
      <img src={logo} alt="logo"/>
    </div>
    </>
  )
}

export default Header