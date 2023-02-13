import React, { useEffect, useState } from "react";
import "./css/Carousel.sass";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";

interface Props {
  autoPlay?: boolean;
  showButtons?: boolean;
}

const Carousel = (props: Props) => {
  const images = ["sl-verano-apple.jpeg", "sl-verano-escolares.jpg"];
  const [indexActual, setIndexActual] = useState(0);
  const [imagenActual, setImagenActual] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  //if (!Array.isArray(images) || cant === 0) return;

  useEffect(() => {
    if (props.autoPlay) {
      const interval = setInterval(() => {
        seleccionarImagen(indexActual, images);
      }, 10000);
      return () => clearInterval(interval);
    }
  });

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
