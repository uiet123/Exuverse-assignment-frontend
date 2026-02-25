import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp/SignUp"
import Login from "./components/Login/Login"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App