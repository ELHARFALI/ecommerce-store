import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer, Navbar, Sidebar } from './components'
import {About, Home} from './pages'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App