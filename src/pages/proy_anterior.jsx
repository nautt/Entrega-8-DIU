import React from 'react';
import Custom_Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

import RectangleCards from '../components/rectangle_cards.jsx'
import '../stylesheets/rectangles/oneRectangle.scss'

const jsonData = require('../assets/proyectos.json');

import { Button } from '@mui/material'

const ediciones = ["30 Edición", "29 Edición", "28 Edición", "27 Edición", "26 Edición"];
const colors = ["#3a72a9", "#2e5985", "#214160", "#2e5985", "#3a72a9"];

export const AnteriorPage = () => {
    const groupedByCategory = {};

    jsonData.forEach((item) => {
      const { category, ...rest } = item;
      if (!groupedByCategory[category]) {
        groupedByCategory[category] = [];
      }
      groupedByCategory[category].push(rest);
    });

  return (
    <>
      <Custom_Navbar/>
      <div className='container' style={{marginTop:"40px"}}>
      <h1>Proyectos de la Feria de Software de ediciones anteriores</h1>
          <div>
            {ediciones.map((category, index) => (
              <RectangleCards
                key={category}
                title={category}
                color={colors[index]}
                data={jsonData.filter(item => item.category === category)}
                //Mostrar cantidad de expositores?
              />
            ))}
          </div>
      </div>
      <Footer/>
    </>
  )
}

/*
export const AnteriorPage = () => {
  return (
    <>
      <Custom_Navbar/>
      <div className='container' style={{marginTop:"40px"}}>
        
        <Button variant="contained">button</Button> 
      </div>
      <Footer/>
    </>
  )
}
*/

/*


*/
export default AnteriorPage
