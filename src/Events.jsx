import React, { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Events = () => {
  const [eventDetails, setEventDetails] = useState(true);

  const toggleEvent = () => {
    setEventDetails(!eventDetails);
  };

  return (
    <div className="box">
      <div className="head1" onClick={toggleEvent}>
        {" "}
        Event Details{" "}
        {eventDetails ? (
          <FaChevronDown fontSize={"1.5rem"} />
        ) : (
          <FaChevronUp fontSize={"1.5rem"} />
        )}
      </div>
      {!eventDetails && (
        <>
          {/* <Link className="input"  to="/frint.in">Hackathon <BsBoxArrowUpRight /></Link> */}
          <a className="input" href="https://example.com" target="_blank">
            a Rulebook
            <BsBoxArrowUpRight />
          </a>
          <a className="input" href="https://example.com" target="_blank">
            b Rulebook
            <BsBoxArrowUpRight />
          </a>
          <a className="input" href="https://example.com" target="_blank">
            c Rulebook
            <BsBoxArrowUpRight />
          </a>
          <a className="input" href="https://example.com" target="_blank">
            d Rulebook
            <BsBoxArrowUpRight />
          </a>
        </>
      )}
    </div>
  );
};

export default Events;
