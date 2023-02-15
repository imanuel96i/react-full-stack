// Autores: Manuel Vidal, Benjamín Álvarez, Ignacio Korenhof
// Fecha creación: 06/02/23
// Fecha modificación: 14/02/23

// Importaciones
import React, { useState } from "react";
import "./css/Nav.sass";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import logo from "./assets/img/logo.png";
import { NavLink as Link } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";

function Nav() {

  // Declaración de variables
  const [sideMenuState, setSideMenuState] = useState(false);  
  const [classContainerLink, setClassContainerLink] = useState(
    "NavContainerLink unclicked"
  );
  const [classNavBar, setClassNavBar] = useState("NavBar unclicked");
  const [displayMenuButton, setDisplayMenuButton] = useState(true);

  // Actualizar valor de la variable sideMenuState
  const updateSideMenu = () => {
    setSideMenuState(!sideMenuState);
  };  

  // Actualizar las clases de SASS para el el NavBar principal
  const updateMenuButton = () => {
    setDisplayMenuButton(!displayMenuButton);
    if (displayMenuButton === true) {
      setClassNavBar("NavBar clicked");
      setClassContainerLink("NavContainerLink clicked");
    } else {
      setClassContainerLink("NavContainerLink unclicked");
      setClassNavBar("NavBar unclicked");
    }
  };
  return (
    <>
      <div className={classNavBar}>
        <div className="NavContainer">
          <Link to="/">
            <img
              src={logo}
              width="120"
              alt="imagen"
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <div className="NavCategories" onClick={updateSideMenu}>
            <FaBars />
            <button className="NavButton"> Categorias</button>
          </div>
          {displayMenuButton ? (
            <FaBars
              className="NavDisplayMenuButton"
              onClick={updateMenuButton}
            />
          ) : (
            <MdClose
              className="NavDisplayMenuButton"
              onClick={updateMenuButton}
            />
          )}
        </div>
        <div className="NavContainerSearch">
          <input
            type="text"
            id="txt"
            className="NavSearchBar"
            placeholder="Búsqueda de productos"
          />
        </div>
        <div id="test" className={classContainerLink}>
          <Link className="underline" to="/">
            Inicio
          </Link>
          <Link className="underline" to="/Products">
            Productos
          </Link>
          <Link className="underline" to="#kk">
            Contacto
          </Link>
        </div>
      </div>
      {/* Importar componente menú lateral */}
      <SideMenu menuState={sideMenuState} />
    </>
  );
}

export default Nav;
