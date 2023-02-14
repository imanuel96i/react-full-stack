import React from "react";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import "./components/css/index.sass";

function Home() {
  return (
    <>
      <Carousel autoPlay={true} showButtons={true} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="Destacados">PRODUCTOS DESTACADOS</h1>
      </div>

      <hr className="Salto" />
      <Card />
    </>
  );
}

export default Home;
