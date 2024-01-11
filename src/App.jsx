import React, { useState } from "react";
import "./App.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { db } from "./firebaseUtils";
import { collection, addDoc } from "firebase/firestore";

const App = () => {
  const [eventDetails, setEventDetails] = useState(true);
  const [teamDetails, setTeamDetails] = useState(true);
  const [teamLeader, setTeamLeader] = useState(false);
  const [secondMember, setSecondMember] = useState(true);
  const [thirdMember, setThirdMember] = useState(true);
  const [fourthMember, setFourthMember] = useState(true);

  const [teamName, setTeamName] = useState("");
  const [eventName, setEventName] = useState("");

  const [leadName, setLeadName] = useState("");
  const [leadMail, setLeadMail] = useState("");
  const [leadNumber, setLeadNumber] = useState("");

  const [mem2Name, setMem2Name] = useState("");
  const [mem2Mail, setMem2Mail] = useState("");
  const [mem2Number, setMem2Number] = useState("");

  const [mem3Name, setMem3Name] = useState("");
  const [mem3Mail, setMem3Mail] = useState("");
  const [mem3Number, setMem3Number] = useState("");

  const [mem4Name, setMem4Name] = useState("");
  const [mem4Mail, setMem4Mail] = useState("");
  const [mem4Number, setMem4Number] = useState("");

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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    "Wash and Fold",
    "Ironing",
    "Premium Laundry",
    "Dry Cleaning",
  ];
  const handleOptionClick = (option) => {
    setEventName(option);
    setDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setLoader(true);
    try {
      const docRef = await addDoc(collection(db, "forms"), {
        teamName: teamName,
        eventName: eventName,
        leadName: leadName,
        leadMail: leadMail,
        leadNumber: leadNumber,
        mem2Name: mem2Name,
        mem2Mail: mem2Mail,
        mem2Number: mem2Number,
        mem3Name: mem3Name,
        mem3Mail: mem3Mail,
        mem3Number: mem3Number,
        mem4Name: mem4Name,
        mem4Mail: mem4Mail,
        mem4Number: mem4Number,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setTeamName("");
    setEventName("");
    setLeadName("");
    setLeadMail("");
    setLeadNumber("");
    setMem2Name("");
    setMem2Mail("");
    setMem2Number("");
    setMem3Name("");
    setMem3Mail("");
    setMem3Number("");
    setMem4Name("");
    setMem4Mail("");
    setMem4Number("");
  };

  return (
    <div>
      <div className="formdiv">
        <form action="" onSubmit={handleSubmit}>
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
                  id="team-name"
                  type="text"
                  className="input"
                  placeholder="Team Name"
                  required="true"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
                <div className="head2">Participating Events</div>
                <div className="Dropdown">
                  <div
                    className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {eventName ? eventName : "Select an Event"}
                    <div className="custom-down-icon">
                      <FaChevronDown />
                    </div>
                  </div>
                  {dropdownOpen && (
                    <div className="options">
                      {options.map((option) => (
                        <div
                          key={option}
                          className="option"
                          onChange={() => handleOptionClick(option)}
                          onClick={() => handleOptionClick(option)}
                          value={eventName}
                          required="true"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
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
                        id="team-lead-name"
                        type="text"
                        className="input"
                        placeholder="Name"
                        required="true"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                      />
                      <div className="head4">Email</div>
                      <input
                        id="team-lead-mail"
                        type="email"
                        className="input"
                        placeholder="Email"
                        required="true"
                        value={leadMail}
                        onChange={(e) => setLeadMail(e.target.value)}
                      />
                      <div className="head4">Phone Number</div>
                      <input
                        id="team-lead-number"
                        type="tel"
                        className="input"
                        placeholder="Phone No."
                        required="true"
                        value={leadNumber}
                        onChange={(e) => setLeadNumber(e.target.value)}
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
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        id="member2-name"
                        value={mem2Name}
                        onChange={(e) => setMem2Name(e.target.value)}
                      />
                      <div className="head4">Email</div>
                      <input
                        id="member2-mail"
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={mem2Mail}
                        onChange={(e) => setMem2Mail(e.target.value)}
                      />
                      <div className="head4">Phone Number</div>
                      <input
                        id="member2-number"
                        type="tel"
                        className="input"
                        placeholder="Phone No."
                        value={mem2Number}
                        onChange={(e) => setMem2Number(e.target.value)}
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
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        id="member3-name"
                        value={mem3Name}
                        onChange={(e) => setMem3Name(e.target.value)}
                      />
                      <div className="head4">Email</div>
                      <input
                        id="member3-mail"
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={mem3Mail}
                        onChange={(e) => setMem3Mail(e.target.value)}
                      />
                      <div className="head4">Phone Number</div>
                      <input
                        id="member3-number"
                        type="tel"
                        className="input"
                        placeholder="Phone No."
                        value={mem3Number}
                        onChange={(e) => setMem3Number(e.target.value)}
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
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        id="member4-name"
                        value={mem4Name}
                        onChange={(e) => setMem4Name(e.target.value)}
                      />
                      <div className="head4">Email</div>
                      <input
                        id="member4-mail"
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={mem4Mail}
                        onChange={(e) => setMem4Mail(e.target.value)}
                      />
                      <div className="head4">Phone Number</div>
                      <input
                        id="member4-number"
                        type="tel"
                        className="input"
                        placeholder="Phone No."
                        value={mem4Number}
                        onChange={(e) => setMem4Number(e.target.value)}
                      />
                    </>
                  )}
                </div>
                <div className="btn">
                  <button type="submit">Submit</button>
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
