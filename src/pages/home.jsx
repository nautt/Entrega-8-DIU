import React from 'react'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

export const HomePage = () => {
  return (
    <div className='page'>
      <img src={LogoUSM} height={100} alt='logo usm'/>
      <h1 className='page__title'>Feria de Software</h1>
      <NavBar />
      <h2>Página Principal</h2>
    </div>
  )
}

export default HomePage
