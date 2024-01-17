import React, { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Events = () => {
  const [timeline, setTimeline] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [hackathon, setHackathon] = useState(true);
  const [sales, setSales] = useState(true);
  const [design, setDesign] = useState(true);

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
  const toggleDesign = () => {
    setDesign(!design);
  };

  return (
    <div>
      <div className="box">
        <div className="head">Event Details</div>
      </div>
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
          <ul>
            <li>
              <div className="head2">
                <b>15th Jan 2024 </b>
                <br />
                Announcement and registration for Winternship
              </div>
            </li>
            <li>
              <div className="head2">
                <b>17th Jan 2024</b> <br />
                1st phase of screening
              </div>
            </li>
            <li>
              <div className="head2">
                <b>25th Jan 2024</b> <br />
                Closing date for submission of solutions for the 1st phase of
                screening
              </div>
            </li>
            <li>
              <div className="head2">
                <b>29th Jan 2024</b> <br />
                Announcement of result for 1st round of screening.
              </div>
            </li>
            <li>
              <div className="head2">
                <b>2nd Feb 2024</b> <br />
                9:30 am- 10:00 am- Felicitation Programme for Dignitaries <br />
                10:00 am- 10:45 am – Speech by Dignitaries <br />
                10:45 am- 11:00 am - Tea Break <br />
                11:00 am- 12:00 pm – Speech by Dignitaries (continues) <br />
                12:15 pm- 1:15 pm - Lunch Break <br />
                1:30 pm- 5:30 pm- Competitions for Marketing, Sales, Web
                Development and Designing <br />{" "}
              </div>
            </li>
            <li>
              <div className="head2">
                <b>3rd Feb 2024</b>
                <br />
                9:30 am- 10:15 am - Prize Distribution <br />
                10:15 am- 10:30 am- Tea Break <br />
                10:30 am- 12:00 pm- Panel Discussion <br />
                12:15 pm- 1:15 pm Lunch Break <br />
                1:30 pm-2:30 pm- Networking events <br />
                2:30 pm- 6:30 pm- Interviews{" "}
              </div>
            </li>
            <div className="head1"></div>
          </ul>
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
          <>
            <div className="head2">
              It will be in 2 phases <br />
              <b>Phase 1:</b> will be 9 days starting from Jan 17th to Jan 25th.
              The result will be announced on Jan 29th. The top 15 individuals
              will be selected.
              <br />
              <b>Phase 2:</b> will be on Feb 2nd when the screening/pitching of
              the qualified individuals will be done.
            </div>
            <Link
              className="input"
              to="/Winternship-Marketing-Event.pdf"
              target="_blank"
            >
              Rulebook is here
              <BsBoxArrowUpRight />
            </Link>
          </>
        )}
      </div>
      <div className="box">
        <div className="head1" onClick={toggleHackathon}>
          {" "}
          Tech Event Details
          {hackathon ? (
            <FaChevronDown fontSize={"1.5rem"} />
          ) : (
            <FaChevronUp fontSize={"1.5rem"} />
          )}
        </div>
        {!hackathon && (
          <>
            <div className="head2">
              It will be in 2 phases <br />
              <b>Phase 1:</b> will be 9 days starting from Jan 17th to Jan 25th.
              The result will be announced on Jan 29th. The top 15 individuals
              will be selected.
              <br />
              <b>Phase 2:</b> will be on Feb 2nd when the screening/pitching of
              the qualified individuals will be done.
            </div>
            <Link
              className="input"
              to="/Winternship-Tech-Event.pdf"
              target="_blank"
            >
              Rulebook is here
              <BsBoxArrowUpRight />
            </Link>
          </>
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
          <>
            <div className="head2">
              It will be in 2 phases <br />
              <b>Phase 1:</b> will be 9 days starting from Jan 17th to Jan 25th.
              The result will be announced on Jan 29th. The top 15 individuals
              will be selected.
              <br />
              <b>Phase 2:</b> will be on Feb 2nd when the screening/pitching of
              the qualified individuals will be done.
            </div>
            <Link
              className="input"
              to="/Winternship-Sales-Event.pdf"
              target="_blank"
            >
              Rulebook is here
              <BsBoxArrowUpRight />
            </Link>
          </>
        )}
      </div>
      <div className="box">
        <div className="head1" onClick={toggleDesign}>
          {" "}
          Design Event Details
          {design ? (
            <FaChevronDown fontSize={"1.5rem"} />
          ) : (
            <FaChevronUp fontSize={"1.5rem"} />
          )}
        </div>
        {!design && (
          <>
            <div className="head2">
              It will be in 2 phases <br />
              <b>Phase 1:</b> will be 9 days starting from Jan 17th to Jan 25th.
              The result will be announced on Jan 29th. The top 15 individuals
              will be selected.
              <br />
              <b>Phase 2:</b> will be on Feb 2nd when the screening/pitching of
              the qualified individuals will be done.
            </div>
            <Link
              className="input"
              to="/Winternship-Design-Event.pdf"
              target="_blank"
            >
              Rulebook is here
              <BsBoxArrowUpRight />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
