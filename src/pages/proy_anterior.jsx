import React from 'react'
import FullNavbar from '../components/full_navbar.jsx'

import { Button } from '@mui/material'

export const AnteriorPage = () => {
  return (
    <div className='page'>
      <FullNavbar/>
      <h2>Proyectos de la Feria de Software de ediciones anteriores</h2>
      <Button variant="contained">button</Button> 
    </div>
  )
}

export default AnteriorPage
