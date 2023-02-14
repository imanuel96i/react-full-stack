/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./components/css/Products.sass";
import Filter from "./components/Filter";
import SideFilter from "./components/SideFilter";

function Products() {
  const img = [
    {
      name: 'Polera AlPacino',
      src: require('./components/assets/imgprod/AlPacino.webp'),
    },
    {
      name: 'Polera Flechas',
      src: require('./components/assets/imgprod/Flechas.webp'),
    },
    {
      name: 'Polera Halloween',
      src: require('./components/assets/imgprod/Halloween.webp'),
    },
    {
      name: 'Polera Hellraiser',
      src: require('./components/assets/imgprod/Hellraiser.webp'),
    },
    {
      name: 'Polera Jason',
      src: require('./components/assets/imgprod/Jason.webp'),
    },
    {
      name: 'Polera LoveLost',
      src: require('./components/assets/imgprod/LoveLost.webp'),
    },
    {
      name: 'Polera MMyers',
      src: require('./components/assets/imgprod/MMyers.webp'),
    },
    {
      name: 'Polera Paloma',
      src: require('./components/assets/imgprod/Paloma.webp'),
    },
    {
      name: 'Polera Scream',
      src: require('./components/assets/imgprod/Scream.webp'),
    } 
  ]
  return (
    <div className="ContainerProducts">
      <div>
        <div className="LeftNav">
          <SideFilter />
        </div>
        <div className="SideFilter">
          <Filter />
        </div>
      </div>
      <div className="ProductCards">
        {
          img.map((image, index) => (
            <div key={index} className="Cardp">
              <h2>{image.name}</h2>
              <img className='Img' src={image.src} alt="image" />
            </div>
          ))   
        }
      </div>
    </div>
  );
}

export default Products;
