import React from 'react'
import Pets from './Components/Pets'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path="/about"/>
        <Route path="/projects"/>
        <Route path="/skills"/>
        <Route path="/contact" />
      </Routes>
      <Pets />
    </BrowserRouter>
  </div>
  )
}
