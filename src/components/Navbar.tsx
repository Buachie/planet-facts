import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <nav className="nav-bar" role="navigation">
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
            <div
              className="nav-indicator"
              style={{ backgroundColor: "#419EBB" }}
            ></div>
            Mercury
          </Link>
          <Link to="/venus" onClick={() => setOpen(false)}>
            <div
              className="nav-indicator"
              style={{ backgroundColor: "#EDA249" }}
            ></div>
            Venus
          </Link>
          <Link to="/earth" onClick={() => setOpen(false)}>
            <div
              className="nav-indicator"
              style={{ backgroundColor: "#6F2ED6" }}
            ></div>
            Earth
          </Link>
          <Link to="/mars" onClick={() => setOpen(false)}>
            <div
              className="nav-indicator"
              style={{ backgroundColor: "#D14C32" }}
            ></div>
            Mars
          </Link>
          <Link to="/jupiter" onClick={() => setOpen(false)}>
            <div
              className="nav-indicator"
              style={{ backgroundColor: "#D83A34" }}
            ></div>
            Jupiter
          </Link>
          <Link to="/saturn" onClick={() => setOpen(false)}>
            <div
              className="nav-indicator"
              style={{ backgroundColor: "#CD5120" }}
            ></div>
            Saturn
          </Link>
          <Link to="/uranus" onClick={() => setOpen(false)}>
            <div
              className="nav-indicator"
              style={{ backgroundColor: "#1EC2A4" }}
            ></div>
            Uranus
          </Link>
          <Link to="/neptune" onClick={() => setOpen(false)}>
            <div
              className="nav-indicator"
              style={{ backgroundColor: "#2D68F0" }}
            ></div>
            Neptune
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
