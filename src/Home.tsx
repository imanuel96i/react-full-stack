// Autores: Manuel Vidal, Benjamín Álvarez, Ignacio Korenhof
// Fecha creación: 06/02/23
// Fecha modificación: 14/02/23

// Importaciones
import React from "react";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import "./components/css/index.sass";

// Página principal
function Home() {
  return (
    <>
      <Carousel autoPlay={true}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="Destacados">PRODUCTOS DESTACADOS</h1>
      </div>

      <hr className="Salto" />
      <Card />
    </>
  );
}

export default Home;
