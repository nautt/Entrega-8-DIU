import React from 'react'
import RectangleCards from '../components/rectangle_cards.jsx'
import Custom_Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx';
import Searchbar from '../components/search_bar.jsx';
import Accordion from 'react-bootstrap/Accordion';
import '../stylesheets/rectangles/oneRectangle.scss'
const jsonData = require('../assets/proyectos.json');

import placeholder1 from '../assets/youtube-buffering.gif'
import placeholder2 from '../assets/placeholder.jpg'

const categories = ["Inteligencia Artificial", "Realidad Virtual y Aumentada", 
                    "Tecnología en la Educación"];
const colors = ["#3a72a9", "#2e5985", "#214160"];

export const ActualPage = () => {
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
      <div className='container' style={{margin:"40px auto", display:'flex', flexDirection:'column'}}>

        <h1>Proyectos de la Feria de Software de la edición actual</h1>
        <Searchbar/>
        
        <div>
          <Accordion>
          {categories.map((category, index) => (
            <Accordion.Item eventKey={category} className='custom-acordion'>
              <Accordion.Header>
                <div style={{fontSize:"1.5rem", color:"whitesmoke"}}>
                  {category}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <RectangleCards
                  key={category}
                  // title={category}
                  color={colors[index]}
                  data={jsonData.filter(item => item.category === category)}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
          </Accordion>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ActualPage
