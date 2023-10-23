import React from 'react';
import LogoUSM from '../assets/usm.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                    <Col>
                        <img    
                        alt=""
                        src='https://www.feriadesoftware.cl/wp-content/themes/AA-fesw2017/img/fesw-logo.png'
                        // width="30"
                        height="80"
                        className="d-inline-block align-center"
                        />{' '}
                    </Col>
                    <Col>
                        <h4>XXXI Feria de Software</h4>
                        <p>Campus Casa Central Valparaíso</p>
                        <p>Campus Santiago San Joaquín</p>
                        <a href="https://www.feriadesoftware.cl/#:~:text=2)%202303%207200-,feria%40inf.utfsm.cl,-31%C2%AA%20Feria%20de">feria@inf.utfsm.cl</a>

                    </Col>
                    <Col>
                        <img
                            alt=""
                            src={LogoUSM}
                            // width="30"
                            height="80"
                            className="d-inline-block align-top"
                        />{' '}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;