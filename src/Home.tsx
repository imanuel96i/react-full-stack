import React from "react";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import "./components/css/index.sass";

function Home() {
  return (
    <>
      <Carousel autoPlay={true} showButtons={true} />
      <Card />
    </>
  );
}

export default Home;
