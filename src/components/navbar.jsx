import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Searchbar from './search_bar.jsx';


import LogoUSM from '../assets/usm.png'
// import LogoFeria from 'https://www.feriadesoftware.cl/wp-content/themes/AA-fesw2017/img/fesw-logo.png'

export const Custom_Navbar = () => {
  return (

    <Navbar 
      bg="dark" data-bs-theme="dark"
      expand="lg" 
      className="navbar-style">
      <Container>
        <Navbar.Brand href="/">
          <img
              alt=""
              src='https://www.feriadesoftware.cl/wp-content/themes/AA-fesw2017/img/fesw-logo.png'
              // width="30"
              height="80"
              className="d-inline-block align-center"
          />{' '}
          {/* <img
              alt=""
              src={LogoUSM}
              // width="30"
              height="80"
              className="d-inline-block align-top"
          />{' '} */}
          31ª Feria de Software
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/historia">Historia</Nav.Link>
            <Nav.Link href="/auspiciadores">Auspiciadores</Nav.Link>
            <Nav.Link href="/proy_actual">Proyectos Actuales</Nav.Link>
            <Nav.Link href="/proy_anterior">Proyectos Ediciones Anteriores</Nav.Link>
          </Nav>
          <Searchbar/>
          <Button className="justify-content-end register_button" variant="success" href='/register_page'>
            RESERVA TU ENTRADA
          </Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Custom_Navbar;
