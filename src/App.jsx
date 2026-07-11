import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './components/Register'
import Searchstud from './components/Searchstud'
import Delete from './components/Delete'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Register/>
    <Searchstud/>
    <Delete/>
    
    </>
  )
}

export default App
