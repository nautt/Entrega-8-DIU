import React from 'react'
import Custom_Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx';
import FeriaSoftware from '../assets/FeriaSoftware.png';

export const HomePage = () => {
  const imgStyle = {
    // marginTop: '40px',
    width: '100%', // Establece el ancho al 100% del contenedor
    height: '100vh%', // Establece la altura al 100% del contenedor
    objectFit: 'cover', // Controla cómo la imagen se ajusta al contenedor (cover en este caso)
  };

  return (
    <>
      <Custom_Navbar />
      <div className='' style={imgStyle}>
        <img src={FeriaSoftware} alt="Descripción de la imagen" style={imgStyle} />
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;