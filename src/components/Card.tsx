/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './css/Card.sass'


function Card() {
    const img = [
        require('./assets/imgprod/AlPacino.webp'),
        require('./assets/imgprod/Flechas.webp'),
        require('./assets/imgprod/Halloween.webp'),
        require('./assets/imgprod/Hellraiser.webp'),
        require('./assets/imgprod/Jason.webp'),
        require('./assets/imgprod/LoveLost.webp'),
        require('./assets/imgprod/MMyers.webp'),
        require('./assets/imgprod/Paloma.webp'),
        require('./assets/imgprod/Scream.webp')
    ]
    
  return (
      <div className='ContainerCard'>
        {
        img.map((image, index) => (
          <div key={index} className='Card'>
            <img className='Img' src={image} alt="image" />
          </div>
        ))    
        }
    </div>
  )
}

export default Card