import React, { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Events = () => {
  const [eventDetails, setEventDetails] = useState(false);
  const [marketing, setMarketing] = useState(true);
  const [hackathon, setHackathon] = useState(true);
  const [sales, setSales] = useState(true);

  const toggleEvent = () => {
    setEventDetails(!eventDetails);
  };

  const toggleMarketing = () => {
    setMarketing(!marketing);
  };
  const toggleHackathon = () => {
    setHackathon(!hackathon);
  };
  const toggleSales = () => {
    setSales(!sales);
  };

  return (
    <div>
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
      </div>
      {!eventDetails && (
        <>
          <div className="box">
            <div className="head1" onClick={toggleMarketing}>
              {" "}
              <div style={{ fontSize: "1.5rem" }}>
                Marketing Event Details
              </div>{" "}
              {marketing ? (
                <FaChevronDown fontSize={"1.5rem"} />
              ) : (
                <FaChevronUp fontSize={"1.5rem"} />
              )}
            </div>
            {!marketing && (
              <Link className="input" to="https://example.com" target="_blank">
                a Rulebook
                <BsBoxArrowUpRight />
              </Link>
            )}
          </div>
          <div className="box">
            <div className="head1" onClick={toggleHackathon}>
              {" "}
              <div style={{ fontSize: "1.5rem" }}>Hackathon Details</div>{" "}
              {hackathon ? (
                <FaChevronDown fontSize={"1.5rem"} />
              ) : (
                <FaChevronUp fontSize={"1.5rem"} />
              )}
            </div>
            {!hackathon && (
              <Link className="input" to="https://example.com" target="_blank">
                a Rulebook
                <BsBoxArrowUpRight />
              </Link>
            )}
          </div>
          <div className="box">
            <div className="head1" onClick={toggleSales}>
              {" "}
              <div style={{ fontSize: "1.5rem" }}>Sales Event Details</div>{" "}
              {sales ? (
                <FaChevronDown fontSize={"1.5rem"} />
              ) : (
                <FaChevronUp fontSize={"1.5rem"} />
              )}
            </div>
            {!sales && (
              <Link className="input" to="https://example.com" target="_blank">
                a Rulebook
                <BsBoxArrowUpRight />
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Events;
