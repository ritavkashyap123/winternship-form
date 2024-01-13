import React from "react";
import { Link } from "react-router-dom";

const Linktree = () => {
  return (
    <div>
      <Link to="/event">
        <div className="box">
          <div className="head1">Event Details</div>
        </div>
      </Link>
      <Link to="/form">
        <div className="box">
          <div className="head1">Registration Form</div>
        </div>
      </Link>
    </div>
  );
};

export default Linktree;
