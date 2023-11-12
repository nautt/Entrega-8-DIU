import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Custom_Navbar from '../components/navbar.jsx'
import { Form, Button } from 'react-bootstrap';
import Footer from '../components/footer.jsx';
import '../stylesheets/page/login.scss'

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        sessionStorage.setItem('user', formData.username);
        navigate('/');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };
  return (
    <>
      <Custom_Navbar/>
        <div className="container">
            <div className="login-wrapper" style={{width: "200px"}}> 
                <h2>Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="username"
                            placeholder="Enter username"
                            value={formData.username}
                            onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Enviar</Button>{''}
                </Form>
            </div>
        </div>
      <Footer/>
    </>
  )
}

export default Login; 
