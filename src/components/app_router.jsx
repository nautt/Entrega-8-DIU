import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/principal'
import HistoriaPage from '../pages/historia'
import AuspiPage from '../pages/auspiciadores'
import ActualPage from '../pages/proy_actual'
import AnteriorPage from '../pages/proy_anterior'
import ProyEdit from '../pages/proy_edit'
import RegisterPage from '../pages/register'
import SearchResults from '../pages/search'
import LoadingPage from '../pages/loading_page'
import Login from '../pages/login'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/historia' element={<HistoriaPage />} />
        <Route path='/auspiciadores' element={<AuspiPage />} />
        <Route path='/proy_actual' element={<ActualPage/>} />
        <Route path='/proy_anterior' element={<AnteriorPage/>} />
        <Route path='/proy_edit' element={<ProyEdit/>} />
        <Route path='/register_page' element={<RegisterPage/>} />
        <Route path='/search' element={<SearchResults/>} />
        <Route path='/register_result' element={<LoadingPage/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
