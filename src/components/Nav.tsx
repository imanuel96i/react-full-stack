import React, { useState } from "react";
import "./css/Nav.sass";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import logo from "./assets/img/logo.png";
import { NavLink as Link } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";

function Nav() {
  const [sideMenuState, setSideMenuState] = useState(false);

  const updateSideMenu = () => {
    setSideMenuState(!sideMenuState);
  };

  const [classContainerLink, setClassContainerLink] = useState(
    "NavContainerLink unclicked"
  );

  const [classNavBar, setClassNavBar] = useState("NavBar unclicked");

  const [displayMenuButton, setDisplayMenuButton] = useState(true);

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
            Home
          </Link>
          <Link className="underline" to="/Products">
            Products
          </Link>
          <Link className="underline" to="#kk">
            Contact
          </Link>
        </div>
      </div>
      <SideMenu menuState={sideMenuState} />
    </>
  );
}

export default Nav;
