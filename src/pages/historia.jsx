import React from 'react'
import FullNavbar from '../components/full_navbar.jsx'
import OneRectangle1 from '../components/cuadro_historia.jsx'
import OneRectangle2 from '../components/cuadro_historia2.jsx'
import '../stylesheets/rectangles/oneRectangle.scss'

export const HistoriaPage = () => {
  return (
    <div className='page'>
      <FullNavbar/>
      <h1>Historia de la Feria de Software</h1>
      <OneRectangle1/>
      <h1>Organización</h1>
      <OneRectangle2/>
    </div>
  )
}

export default HistoriaPage
