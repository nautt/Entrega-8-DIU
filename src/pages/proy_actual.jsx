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
      <div className='container' style={{marginTop:"40px", display:'flex', flexDirection:'column'}}>

        <h1>Proyectos de la Feria de Software de la edición actual</h1>
        <Searchbar/>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div>
          {categories.map((category, index) => (
            <RectangleCards
              key={category}
              title={category}
              color={colors[index]}
              data={jsonData.filter(item => item.category === category)}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ActualPage
