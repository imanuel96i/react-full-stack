// Autores: Manuel Vidal, Benjamín Álvarez, Ignacio Korenhof
// Fecha creación: 13/02/23
// Fecha modificación: 13/02/23

// Importaciones
import React, { useState } from "react";
import "./css/Filter.sass";

function Filter() {

  // Declaración de variables
  const [wid, setWid] = useState("0px");

  // Abrir menú de filtros 
  const openFilter = () => {
    console.log(wid);
    setWid("250px");
  };

  // Cerrar menú de filtros 
  const closeFilter = () => {
    setWid("0px");
  };

  return (
    <>
      <div className="sidefilter" style={{ width: wid }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeFilter}>
          &times;
        </a>
        <a href="#">Filtro1</a>
        <a href="#">Filtro2</a>
        <a href="#">Filtro3</a>
        <a href="#">Filtro4</a>
      </div>
      <span className="OpenSideFilter" onClick={openFilter}>
        <a>Filtros</a>
      </span>
    </>
  );
}

export default Filter;
