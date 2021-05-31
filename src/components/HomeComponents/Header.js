import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header-div">
      <div className="header-div-left">Conduit</div>
      <div className="header-div-right">
        <ul className="left-header-options">
          <li className="list-items selected">Home</li>
          <li className="list-items">Sign in</li>
          <li className="list-items">Sign up</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
