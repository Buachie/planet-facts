import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <h2 className="nav-title">The Planets</h2>
        <div className="menu-icon">
          <i
            className={open ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className={open ? "nav-menu active" : "nav-menu"}>
          <Link to="/" onClick={() => setOpen(false)}>
            Mercury
          </Link>
          <Link to="/venus" onClick={() => setOpen(false)}>
            Venus
          </Link>
          <Link to="/earth" onClick={() => setOpen(false)}>
            Earth
          </Link>
          <Link to="/mars" onClick={() => setOpen(false)}>
            Mars
          </Link>
          <Link to="/jupiter" onClick={() => setOpen(false)}>
            Jupiter
          </Link>
          <Link to="/saturn" onClick={() => setOpen(false)}>
            Saturn
          </Link>
          <Link to="/uranus" onClick={() => setOpen(false)}>
            Uranus
          </Link>
          <Link to="/neptune" onClick={() => setOpen(false)}>
            Neptune
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
