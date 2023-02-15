// Autores: Manuel Vidal, Benjamín Álvarez, Ignacio Korenhof
// Fecha creación: 07/02/23
// Fecha modificación: 13/02/23

// Importaciones
import React from "react";
import "./css/Card.sass";

function Card() {

  // Conjunto de imagenes estáticas de productos a mostrar
  const img = [
    {
      name: "Polera Click",
      src: require("./assets/imgprod/Flechas.webp"),
    },
    {
      name: "Polera Halloween",
      src: require("./assets/imgprod/Halloween.webp"),
    },
    {
      name: "Polera Jason",
      src: require("./assets/imgprod/Jason.webp"),
    },
    {
      name: "Polera Michael Myers",
      src: require("./assets/imgprod/MMyers.webp"),
    },
    {
      name: "Polera Scream",
      src: require("./assets/imgprod/Scream.webp"),
    },
    {
      name: "Polera Click",
      src: require("./assets/imgprod/Flechas.webp"),
    },
    {
      name: "Polera Halloween",
      src: require("./assets/imgprod/Halloween.webp"),
    },
    {
      name: "Polera Jason",
      src: require("./assets/imgprod/Jason.webp"),
    },
    {
      name: "Polera Michael Myers",
      src: require("./assets/imgprod/MMyers.webp"),
    },
    {
      name: "Polera Scream",
      src: require("./assets/imgprod/Scream.webp"),
    },
    {
      name: "Polera Michael Myers",
      src: require("./assets/imgprod/MMyers.webp"),
    },
    {
      name: "Polera Scream",
      src: require("./assets/imgprod/Scream.webp"),
    },
  ];

  return (
    <div className="ContainerCard">
      {img.map((image, index) => (
        <div key={index} className="Card">
          <h2>{image.name}</h2>
          <img className="Img" src={image.src} alt="Polera" />
        </div>
      ))}
    </div>
  );
}

export default Card;
