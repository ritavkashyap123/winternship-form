import React from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaCalendarAlt, FaMapPin } from "react-icons/fa";

const Linktree = () => {
  return (
    <div>
      <div className="box">
        <div className="head1">About Winternship:</div>
        <div className="tag">Northeast India's Premier Internship Fair! </div>
        <div className="dp-block">
          <div className="dp">
            <FaCalendarAlt className="dp-icon" />
            <span className="dp-span">Date: </span> 2nd - 3rd February, 2024{" "}
          </div>
          <div className="dp">
            <FaMapPin className="dp-icon1" />
            <span className="dp-span">Venue: </span> Assam Startup Office{" "}
          </div>
        </div>
        <div className="para">
          Winternship stands as the region's first internship fair, a unique and
          exclusive opportunity you cannot miss.
          <br />
          <br />
          <div className="dp-span"> Why Attend?</div>
          <br />
          <b> - For Startups:</b> Discover diverse talent, optimize your
          workforce, and contribute to a flourishing startup culture.
          <br />
          <b>- For Students:</b> Unlock exceptional internship opportunities,
          learn from industry leaders, and propel your professional journey.
          <br />
          <br />
          Demonstrate your skills, network with industry professionals and get
          hired!
          <br />
          Winternship is more than an event; it's a movement. Participate in
          shaping the future, fostering innovation, and cultivating a robust
          startup culture in Northeast India.
          <br />
          Register for Winternship and start your journey to success! Stay tuned
          for updates!
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
