/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./components/css/Products.sass";
import Filter from "./components/Filter";
import SideFilter from "./components/SideFilter";

function Products() {
  const img = [
        require('./components/assets/imgprod/AlPacino.webp'),
        require('./components/assets/imgprod/Flechas.webp'),
        require('./components/assets/imgprod/Halloween.webp'),
        require('./components/assets/imgprod/Hellraiser.webp'),
        require('./components/assets/imgprod/Jason.webp'),
        require('./components/assets/imgprod/LoveLost.webp'),
        require('./components/assets/imgprod/MMyers.webp'),
        require('./components/assets/imgprod/Paloma.webp'),
        require('./components/assets/imgprod/Scream.webp')
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
              <img className='Img' src={image} alt="image" />
            </div>
          ))   
        }
      </div>
    </div>
  );
}

export default Products;
