import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h2 className="nav-title">The Planets</h2>
      <div className="nav-menu">
        <Link to="/">Mercury</Link>
        <Link to="/venus">Venus</Link>
        <Link to="/earth">Earth</Link>
        <Link to="/mars">Mars</Link>
        <Link to="/jupiter">Jupiter</Link>
        <Link to="/saturn">Saturn</Link>
        <Link to="/uranus">Uranus</Link>
        <Link to="/neptune">Neptune</Link>
      </div>
    </nav>
  );
};

export default Navbar;
