import React, { useState } from "react";
import "./App.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const App = () => {
  const [eventDetails, setEventDetails] = useState(true);
  const [teamDetails, setTeamDetails] = useState(true);
  const [teamLeader, setTeamLeader] = useState(true);
  const [secondMember, setSecondMember] = useState(true);
  const [thirdMember, setThirdMember] = useState(true);
  const [fourthMember, setFourthMember] = useState(true);

  const toggleEvent = () => {
    setEventDetails(!eventDetails);
  };
  const toggleTeam = () => {
    setTeamDetails(!teamDetails);
  };
  const toggleLeader = () => {
    setTeamLeader(!teamLeader);
  };
  const toggleSecond = () => {
    setSecondMember(!secondMember);
  };
  const toggleThird = () => {
    setThirdMember(!thirdMember);
  };
  const toggleFourth = () => {
    setFourthMember(!fourthMember);
  };

  const clicked = () => {
    alert("Form has been submitted.\nThanks for the feedback :)");
  };

  return (
    <div>
      <div className="formdiv">
        <form action="" onSubmit={clicked}>
          <div className="head">Winternship Form</div>
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
          <div className="box">
            <div className="head1" onClick={toggleTeam}>
              {" "}
              Team Details{" "}
              {teamDetails ? (
                <FaChevronDown fontSize={"1.5rem"} />
              ) : (
                <FaChevronUp fontSize={"1.5rem"} />
              )}
            </div>
            {!teamDetails && (
              <>
                <div className="head2">Team Name</div>
                <input
                  type="text"
                  className="input"
                  placeholder="Team Name"
                  required
                />
                <div className="head2">Participating Events</div>
                <div className="event-box">
                  <input
                    type="radio"
                    id="a"
                    name="event"
                    value="a"
                    className="event"
                  />
                  <label for="a">a</label>
                </div>
                <div className="event-box">
                  <input
                    type="radio"
                    id="b"
                    name="event"
                    value="b"
                    className="event"
                  />
                  <label for="b">b</label>
                </div>
                <div className="event-box">
                  <input
                    type="radio"
                    id="c"
                    name="event"
                    value="c"
                    className="event"
                  />
                  <label for="c">c</label>
                </div>
                <div className="event-box">
                  <input
                    type="radio"
                    id="d"
                    name="event"
                    value="d"
                    className="event"
                  />
                  <label for="d">d</label>
                </div>
                <div className="head2">Team Member Details</div>
                <div className="membox">
                  <div className="head3" onClick={toggleLeader}>
                    Team Leader{" "}
                    {teamLeader ? (
                      <FaChevronDown fontSize={"1.5rem"} />
                    ) : (
                      <FaChevronUp fontSize={"1.5rem"} />
                    )}
                  </div>
                  {!teamLeader && (
                    <>
                      <div className="head4">Name</div>
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        required
                      />
                      <div className="head4">Email</div>
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        required
                      />
                      <div className="head4">Phone Number</div>
                      <input
                        type="tel"
                        className="input"
                        placeholder="Phone No."
                        required
                      />
                    </>
                  )}
                </div>
                <div className="membox">
                  <div className="head3" onClick={toggleSecond}>
                    Second Member{" "}
                    {secondMember ? (
                      <FaChevronDown fontSize={"1.5rem"} />
                    ) : (
                      <FaChevronUp fontSize={"1.5rem"} />
                    )}
                  </div>
                  {!secondMember && (
                    <>
                      <div className="head4">Name</div>
                      <input type="text" className="input" placeholder="Name" />
                      <div className="head4">Email</div>
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                      />
                      <div className="head4">Phone Number</div>
                      <input
                        type="tel"
                        className="input"
                        placeholder="Phone No."
                      />
                    </>
                  )}
                </div>
                <div className="membox">
                  <div className="head3" onClick={toggleThird}>
                    Third Member{" "}
                    {thirdMember ? (
                      <FaChevronDown fontSize={"1.5rem"} />
                    ) : (
                      <FaChevronUp fontSize={"1.5rem"} />
                    )}
                  </div>
                  {!thirdMember && (
                    <>
                      <div className="head4">Name</div>
                      <input type="text" className="input" placeholder="Name" />
                      <div className="head4">Email</div>
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                      />
                      <div className="head4">Phone Number</div>
                      <input
                        type="tel"
                        className="input"
                        placeholder="Phone No."
                      />
                    </>
                  )}
                </div>
                <div className="membox">
                  <div className="head3" onClick={toggleFourth}>
                    Fourth Member{" "}
                    {fourthMember ? (
                      <FaChevronDown fontSize={"1.5rem"} />
                    ) : (
                      <FaChevronUp fontSize={"1.5rem"} />
                    )}
                  </div>
                  {!fourthMember && (
                    <>
                      <div className="head4">Name</div>
                      <input type="text" className="input" placeholder="Name" />
                      <div className="head4">Email</div>
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                      />
                      <div className="head4">Phone Number</div>
                      <input
                        type="tel"
                        className="input"
                        placeholder="Phone No."
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
