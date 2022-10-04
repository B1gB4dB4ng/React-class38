import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header">
      <div className="Navbar">
        <Link to="/favourites">
          <div className="Navbardiv">
            <p>Favourites</p>
          </div>
        </Link>
        <Link to="/">
          <div className="Navbardiv">
            <p>Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
