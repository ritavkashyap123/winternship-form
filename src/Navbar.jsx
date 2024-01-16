import React, {useState} from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsResponsive((prevState) => !prevState);
  };
  const closeMenu = () => {
    setIsResponsive(false);
  };

  return (
    <div id="myTopnav" className={`topnav ${isResponsive ? "responsive" : ""}`}>
      <Link className={`a ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeMenu}>
        Home
      </Link>
      <Link className={`a ${location.pathname === "/event" ? "active" : ""}`} to="/event" onClick={closeMenu}>
        Events
      </Link>
      <Link className={`a ${location.pathname === "/student-form" ? "active" : ""}`} to="/student-form" onClick={closeMenu}>
        Student Registration
      </Link>
      <Link className={`a ${location.pathname === "/company-form" ? "active" : ""}`} to="/company-form" onClick={closeMenu}>
        Company Registration
      </Link>
      <Link className="a icon" onClick={handleToggle}>
        <FaBars />
      </Link>
    </div>
  );
};

export default Navbar;
