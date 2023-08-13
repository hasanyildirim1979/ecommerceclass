import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>    
  )
}

export default App