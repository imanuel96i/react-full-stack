import React, { useState } from "react";
import "./css/Nav.sass";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import logo from "./assets/img/logo.png";

function Nav() {
  const [classContainerLink, setClassContainerLink] = useState(
    "NavContainerLink unclicked"
  );
  const [displayMenuButton, setDisplayMenuButton] = useState(true);
  const updateMenuButton = () => {
    setDisplayMenuButton(!displayMenuButton);
    if (displayMenuButton === true) {
      setClassContainerLink("NavContainerLink clicked");
    } else {
      setClassContainerLink("NavContainerLink unclicked");
    }
  };
  return (
    <div className="NavBar">
      <div className="NavContainer">
        <a href="#">
          <img src={logo} width="120" />
        </a>
        {displayMenuButton ? (
          <FaBars className="NavDisplayMenuButton" onClick={updateMenuButton} />
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
          placeholder="HOLA"
        />
      </div>
      <div id="test" className={classContainerLink}>
        <a href="www.google.cl">Home</a>
        <a href="#k">About</a>
        <a href="#kk">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
