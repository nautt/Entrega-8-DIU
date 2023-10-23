import React from 'react'
import Custom_Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx';

export const HomePage = () => {
  return (
    <>
      <Custom_Navbar/>
      <div className='container' style={{marginTop:"40px"}}>
        <h1>Página Principal</h1>
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
