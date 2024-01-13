import React, {useState} from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsResponsive((prevState) => !prevState);
  };

  return (
    <div id="myTopnav" className={`topnav ${isResponsive ? "responsive" : ""}`}>
      <Link className={`a ${location.pathname === "/" ? "active" : ""}`} to="/">
        Home
      </Link>
      <Link className={`a ${location.pathname === "/event" ? "active" : ""}`} to="/event">
        Events
      </Link>
      <Link className={`a ${location.pathname === "/form" ? "active" : ""}`} to="/form">
        Student Register
      </Link>
      <Link className={`a ${location.pathname === "/form" ? "active" : ""}`} to="/form">
        Company Register
      </Link>
      <Link className="a icon" onClick={handleToggle}>
        <FaBars />
      </Link>
    </div>
  );
};

export default Navbar;
