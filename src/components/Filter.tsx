/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./css/Filter.sass";

function Filter() {
  const [wid, setWid] = useState("0px");

  const openFilter = () => {
    console.log(wid);
    setWid("250px");
  };

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
