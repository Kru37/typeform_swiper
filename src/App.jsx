import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/nav/Header'
import Typeform from './components/typeform/Typeform'
import SplashScreen from './components/splashscreen/SplashScreen'

function App() {
  const [showSplash , setSplash] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false)
    },3000)
    return () => {
      clearTimeout(timer)
    }
  },[])
  if(showSplash){
    return <SplashScreen/>
  }
   return (
     <div className='main'>
     <Header/>
     <Typeform/>
     </div>
   )
}

export default App
