import React from 'react'
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

export const ActualPage = () => {
  return (
    <div className='page'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={LogoUSM} height={100} alt='logo usm' style={{ marginRight: '20px' }} />
        <h1 className='page__title'>Feria de Software</h1>
      </div>
      <NavBar />
      <h2>Proyectos de la Feria de Software de la edición actual</h2>
    </div>
  )
}

export default ActualPage
