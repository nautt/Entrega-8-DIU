import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import HistoriaPage from '../pages/historia'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/historia' element={<HistoriaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
