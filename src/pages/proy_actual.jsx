import React from 'react'
import FullNavbar from '../components/full_navbar.jsx'
import BasicCard from '../components/cards.jsx'
import ColoredRectangles from '../components/rectangles.jsx'
import '../stylesheets/rectangles/rectangles.scss'

const data = [
  { name: "Card 1", imageSrc: "../assets/usm.png", 
      description: "lorem ipsum"},
  { name: "Card 2", imageSrc: "../assets/placeholder.jpg"},
  { name: "Card 3", imageSrc: "../assets/placeholder.jpg"},
];

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
