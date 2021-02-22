import React from "react";
import "./styles.css";
import logo from "../../assets/rakuten_logo.png";

export const Navbar = ({ handleGoToHome }) => {
  return (
    <nav className="navbar">
      <img
        className="navbar__logo"
        src={logo}
        alt=""
        onClick={handleGoToHome}
      />
    </nav>
  );
};
