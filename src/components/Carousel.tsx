import React, { useState } from "react";
import "./css/Carousel.sass";
import veranoApple from "./assets/img/sl-verano-apple.jpeg";
import veranoEscolares from "./assets/img/sl-verano-escolares.jpg";

const Carousel = () => {
  const images = [veranoApple, veranoEscolares];
  const [selectedPos, setSelectedPos] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const previous = () => {
    if (selectedPos > 0) {
      setSelectedImage(images[selectedPos - 1]);
      setSelectedPos(selectedPos - 1);
    } else {
      setSelectedImage(images[images.length - 1]);
      setSelectedPos(images.length - 1);
    }
  };

  const next = () => {
    if (selectedPos < images.length - 1) {
      setSelectedImage(images[selectedPos + 1]);
      setSelectedPos(selectedPos + 1);
    } else {
      setSelectedImage(images[0]);
      setSelectedPos(0);
    }
  };

  return (
    <>
      <img src={selectedImage} alt="Imagen" />
      <button onClick={previous}>{"<"}</button>
      <button onClick={next}>{">"}</button>
    </>
  );
};

export default Carousel;
