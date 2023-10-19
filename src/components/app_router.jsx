import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/principal'
import HistoriaPage from '../pages/historia'
import AuspiPage from '../pages/auspiciadores'
import ActualPage from '../pages/proy_actual'
import AnteriorPage from '../pages/proy_anterior'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/historia' element={<HistoriaPage />} />
        <Route path='/auspiciadores' element={<AuspiPage />} />
        <Route path='/proy_actual' element={<ActualPage/>} />
        <Route path='/proy_anterior' element={<AnteriorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
