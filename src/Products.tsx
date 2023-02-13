import React from "react";
import verano from "./components/assets/img/sl-verano-escolares.jpg";
import "./components/css/Products.sass";
import Filter from "./components/Filter";
import SideFilter from "./components/SideFilter";

function Products() {
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
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
        <div className="Cardp">
          <h2>Verano</h2>
          <img className="Img" src={verano} alt="" />
          <p>HOLA ESTO ES EL VERANO</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
