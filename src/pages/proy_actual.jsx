import React from 'react'
import RectangleCards from '../components/rectangle_cards.jsx'
import FullNavbar from '../components/full_navbar.jsx'
import '../stylesheets/rectangles/oneRectangle.scss'


const colors = ["#3a72a9", "#2e5985", "#214160", "#14283c"];
const title = ["Realidad Virtual y Aumentada", "Inteligencia Artificial", 
                    "Tecnología en la Educación"];
const data = [
  { name: "Card 1", imageSrc:"holder.js/100px180", 
      description: "lorem ipsum"},
  { name: "Card 2", imageSrc: "../assets/placeholder.jpg"},
  { name: "Card 3", imageSrc: "../assets/placeholder.jpg"},
];

export const ActualPage = () => {
  return (
    <div className='page'>
      <FullNavbar/>
      <h1>Proyectos de la Feria de Software de la edición actual</h1>
      <RectangleCards title={title[0]} color={colors[0]} data={data}/>
    </div>
  )
}

export default ActualPage
