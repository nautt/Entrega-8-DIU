import React, { useState, useEffect } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
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
              // width="30"
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
          <Searchbar/>
          <Button className="register-button" variant="success" href='/register_page'>
            RESERVA TU ENTRADA
          </Button>{' '}
            {user? (<Button className="register-button justify-content-end"
                variant="warning" href='/proy_edit'
                >Editar mi protecto</Button>)

               : null} 
          {user?
            (<Button className="register-button" variant="secondary" 
                onClick={closeSession}>Logout</Button>)
              :
            (<Button className="register-button"
                variant="primary" href='/login'>Login</Button>)
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Custom_Navbar;
