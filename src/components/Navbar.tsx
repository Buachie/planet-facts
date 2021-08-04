import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h2 className="nav-title">The Planets</h2>
      <div className="nav-menu">
        <a href="#">Mercury</a>
        <a href="#">Venus</a>
        <a href="#">Earth</a>
        <a href="#">Mars</a>
        <a href="#">Jupiter</a>
        <a href="#">Saturn</a>
        <a href="#">Uranus</a>
        <a href="#">Neptune</a>
      </div>
    </nav>
  );
};

export default Navbar;
