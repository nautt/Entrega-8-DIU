import React from 'react'
import FullNavbar from '../components/full_navbar.jsx'
import ColoredRectangles from '../components/rectangles.jsx'
import '../stylesheets/rectangles/rectangles.scss'

export const ActualPage = () => {
  return (
    <div className='page'>
      <FullNavbar/>
      <h1>Proyectos de la Feria de Software de la edición actual</h1>
      <ColoredRectangles/>
    </div>
  )
}

export default ActualPage
