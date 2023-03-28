import React from 'react'
import logo from '../../assets/Dark background full logo.svg'
import styles from './SplashScreen.module.css'
const SplashScreen = () => {
  return (
    // Splash Screen container
    <div className={styles.splashscreen}>
        {/* Logo */}
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
        </div>
        {/* Loader */}
        <div className={styles['loading-center']}>
            <div className={styles['loading-bar']}></div>
        </div>
    </div>
  )
}

export default SplashScreen