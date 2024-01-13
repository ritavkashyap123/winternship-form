import React from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaCalendarAlt, FaMapPin } from "react-icons/fa";

const Linktree = () => {
  return (
    <div>
      <div className="box">
        <div className="head1">
          About Winternship: 
        </div>
        <div className="tag">Northeast India's Premier Internship Fair! </div>
        <div className="dp-block">
          <div className="dp">
            <FaCalendarAlt className="dp-icon" />
            <span className="dp-span">Date: </span> 2nd - 3rd February, 2023{" "}
          </div>
          <div className="dp">
            <FaMapPin className="dp-icon1" />
            <span className="dp-span">Venue: </span> Assam Startup Office{" "}
          </div>
        </div>
        <div className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum
          aspernatur sequi id magnam temporibus rem commodi molestiae ut,
          nostrum illum pariatur quae, cumque odio reiciendis nobis nulla
          dolores, excepturi eius fugit dicta. Perspiciatis culpa provident
          laboriosam rem ipsam quis, ut sed quia vero quisquam nihil! Rem atque
          debitis dignissimos? Adipisci deserunt dicta facere? Odit iste,
          molestiae, aperiam, nesciunt ipsa blanditiis veritatis ullam
          consequatur saepe sequi iure in modi a optio at. Quo aspernatur minus
          provident corrupti harum, sequi itaque natus nesciunt quae veniam eos
          nobis quia perspiciatis rerum molestias illum maiores eligendi qui
          est! Maiores quis omnis voluptatum libero.
        </div>
      </div>
      <Link to="/event">
        <div className="box">
          <div className="head1">
            Events Details <BsBoxArrowUpRight />
          </div>
        </div>
      </Link>
      <Link to="/student-form">
        <div className="box">
          <div className="head1">
            Student Registration Form <BsBoxArrowUpRight />
          </div>
        </div>
      </Link>
      <Link to="/company-form">
        <div className="box">
          <div className="head1">
            Company Registration Form <BsBoxArrowUpRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Linktree;
