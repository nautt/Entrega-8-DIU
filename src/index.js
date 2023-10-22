import React from 'react'
import ReactDom from 'react-dom'
import './stylesheets/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css'

import AppRouter from './components/app_router'

import './stylesheets/index.scss'

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

ReactDom.render(
  <AppRouter />,
  document.getElementById('root')
)
