import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from '../components/footer.jsx';
import Custom_Navbar from '../components/navbar.jsx'
import { useNavigate } from "react-router-dom";

const jsonData = require('../assets/proyectos.json');

import placeholder1 from '../assets/youtube-buffering.gif'
import placeholder2 from '../assets/placeholder.jpg'

const categories = ["Inteligencia Artificial", "Realidad Virtual y Aumentada", 
                    "Tecnología en la Educación"];
const colors = ["#3a72a9", "#2e5985", "#214160"];

export const ProyEdit = () => {

    const navigate = useNavigate();
    const category = categories[0]; 
    const element = jsonData[0]

     const [selectedValue, setSelectedValue] = useState(category);
     const handleDropdownChange = (selectedOption) => {
        setSelectedValue(selectedOption);
     };

     const [text1, setText1] = useState(element.name);
     const handleTextChange1 = (newText) => {
        setText1(newText);
     };

     const [text2, setText2] = useState(element.description);
     const handleTextChange2 = (newText) => {
        setText2(newText);
      };
      
      const handleSubmit = () => {
          window.alert('Solicitud de cambio en la Información del proyecto realizada.')
          navigate('/');
      };
  return (
    <>
      <Custom_Navbar/>
      <div className='container' style={{marginTop:"40px"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3"> 
          <Form.Label>Cambiar categoria</Form.Label>
          <Dropdown onSelect={handleDropdownChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedValue}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey={categories[0]}>{categories[0]}</Dropdown.Item>
              <Dropdown.Item eventKey={categories[1]}>{categories[1]}</Dropdown.Item>
              <Dropdown.Item eventKey={categories[2]}>{categories[2]}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        <Form.Group className="mb-3"> 
            <Form.Label>Titulo</Form.Label>
            <Form.Control as="textarea" placeholder="Ingresa el nombre de tu proyecto" onChange={handleTextChange1} 
                //defaultValue={text1}
                cols={40}/>
        </Form.Group>
        <Form.Group className="mb-3"> 
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" placeholder="Ingresa la nueva descripción de tu proyecto" onChange={handleTextChange2} 
                //defaultValue={text2}
                cols={40}
                rows={5}/>
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            Modificar</Button>
      </Form>
      </div>
      <Footer/>
    </>
  )
}

export default ProyEdit
