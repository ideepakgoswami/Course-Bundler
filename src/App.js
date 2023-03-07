import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Courses from './components/Courses/Courses'
import Header from './components/Layout/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App