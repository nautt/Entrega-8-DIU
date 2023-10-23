import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Custom_Navbar from '../components/navbar.jsx';

export const LoadingPage = () => {

  return (
    <>
      <Custom_Navbar/>
      <div className="register-body">
        <div className='container register-container'>
          <h1 className='text-center'>Reserva tu entrada gratuita</h1>
          <Card className="form-container">
            <Card.Body className='register-card-body register-result-card'>
                <Card.Title className='register-card-title text-center'>Entradas registradas exitosamente</Card.Title>
                <svg 
                fontSize={'150px'} 
                fill='green'
                style={{margin: "60px 0"}}
                xmlns="http://www.w3.org/2000/svg" 
                height="1em" 
                viewBox="0 0 512 512">
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                </svg>
              <Button variant="primary" type="submit" href='/'>
                Volver a inicio
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
