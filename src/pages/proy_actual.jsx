import React from 'react'
import RectangleCards from '../components/rectangle_cards.jsx'
import Custom_Navbar from '../components/navbar.jsx'
import '../stylesheets/rectangles/oneRectangle.scss'

import placeholder1 from '../assets/youtube-buffering.gif'
import placeholder2 from '../assets/placeholder.jpg'

const colors = ["#3a72a9", "#2e5985", "#214160", "#14283c"];
const title = ["Realidad Virtual y Aumentada", "Inteligencia Artificial", 
                    "Tecnología en la Educación"];
const data = [
  { name: "Card 1", imageSrc: placeholder1, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
  { name: "Card 2", imageSrc: placeholder2, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
  { name: "Card 3", imageSrc: placeholder2, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
];

export const ActualPage = () => {
  return (
    <>
      <Custom_Navbar/>
      <div className='container' style={{marginTop:"40px"}}>
        <h1>Proyectos de la Feria de Software de la edición actual</h1>
        <RectangleCards title={title[0]} color={colors[0]} data={data}/>
        <RectangleCards title={title[1]} color={colors[1]} data={data}/>
        <RectangleCards title={title[0]} color={colors[2]} data={data}/>
      </div>
    </>
  )
}

export default ActualPage
