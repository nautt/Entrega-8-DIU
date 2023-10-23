import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Spinner from 'react-bootstrap/Spinner';

import Custom_Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx';

export const RegisterPage = () => {
  const [counterEntradas, setCounter] = useState(1);
  const [startLoading, setStartLoading] = useState(false);
  const min_entradas = 1;
  const max_entradas = 5;
  const navigate = useNavigate();

  //Agregar entrada
  const increase = () => {
    setCounter(count => (count < max_entradas) ? count+1 : count);
  };

  //eliminar entrada
  const decrease = () => {
    setCounter(count => (count > min_entradas) ? count-1 : count);
  };

  const registerLoading = () => {
    setStartLoading(true);

    const timer = setTimeout(() => {
      console.log("aaaaa");
      navigate('/register_result');
    }, 4000);
  }

  return (
    <>
      <Custom_Navbar/>
      <div className="register-body">
        <div className='container register-container'>
          <h1 className='text-center'>Reserva tu entrada gratuita</h1>
          <Card className="form-container">
            <Card.Body className='register-card-body'>
              <Card.Title className='register-card-title'>Ingresa tus datos</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Row>
                    <Col>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu nombre" required/>
                    </Col>  
                    <Col>
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu nombre" required/>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email (Aquí se enviarán tus entradas)</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Tickets</Form.Label>
                  <InputGroup>
                    <Button variant="outline-secondary" onClick={decrease}>-</Button>
                    <Form.Control
                      type='number'
                      min={min_entradas}
                      max={max_entradas}
                      placeholder="# de tickets"
                      value={counterEntradas}
                      readOnly
                    />
                    <Button variant="outline-secondary" onClick={increase}>+</Button>
                  </InputGroup>
                </Form.Group>

                {!startLoading && 
                  <Button variant="primary" type="submit" onClick={registerLoading}>
                    Registrar entradas
                  </Button>
                }
                {startLoading &&
                  <Button variant="primary" href='/register_result' disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Espere...
                  </Button>
                }
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default RegisterPage;
