import React from 'react'
import FullNavbar from '../components/full_navbar.jsx'
import ColoredRectangles from '../components/rectangles.jsx'
import '../stylesheets/rectangles/rectangles.scss'

export const ActualPage = () => {
  return (
    <div className='page'>
      <FullNavbar/>
      <h2>Proyectos de la Feria de Software de la edición actual</h2>
      <ColoredRectangles/>
    </div>
  )
}

export default ActualPage
