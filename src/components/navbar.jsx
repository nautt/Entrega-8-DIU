import React, { useState, useEffect } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searchbar from './search_bar.jsx';
import { useNavigate } from "react-router-dom";

// import LogoFeria from 'https://www.feriadesoftware.cl/wp-content/themes/AA-fesw2017/img/fesw-logo.png'

export const Custom_Navbar = () => {
    const [user, setUser] = useState(null);

    const closeSession = () => {
        setUser(null);
        sessionStorage.removeItem("user");
        navigate('/');
    };

  useEffect(() => {
        const u_temp = sessionStorage.getItem("user");
        setUser(u_temp);
    })

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
              height="80"
              className="d-inline-block align-center"
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
          </Nav>
          <Button className="register-button" variant="success" href='/register_page' style={{marginRight:'5px'}}>
            RESERVA TU ENTRADA
          </Button>{' '}
          
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="2em" 
                fill='gray'
                viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {user ? 
                <>
                <Dropdown.ItemText>
                  <Button 
                    className="register-button justify-content-end"
                    variant="warning"
                    href='/proy_edit'>
                    Editar mi proyecto
                  </Button>
                </Dropdown.ItemText>
                <Dropdown.ItemText>
                  <Button 
                    className="register-button" 
                    variant="secondary" 
                    size='lg'
                    onClick={closeSession}>
                    Logout
                  </Button>
                </Dropdown.ItemText>
                </>
                : 
                <Dropdown.ItemText>
                  <Button 
                    className="register-button"
                    variant="primary" 
                    size='lg'
                    href='/login'>
                    Login
                  </Button>
                </Dropdown.ItemText>} 
            </Dropdown.Menu>
          </Dropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Custom_Navbar;
