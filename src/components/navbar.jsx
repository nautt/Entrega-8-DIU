import React from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LogoUSM from '../assets/usm.png'
// import LogoFeria from 'https://www.feriadesoftware.cl/wp-content/themes/AA-fesw2017/img/fesw-logo.png'

export const Custom_Navbar = () => {
  return (

    <Navbar 
      expand="lg" 
      className="bg-body-tertiary navbar-style">
      <Container>
        <Navbar.Brand href="/">
          <img
              alt=""
              src='https://www.feriadesoftware.cl/wp-content/themes/AA-fesw2017/img/fesw-logo.png'
              // width="30"
              height="80"
              className="d-inline-block align-top"
          />{' '}
          <img
              alt=""
              src={LogoUSM}
              // width="30"
              height="80"
              className="d-inline-block align-top"
          />{' '}
          31ª Feria de Software
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/historia">Historia</Nav.Link>
            <Nav.Link href="/auspiciadores">Auspiciadores</Nav.Link>
            <Nav.Link href="/proy_actual">Proyectos Actuales</Nav.Link>
            <Nav.Link href="/proy_anterior">Proyectos Ediciones Anteriores</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className='nav-bar'>
    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/'
    //   >
    //     Página Principal
    //   </NavLink>
      
    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/historia'
    //   >
    //     Historia
    //   </NavLink>

    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/auspiciadores'
    //   >
    //     Auspiciadores
    //   </NavLink>

    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/proy_actual'
    //   >
    //     Proyectos Actuales
    //   </NavLink>

    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/proy_anterior'
    //   >
    //     Proyectos Ediciones Anteriores
    //   </NavLink>

    //   <NavLink
    //     className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    //     to='/proy_anterior'
    //   >
    //     <button type="button" class="btn btn-success">Comprar Entradas</button>
    //   </NavLink>
    // </nav>
  );
}

export default Custom_Navbar;
