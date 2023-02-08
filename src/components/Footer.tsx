import React from 'react'
import './css/Footer.sass'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'

function Footer() {
  return (
    <div className='ContainerFoo'>
      <div className="Footer">
        <div className="Fcard">
          INFO
        </div>
        <div className="Fcard flex-column">
          <div className='Rssi'>Siguenos en nuestras redes sociales!</div>
          <div>
            <a href='https://es-la.facebook.com/' target="_blank" rel="noreferrer">
              <AiFillFacebook className='Rrss' />
            </a>
            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
              <AiFillInstagram className='Rrss' />
            </a>
            <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
              <AiFillLinkedin className='Rrss' />
            </a>
            <a href='https://twitter.com/' target="_blank" rel="noreferrer">
              <AiFillTwitterSquare className='Rrss' />
            </a>
          </div>
        </div>
      </div>
      <div className="Footer">
        <div className="Fcard">
          COPY
        </div>
        <div className="Fcard">
          TERM
        </div>
      </div>
    </div>
  )
}

export default Footer