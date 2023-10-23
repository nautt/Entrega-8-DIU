import React from 'react'
import Custom_Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx';
import FeriaSoftware from '../assets/FeriaSoftware.png';

export const HomePage = () => {
  const imgStyle = {
    width: '100%', // Establece el ancho al 100% del contenedor
    height: '100%', // Establece la altura al 100% del contenedor
    objectFit: 'cover', // Controla cómo la imagen se ajusta al contenedor (cover en este caso)
  };

  return (
    <>
      <Custom_Navbar />
      <div className='container' style={{ marginTop: '40px' }}>
        <h1>Página Principal</h1>

        <img src={FeriaSoftware} alt="Descripción de la imagen" style={imgStyle} />
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;