import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h2 className="nav-title">The Planets</h2>
      <div className="nav-menu">
        <a href="#">
          {" "}
          <h3>Mercury</h3>
        </a>
        <a href="#">
          {" "}
          <h3>Venus</h3>
        </a>
        <a href="#">
          {" "}
          <h3>Earth</h3>
        </a>
        <a href="#">
          {" "}
          <h3>Mars</h3>
        </a>
        <a href="#">
          {" "}
          <h3>Jupiter</h3>
        </a>
        <a href="#">
          {" "}
          <h3>Saturn</h3>
        </a>
        <a href="#">
          {" "}
          <h3>Uranus</h3>
        </a>
        <a href="#">
          {" "}
          <h3>Neptune</h3>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
