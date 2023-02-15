// Autores: Manuel Vidal, Benjamín Álvarez, Ignacio Korenhof
// Fecha creación: 06/02/23
// Fecha modificación: 14/02/23

// Importaciones
import React, { useEffect, useState } from "react";
import "./css/Carousel.sass";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";

// Variables de typeScript
interface Props {
  autoPlay?: boolean;
}

const Carousel = (props: Props) => {

  // Declaración de variables
  const images = ["1_sin_logo.png", "2_sin_logo.png"];
  const [indexActual, setIndexActual] = useState(0);
  const [imagenActual, setImagenActual] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

 // Movimiento automático del carrusel depués de 10 segundos
  useEffect(() => {
    if (props.autoPlay) {
      const interval = setInterval(() => {
        seleccionarImagen(indexActual, images);
      }, 10000);
      return () => clearInterval(interval);
    }
  });

  // Cambio de imagenes
  const seleccionarImagen = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condicion = next
        ? indexActual < images.length - 1
        : indexActual > 0;
      const indexSig = next
        ? condicion
          ? indexActual + 1
          : 0
        : condicion
        ? indexActual - 1
        : images.length - 1;
      setImagenActual(images[indexSig]);
      setIndexActual(indexSig);
    }, 1000);
  };

  // Cambio manual de imagenes
  const sigImagen = () => {
    seleccionarImagen(indexActual, images);
  };

  const antImagen = () => {
    seleccionarImagen(indexActual, images, false);
  };

  return (
    <>
      <div className="container">
        <button className="ant" onClick={antImagen}>
          <HiOutlineArrowCircleLeft />
        </button>
        <img
          className="imgFondo"
          src={require("./assets/img/sin_fondo.png")}
          alt=""
        />
        <img
          src={require(`./assets/img/${imagenActual}`)}
          alt="Imagen"
          className={loaded ? "imgC loaded" : "imgC"}
          onLoad={() => setLoaded(true)}
        />

        <button className="sig" onClick={sigImagen}>
          <HiOutlineArrowCircleRight />
        </button>
      </div>
    </>
  );
};

export default Carousel;
