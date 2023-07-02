import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Login from './login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero/>
    <Login/>

  </React.StrictMode>,
)
