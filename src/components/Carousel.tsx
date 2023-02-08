import React, { useEffect, useState } from "react";
import "./css/Carousel.sass";
import veranoApple from "./assets/img/sl-verano-apple.jpeg";
import veranoEscolares from "./assets/img/sl-verano-escolares.jpg";

const Carousel = () => {
  const images = [veranoApple, veranoEscolares];
  const [imagenActual, setImagenActual] = useState(0);
  const cant = images.length;

  //if (!Array.isArray(images) || cant === 0) return;

  const sigImagen = () => {
    setImagenActual(imagenActual === cant - 1 ? 0 : imagenActual + 1);
  };

  const antImagen = () => {
    setImagenActual(imagenActual === 0 ? cant - 1 : imagenActual - 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      sigImagen();
    }, 10000);
    return () => clearInterval(slider);
  });

  return (
    <>
      <div className="container">
        <button className="ant" onClick={antImagen}>
          {"<"}
        </button>
        {images.map((img, index) => {
          return (
            <div className={imagenActual === index ? "slide active" : "slide"}>
              {imagenActual === index && (
                <img
                  key={index}
                  src={img}
                  alt="Imagen"
                  className="imgCarousel"
                ></img>
              )}
            </div>
          );
        })}

        <button className="sig" onClick={sigImagen}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default Carousel;
