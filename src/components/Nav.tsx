import React from 'react'
import './css/Nav.sass'
import { FaBars } from 'react-icons/fa';

function Nav() {
  return (
    <div className='NavBar'>
      <div className='NavContainer'>
        <h2>MetraCL</h2>
        <FaBars className='Bars'/>
      </div>
      <div className='NavContainerSearch'>
          <input type="text" id='txt' className='SearchBar' placeholder='HOLA'/>
      </div>
      <div className='NavContainerLink'>
        <a href='www.google.cl'>Home</a>
        <a href='#k'>About</a>
        <a href='#kk'>Contact</a>
      </div>
    </div>
  )
}

export default Nav