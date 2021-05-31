import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

function Header() {
  return (
    <div className="header-div">
      <div className="header-div-left">Conduit</div>
      <div className="header-div-right">
        <ul className="left-header-options">
          <li className="list-items selected">Home</li>
          <Link to="/login">
            <li className="list-items link-item">Sign in</li>
          </Link>
          <li className="list-items">Sign up</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
