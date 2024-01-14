import React, { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Events = () => {
  const [eventDetails, setEventDetails] = useState(false);
  const [timeline, setTimeline] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [hackathon, setHackathon] = useState(true);
  const [sales, setSales] = useState(true);

  const toggleEvent = () => {
    setEventDetails(!eventDetails);
  };

  const toggleTimeline = () => {
    setTimeline(!timeline);
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
            <div className="head1" onClick={toggleTimeline}>
              Timeline
              {timeline ? (
                <FaChevronDown fontSize={"1.5rem"} />
              ) : (
                <FaChevronUp fontSize={"1.5rem"} />
              )}
            </div>
            {!timeline && (
              <>
                <div className="head2">
                  15th Jan 2024 <br />
                  Announcement and registration for Winternship
                </div>
                <div className="head2">
                  16th Jan 2024 <br />
                  1st phase of screening
                </div>
                <div className="head2">
                  23rd Jan 2024 <br />
                  Closing date for submission of solutions for the 1st phase of
                  screening
                </div>
                <div className="head2">
                  27th Jan 2024 <br />
                  Announcement of result for 1st round of screening.
                </div>
                <div className="head2">
                  2nd Feb 2024 <br />
                  9:30 am- 10:00 am- Felicitation Programme for Dignitaries{" "}
                  <br />
                  10:00 am- 10:45 am – Speech by Dignitaries <br />
                  10:45 am- 11:00 am - Tea Break <br />
                  11:00 am- 12:00 pm – Speech by Dignitaries (continues) <br />
                  12:15 pm- 1:15 pm - Lunch Break <br />
                  1:30 pm- 5:30 pm- Competitions for Marketing, Sales, Web
                  Development and Designing <br />{" "}
                </div>
                <div className="head2">
                  23rd Feb 2024
                  <br />
                  9:30 am- 10:15 am - Prize Distribution <br />
                  10:15 am- 10:30 am- Tea Break <br />
                  10:30 am- 12:00 pm- Panel Discussion <br />
                  12:15 pm- 1:15 pm Lunch Break <br />
                  1:30 pm-2:30 pm- Networking events <br />
                  2:30 pm- 6:30 pm- Interviews{" "}
                </div>
                <div className="head1"></div>
              </>
            )}
          </div>
          <div className="box">
            <div className="head1" onClick={toggleMarketing}>
              Marketing Event Details
              {marketing ? (
                <FaChevronDown fontSize={"1.5rem"} />
              ) : (
                <FaChevronUp fontSize={"1.5rem"} />
              )}
            </div>
            {!marketing && (
              <Link className="input" to="/">
                Coming Soon...
                <BsBoxArrowUpRight />
              </Link>
            )}
          </div>
          <div className="box">
            <div className="head1" onClick={toggleHackathon}>
              {" "}
              Hackathon Details
              {hackathon ? (
                <FaChevronDown fontSize={"1.5rem"} />
              ) : (
                <FaChevronUp fontSize={"1.5rem"} />
              )}
            </div>
            {!hackathon && (
              <Link className="input" to="/">
                Coming Soon...
                <BsBoxArrowUpRight />
              </Link>
            )}
          </div>
          <div className="box">
            <div className="head1" onClick={toggleSales}>
              {" "}
              Sales Event Details
              {sales ? (
                <FaChevronDown fontSize={"1.5rem"} />
              ) : (
                <FaChevronUp fontSize={"1.5rem"} />
              )}
            </div>
            {!sales && (
              <Link className="input" to="/">
                Coming Soon...
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
