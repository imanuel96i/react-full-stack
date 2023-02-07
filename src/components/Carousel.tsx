import React, { useState } from "react";

const Carousel = () => {
  const images = ["sl-verano-apple.jpeg", "sl-verano-escolar.jpg"];
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
    if (selectedPos < images.length) {
      setSelectedImage(images[selectedPos + 1]);
      setSelectedPos(selectedPos + 1);
    } else {
      setSelectedImage(images[0]);
      setSelectedPos(0);
    }
  };

  return <></>;
};

export default Carousel;
