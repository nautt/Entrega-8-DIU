import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Custom_Navbar from '../components/navbar.jsx'

export const RegisterPage = () => {
  return (
    <>
      <Custom_Navbar/>
      <div className="register-body">
        <div className='container register-container'>
          <h1 className='text-center'>Reserva tu entrada gratuita</h1>
          <Card className="form-container">
            <Card.Body className='register-card-body'>
              <Card.Title className='register-card-title'>Ingresa tus datos</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Form>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Row>
                    <Col>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu nombre" />
                    </Col>  
                    <Col>
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu nombre" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Tickets</Form.Label>
                  <InputGroup>
                  <Button variant="outline-secondary">-</Button>
                    <Form.Control
                      type='number'
                      min={1}
                      max={5}
                      placeholder="# de tickets"
                      defaultValue={1}
                      aria-label="Recipient's username with two button addons"
                    />
                    <Button variant="outline-secondary">+</Button>
                  </InputGroup>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Registrar
                </Button>
              </Form>

              {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
