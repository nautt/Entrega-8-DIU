import React from 'react';
import Custom_Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

import { Button } from '@mui/material'

export const AnteriorPage = () => {
  return (
    <>
      <Custom_Navbar/>
      <div className='container' style={{marginTop:"40px"}}>
        <h1>Proyectos de la Feria de Software de ediciones anteriores</h1>
        <Button variant="contained">button</Button> 
      </div>
      <Footer/>
    </>
  )
}

export default AnteriorPage
