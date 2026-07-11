import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './components/Register'
import Searchstud from './components/Searchstud'
import Delete from './components/Delete'
import View from './components/View'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      
  <Route path="/" element={<Register/>}/>
  <Route path="/search" element={<Searchstud/>}/>
  <Route path="/delete" element={<Delete/>}/>
  <Route path="/view" element={<View/>}/>
  


    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
