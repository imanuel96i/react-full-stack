/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './css/Card.sass'


function Card() {
  const img = [
    {
      name: 'Polera AlPacino',
      src: require('./assets/imgprod/AlPacino.webp'),
    },
    {
      name: 'Polera Flechas',
      src: require('./assets/imgprod/Flechas.webp'),
    },
    {
      name: 'Polera Halloween',
      src: require('./assets/imgprod/Halloween.webp'),
    },
    {
      name: 'Polera Hellraiser',
      src: require('./assets/imgprod/Hellraiser.webp'),
    },
    {
      name: 'Polera Jason',
      src: require('./assets/imgprod/Jason.webp'),
    },
    {
      name: 'Polera LoveLost',
      src: require('./assets/imgprod/LoveLost.webp'),
    },
    {
      name: 'Polera MMyers',
      src: require('./assets/imgprod/MMyers.webp'),
    },
    {
      name: 'Polera Paloma',
      src: require('./assets/imgprod/Paloma.webp'),
    },
    {
      name: 'Polera Scream',
      src: require('./assets/imgprod/Scream.webp'),
    } 
  ]
    
  return (
      <div className='ContainerCard'>
        {
        img.map((image, index) => (
          <div key={index} className='Card'>
            <h2>{image.name}</h2>
            <img className='Img' src={image.src} alt="image" />
          </div>
        ))    
        }
    </div>
  )
}

export default Card