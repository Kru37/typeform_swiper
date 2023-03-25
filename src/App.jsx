import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/nav/Header'
import Typeform from './components/typeform/Typeform'

function App() {
   return (
     <>
     <Header/>
     <Typeform/>
     </>
   )
}

export default App
