import React from 'react'

function Nav() {
  return (
    <div className='NavBar'>
      <div className='NavContainer'>
        <h2>MetraCL</h2>
      </div>
      <div className='NavContainer'>
        <input type="text" id='txt' placeholder='HOLA'/>
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