import React from 'react'
import Custom_Navbar from '../components/navbar.jsx'

export const HomePage = () => {
  return (
    <>
      <Custom_Navbar/>
      <div className='container' style={{marginTop:"40px"}}>
        <h1>Página Principal</h1>
      </div>
    </>
  );
}

export default HomePage;
