/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./css/Card.sass";

function Card() {
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
  ];

  return (
    <div className="ContainerCard">
      {img.map((image, index) => (
        <div key={index} className="Card">
          <h2>{image.name}</h2>
          <img className="Img" src={image.src} alt="image" />
        </div>
      ))}
    </div>
  );
}

export default Card;
