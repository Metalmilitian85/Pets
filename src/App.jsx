import React from 'react'
import Pets from './Components/Pets'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Mission from './Components/Mission'
import Contact from './Components/Contact'
import Home from './Components/Home'

export default function App() {

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pets" element={<Pets />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}
