// Autores: Manuel Vidal, Benjamín Álvarez, Ignacio Korenhof
// Fecha creación: 13/02/23
// Fecha modificación: 14/02/23

// Importaciones
import React from "react";
import "./components/css/Products.sass";
import Filter from "./components/Filter";
import SideFilter from "./components/SideFilter";

function Products() {

  // Conjunto de imagenes estáticas de productos a mostrar
  const img = [
    {
      name: "Polera Al Pacino",
      src: require("./components/assets/imgprod/AlPacino.webp"),
    },
    {
      name: "Polera Click",
      src: require("./components/assets/imgprod/Flechas.webp"),
    },
    {
      name: "Polera Halloween",
      src: require("./components/assets/imgprod/Halloween.webp"),
    },
    {
      name: "Polera Hellraiser",
      src: require("./components/assets/imgprod/Hellraiser.webp"),
    },
    {
      name: "Polera Jason",
      src: require("./components/assets/imgprod/Jason.webp"),
    },
    {
      name: "Polera Love Lost",
      src: require("./components/assets/imgprod/LoveLost.webp"),
    },
    {
      name: "Polera Michael Myers",
      src: require("./components/assets/imgprod/MMyers.webp"),
    },
    {
      name: "Polera Paloma",
      src: require("./components/assets/imgprod/Paloma.webp"),
    },
    {
      name: "Polera Scream",
      src: require("./components/assets/imgprod/Scream.webp"),
    },
  ];
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
        {img.map((image, index) => (
          <div key={index} className="Cardp">
            <h2>{image.name}</h2>
            <img className="Img" src={image.src} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
