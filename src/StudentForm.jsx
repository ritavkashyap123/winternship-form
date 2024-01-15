import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { db } from "./firebaseUtils";
import { collection, addDoc } from "firebase/firestore";

const Form = () => {
  const [teamDetails, setTeamDetails] = useState(false);
  const [teamLeader, setTeamLeader] = useState(false);
  const [secondMember, setSecondMember] = useState(true);
  const [thirdMember, setThirdMember] = useState(true);
  const [fourthMember, setFourthMember] = useState(true);

  const [teamName, setTeamName] = useState("");
  const [eventName, setEventName] = useState("");

  const [leadName, setLeadName] = useState("");
  const [leadMail, setLeadMail] = useState("");
  const [leadNumber, setLeadNumber] = useState("");
  const [leadAge, setLeadAge] = useState("");
  const [leadLocation, setLeadLocation] = useState("");
  const [leadInstitute, setLeadInstitute] = useState("");
  const [leadCourse, setLeadCourse] = useState("");
  const [leadCurrentYear, setLeadCurrentYear] = useState("");
  const [leadInterest, setLeadInterest] = useState("");
  const [leadPriorWork, setLeadPriorWork] = useState("");
  const [leadCurrentWork, setLeadCurrentWork] = useState("");
  const [leadCategory, setLeadCategory] = useState("");

  const [mem2Name, setMem2Name] = useState("");
  const [mem2Mail, setMem2Mail] = useState("");
  const [mem2Number, setMem2Number] = useState("");
  const [mem2Age, setMem2Age] = useState("");
  const [mem2Location, setMem2Location] = useState("");
  const [mem2Institute, setMem2Institute] = useState("");
  const [mem2Course, setMem2Course] = useState("");
  const [mem2CurrentYear, setMem2CurrentYear] = useState("");
  const [mem2Interest, setMem2Interest] = useState("");
  const [mem2PriorWork, setMem2PriorWork] = useState("");
  const [mem2CurrentWork, setMem2CurrentWork] = useState("");
  const [mem2Category, setMem2Category] = useState("");

  const [mem3Name, setMem3Name] = useState("");
  const [mem3Mail, setMem3Mail] = useState("");
  const [mem3Number, setMem3Number] = useState("");
  const [mem3Age, setMem3Age] = useState("");
  const [mem3Location, setMem3Location] = useState("");
  const [mem3Institute, setMem3Institute] = useState("");
  const [mem3Course, setMem3Course] = useState("");
  const [mem3CurrentYear, setMem3CurrentYear] = useState("");
  const [mem3Interest, setMem3Interest] = useState("");
  const [mem3PriorWork, setMem3PriorWork] = useState("");
  const [mem3CurrentWork, setMem3CurrentWork] = useState("");
  const [mem3Category, setMem3Category] = useState("");

  const [mem4Name, setMem4Name] = useState("");
  const [mem4Mail, setMem4Mail] = useState("");
  const [mem4Number, setMem4Number] = useState("");
  const [mem4Age, setMem4Age] = useState("");
  const [mem4Location, setMem4Location] = useState("");
  const [mem4Institute, setMem4Institute] = useState("");
  const [mem4Course, setMem4Course] = useState("");
  const [mem4CurrentYear, setMem4CurrentYear] = useState("");
  const [mem4Interest, setMem4Interest] = useState("");
  const [mem4PriorWork, setMem4PriorWork] = useState("");
  const [mem4CurrentWork, setMem4CurrentWork] = useState("");
  const [mem4Category, setMem4Category] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);

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

  const options = [
    "Bech ke Dikhao",
    "Cipher Sprint",
    "Design Event",
  ];
  const options1 = [
    "Higher Secondary",
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year",
    "5th Year",
    "Pass out",
  ];

  const handleOptionClick = (option) => {
    setEventName(option);
    setDropdownOpen(false);
  };
  const handleOptionClick1 = (option) => {
    setLeadCurrentYear(option);
    setDropdownOpen1(false);
  };
  const handleOptionClick2 = (option) => {
    setMem2CurrentYear(option);
    setDropdownOpen2(false);
  };
  const handleOptionClick3 = (option) => {
    setMem3CurrentYear(option);
    setDropdownOpen3(false);
  };
  const handleOptionClick4 = (option) => {
    setMem4CurrentYear(option);
    setDropdownOpen4(false);
  };

  const handleLeadInterest = (event) => {
    const { name, checked } = event.target;
    setLeadInterest((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleLeadPriorWork = (event) => {
    const { name, checked } = event.target;
    setLeadPriorWork((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleLeadCurrentWork = (event) => {
    const { name, checked } = event.target;
    setLeadCurrentWork((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleLeadCategory = (event) => {
    const { name, checked } = event.target;
    setLeadCategory((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleMem2Interest = (event) => {
    const { name, checked } = event.target;
    setMem2Interest((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem2PriorWork = (event) => {
    const { name, checked } = event.target;
    setMem2PriorWork((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem2CurrentWork = (event) => {
    const { name, checked } = event.target;
    setMem2CurrentWork((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem2Category = (event) => {
    const { name, checked } = event.target;
    setMem2Category((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleMem3Interest = (event) => {
    const { name, checked } = event.target;
    setMem3Interest((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem3PriorWork = (event) => {
    const { name, checked } = event.target;
    setMem3PriorWork((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem3CurrentWork = (event) => {
    const { name, checked } = event.target;
    setMem3CurrentWork((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem3Category = (event) => {
    const { name, checked } = event.target;
    setMem3Category((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleMem4Interest = (event) => {
    const { name, checked } = event.target;
    setMem4Interest((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem4PriorWork = (event) => {
    const { name, checked } = event.target;
    setMem4PriorWork((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem4CurrentWork = (event) => {
    const { name, checked } = event.target;
    setMem4CurrentWork((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };
  const handleMem4Category = (event) => {
    const { name, checked } = event.target;
    setMem4Category((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
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
        leadAge: leadAge,
        leadLocation: leadLocation,
        leadInstitute: leadInstitute,
        leadCourse: leadCourse,
        leadCurrentYear: leadCurrentYear,
        leadInterest: Object.keys(leadInterest),
        leadPriorWork: Object.keys(leadPriorWork),
        leadCurrentWork: Object.keys(leadCurrentWork),
        leadCategory: Object.keys(leadCategory),
        mem2Name: mem2Name,
        mem2Mail: mem2Mail,
        mem2Number: mem2Number,
        mem2Age: mem2Age,
        mem2Location: mem2Location,
        mem2Institute: mem2Institute,
        mem2Course: mem2Course,
        mem2CurrentYear: mem2CurrentYear,
        mem2Interest: Object.keys(mem2Interest),
        mem2PriorWork: Object.keys(mem2PriorWork),
        mem2CurrentWork: Object.keys(mem2CurrentWork),
        mem2Category: Object.keys(mem2Category),
        mem3Name: mem3Name,
        mem3Mail: mem3Mail,
        mem3Number: mem3Number,
        mem3Age: mem3Age,
        mem3Location: mem3Location,
        mem3Institute: mem3Institute,
        mem3Course: mem3Course,
        mem3CurrentYear: mem3CurrentYear,
        mem3Interest: Object.keys(mem3Interest),
        mem3PriorWork: Object.keys(mem3PriorWork),
        mem3CurrentWork: Object.keys(mem3CurrentWork),
        mem3Category: Object.keys(mem3Category),
        mem4Name: mem4Name,
        mem4Mail: mem4Mail,
        mem4Number: mem4Number,
        mem4Age: mem4Age,
        mem4Location: mem4Location,
        mem4Institute: mem4Institute,
        mem4Course: mem4Course,
        mem4CurrentYear: mem4CurrentYear,
        mem4Interest: Object.keys(mem4Interest),
        mem4PriorWork: Object.keys(mem4PriorWork),
        mem4CurrentWork: Object.keys(mem4CurrentWork),
        mem4Category: Object.keys(mem4Category),
      });
      // console.log("Document written with ID: ", docRef.id);
      alert("Registration Successful ");
    } catch (e) {
      // console.error("Error adding document: ", e);
      alert("Registration failed error: ", e);
    }
    setTeamName("");
    setEventName("");
    setLeadName("");
    setLeadMail("");
    setLeadNumber("");
    setLeadAge("");
    setLeadLocation("");
    setLeadInstitute("");
    setLeadCourse("");
    setLeadCurrentYear("");
    setLeadInterest("");
    setLeadPriorWork("");
    setLeadCurrentWork("");
    setLeadCategory("");
    setMem2Name("");
    setMem2Mail("");
    setMem2Number("");
    setMem2Age("");
    setMem2Location("");
    setMem2Institute("");
    setMem2Course("");
    setMem2CurrentYear("");
    setMem2Interest("");
    setMem2PriorWork("");
    setMem2CurrentWork("");
    setMem2Category("");
    setMem3Name("");
    setMem3Mail("");
    setMem3Number("");
    setMem3Age("");
    setMem3Location("");
    setMem3Institute("");
    setMem3Course("");
    setMem3CurrentYear("");
    setMem3Interest("");
    setMem3PriorWork("");
    setMem3CurrentWork("");
    setMem3Category("");
    setMem4Name("");
    setMem4Mail("");
    setMem4Number("");
    setMem4Age("");
    setMem4Location("");
    setMem4Institute("");
    setMem4Course("");
    setMem4CurrentYear("");
    setMem4Interest("");
    setMem4PriorWork("");
    setMem4CurrentWork("");
    setMem4Category("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="box">
          <div className="head">Student Registration Form</div>
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
              <div className="head2">
                Team Name <span className="required">*</span>
              </div>
              <input
                id="team-name"
                type="text"
                className="input"
                placeholder="Team Name"
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
              <div className="head2">
                Participating Events <span className="required">*</span>
              </div>
              <div className="Dropdown">
                <div
                  className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {eventName ? eventName : "Select the Event"}
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
                        required
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
                  Team Leader
                  {teamLeader ? (
                    <FaChevronDown fontSize={"1.5rem"} />
                  ) : (
                    <FaChevronUp fontSize={"1.5rem"} />
                  )}
                </div>
                {!teamLeader && (
                  <>
                    <div className="head4">
                      Name <span className="required">*</span>
                    </div>
                    <input
                      id="team-lead-name"
                      type="text"
                      className="input"
                      placeholder="Name"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                    />
                    <div className="head4">
                      Email <span className="required">*</span>
                    </div>
                    <input
                      id="team-lead-mail"
                      type="email"
                      className="input"
                      placeholder="Email"
                      required
                      value={leadMail}
                      onChange={(e) => setLeadMail(e.target.value)}
                    />
                    <div className="head4">
                      Phone Number <span className="required">*</span>
                    </div>
                    <input
                      id="team-lead-number"
                      type="tel"
                      className="input"
                      placeholder="Phone No."
                      required
                      value={leadNumber}
                      onChange={(e) => setLeadNumber(e.target.value)}
                    />
                    <div className="head4">
                      Age <span className="required">*</span>
                    </div>
                    <input
                      id="team-lead-age"
                      type="number"
                      className="input"
                      placeholder="Age"
                      required
                      value={leadAge}
                      onChange={(e) => setLeadAge(e.target.value)}
                    />
                    <div className="head4">
                      Current Address <span className="required">*</span>
                    </div>
                    <input
                      id="team-lead-address"
                      type="text"
                      className="input"
                      placeholder="Address"
                      required
                      value={leadLocation}
                      onChange={(e) => setLeadLocation(e.target.value)}
                    />
                    <div className="head4">
                      Institution Name <span className="required">*</span>
                    </div>
                    <input
                      id="team-lead-institute"
                      type="text"
                      className="input"
                      placeholder="Institution"
                      required
                      value={leadInstitute}
                      onChange={(e) => setLeadInstitute(e.target.value)}
                    />
                    <div className="head4">
                      Course you are studying{" "}
                      <span className="required">*</span>
                    </div>
                    <input
                      id="team-lead-course"
                      type="text"
                      className="input"
                      placeholder="Course"
                      required
                      value={leadCourse}
                      onChange={(e) => setLeadCourse(e.target.value)}
                    />
                    <div className="head4">
                      Current Studying Year <span className="required">*</span>
                    </div>
                    <div className="Dropdown">
                      <div
                        className={`dropdown-header ${
                          dropdownOpen1 ? "open" : ""
                        }`}
                        onClick={() => setDropdownOpen1(!dropdownOpen1)}
                      >
                        {leadCurrentYear ? leadCurrentYear : "Current Year"}
                        <div className="custom-down-icon">
                          <FaChevronDown />
                        </div>
                      </div>
                      {dropdownOpen1 && (
                        <div className="options">
                          {options1.map((option) => (
                            <div
                              key={option}
                              className="option"
                              onChange={() => handleOptionClick1(option)}
                              onClick={() => handleOptionClick1(option)}
                              value={leadCurrentYear}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="head4">
                      Interested in <span className="required">*</span>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        id="id1"
                        name="Internship"
                        onChange={handleLeadInterest}
                      />
                      <label htmlFor="id1" className="checkbox-label">
                        Internship
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id2"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelance"
                        onChange={handleLeadInterest}
                      />
                      <label htmlFor="id2" className="checkbox-label">
                        Freelance
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id3"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Startup"
                        onChange={handleLeadInterest}
                      />
                      <label htmlFor="id3" className="checkbox-label">
                        Startup
                      </label>
                    </div>
                    <div className="head4">
                      Prior work experience as{" "}
                      <span className="required">*</span>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id4"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Intern"
                        onChange={handleLeadPriorWork}
                      />
                      <label htmlFor="id4" className="checkbox-label">
                        Intern
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id5"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelancer"
                        onChange={handleLeadPriorWork}
                      />
                      <label htmlFor="id5" className="checkbox-label">
                        Freelancer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id6"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Founder/Co-founder"
                        onChange={handleLeadPriorWork}
                      />
                      <label htmlFor="id6" className="checkbox-label">
                        Founder/Co-founder
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id7"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Full-time"
                        onChange={handleLeadPriorWork}
                      />
                      <label htmlFor="id7" className="checkbox-label">
                        Full-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id8"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="None"
                        onChange={handleLeadPriorWork}
                      />
                      <label htmlFor="id8" className="checkbox-label">
                        None
                      </label>
                    </div>
                    <div className="head4">
                      Currently working as <span className="required">*</span>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id9"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Full-time"
                        onChange={handleLeadCurrentWork}
                      />
                      <label htmlFor="id9" className="checkbox-label">
                        Full-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id10"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Part-time"
                        onChange={handleLeadCurrentWork}
                      />
                      <label htmlFor="id10" className="checkbox-label">
                        Part-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id11"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelance"
                        onChange={handleLeadCurrentWork}
                      />
                      <label htmlFor="id11" className="checkbox-label">
                        Freelance
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id12"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Intern"
                        onChange={handleLeadCurrentWork}
                      />
                      <label htmlFor="id12" className="checkbox-label">
                        Intern
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id13"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="None"
                        onChange={handleLeadCurrentWork}
                      />
                      <label htmlFor="id13" className="checkbox-label">
                        None
                      </label>
                    </div>
                    <div className="head4">
                      Internship you're looking for{" "}
                      <span className="required">*</span>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id14"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Web Development"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id14" className="checkbox-label">
                        Web Development
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id15"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="App Development"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id15" className="checkbox-label">
                        App Development
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id16"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="AI/ML"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id16" className="checkbox-label">
                        AI/ML
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id17"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Data Analyst"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id17" className="checkbox-label">
                        Data Analyst
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id18"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Graphic Designer"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id18" className="checkbox-label">
                        Graphic Designer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id19"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Content Writer"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id19" className="checkbox-label">
                        Content Writer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id20"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Business Analyst"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id20" className="checkbox-label">
                        Business Analyst
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id21"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Marketing"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id21" className="checkbox-label">
                        Marketing
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id22"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="HR"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id22" className="checkbox-label">
                        HR
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id23"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Digital Marketing/Social Media manager"
                        onChange={handleLeadCategory}
                      />
                      <label htmlFor="id23" className="checkbox-label">
                        Digital Marketing/Social Media manager
                      </label>
                    </div>
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
                    <div className="head4">Age</div>
                    <input
                      id="member2-age"
                      type="number"
                      className="input"
                      placeholder="Age"
                      value={mem2Age}
                      onChange={(e) => setMem2Age(e.target.value)}
                    />
                    <div className="head4">Current Address</div>
                    <input
                      id="member2-address"
                      type="text"
                      className="input"
                      placeholder="Address"
                      value={mem2Location}
                      onChange={(e) => setMem2Location(e.target.value)}
                    />
                    <div className="head4">Current Institution</div>
                    <input
                      id="member2-institute"
                      type="text"
                      className="input"
                      placeholder="Institution"
                      value={mem2Institute}
                      onChange={(e) => setMem2Institute(e.target.value)}
                    />
                    <div className="head4">Current Course</div>
                    <input
                      id="member2-course"
                      type="text"
                      className="input"
                      placeholder="Course"
                      value={mem2Course}
                      onChange={(e) => setMem2Course(e.target.value)}
                    />
                    <div className="head4">Current Studying Year</div>
                    <div className="Dropdown">
                      <div
                        className={`dropdown-header ${
                          dropdownOpen2 ? "open" : ""
                        }`}
                        onClick={() => setDropdownOpen2(!dropdownOpen2)}
                      >
                        {mem2CurrentYear ? mem2CurrentYear : "Select an Event"}
                        <div className="custom-down-icon">
                          <FaChevronDown />
                        </div>
                      </div>
                      {dropdownOpen2 && (
                        <div className="options">
                          {options1.map((option) => (
                            <div
                              key={option}
                              className="option"
                              onChange={() => handleOptionClick2(option)}
                              onClick={() => handleOptionClick2(option)}
                              value={mem2CurrentYear}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="head4">Interested in</div>
                    <div className="checkbox">
                      <input
                        id="id24"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Internship"
                        onChange={handleMem2Interest}
                      />
                      <label htmlFor="id24" className="checkbox-label">
                        Internship
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id25"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelance"
                        onChange={handleMem2Interest}
                      />
                      <label htmlFor="id25" className="checkbox-label">
                        Freelance
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id26"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Startup"
                        onChange={handleMem2Interest}
                      />
                      <label htmlFor="id26" className="checkbox-label">
                        Startup
                      </label>
                    </div>
                    <div className="head4">Prior work experience as</div>
                    <div className="checkbox">
                      <input
                        id="id27"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Intern"
                        onChange={handleMem2PriorWork}
                      />
                      <label htmlFor="id27" className="checkbox-label">
                        Intern
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id28"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelancer"
                        onChange={handleMem2PriorWork}
                      />
                      <label htmlFor="id28" className="checkbox-label">
                        Freelancer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id29"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Founder/Co-founder"
                        onChange={handleMem2PriorWork}
                      />
                      <label htmlFor="id29" className="checkbox-label">
                        Founder/Co-founder
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id30"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Full-time"
                        onChange={handleMem2PriorWork}
                      />
                      <label htmlFor="id30" className="checkbox-label">
                        Full-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id31"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="None"
                        onChange={handleMem2PriorWork}
                      />
                      <label htmlFor="id31" className="checkbox-label">
                        None
                      </label>
                    </div>
                    <div className="head4">Currently working as</div>
                    <div className="checkbox">
                      <input
                        id="id32"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Full-time"
                        onChange={handleMem2CurrentWork}
                      />
                      <label htmlFor="id32" className="checkbox-label">
                        Full-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id33"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Part-time"
                        onChange={handleMem2CurrentWork}
                      />
                      <label htmlFor="id33" className="checkbox-label">
                        Part-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id34"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelance"
                        onChange={handleMem2CurrentWork}
                      />
                      <label htmlFor="id34" className="checkbox-label">
                        Freelance
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id35"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Intern"
                        onChange={handleMem2CurrentWork}
                      />
                      <label htmlFor="id35" className="checkbox-label">
                        Intern
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id36"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="None"
                        onChange={handleMem2CurrentWork}
                      />
                      <label htmlFor="id36" className="checkbox-label">
                        None
                      </label>
                    </div>
                    <div className="head4">Internship you're looking for</div>
                    <div className="checkbox">
                      <input
                        id="id37"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Web Development"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id37" className="checkbox-label">
                        Web Development
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id38"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="App Development"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id38" className="checkbox-label">
                        App Development
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id39"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="AI/ML"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id39" className="checkbox-label">
                        AI/ML
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id40"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Data Analyst"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id40" className="checkbox-label">
                        Data Analyst
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id41"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Graphic Designer"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id41" className="checkbox-label">
                        Graphic Designer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id42"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Content Writer"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id42" className="checkbox-label">
                        Content Writer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id43"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Business Analyst"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id43" className="checkbox-label">
                        Business Analyst
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id44"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Marketing"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id44" className="checkbox-label">
                        Marketing
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id45"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="HR"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id45" className="checkbox-label">
                        HR
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id46"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Digital Marketing/Social Media manager"
                        onChange={handleMem2Category}
                      />
                      <label htmlFor="id46" className="checkbox-label">
                        Digital Marketing/Social Media manager
                      </label>
                    </div>
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
                    <div className="head4">Age</div>
                    <input
                      id="member3-age"
                      type="number"
                      className="input"
                      placeholder="Age"
                      value={mem3Age}
                      onChange={(e) => setMem3Age(e.target.value)}
                    />
                    <div className="head4">Current Address</div>
                    <input
                      id="member3-address"
                      type="text"
                      className="input"
                      placeholder="Address"
                      value={mem3Location}
                      onChange={(e) => setMem3Location(e.target.value)}
                    />
                    <div className="head4">Current Institution</div>
                    <input
                      id="member3-institute"
                      type="text"
                      className="input"
                      placeholder="Institution"
                      value={mem3Institute}
                      onChange={(e) => setMem3Institute(e.target.value)}
                    />
                    <div className="head4">Current Course</div>
                    <input
                      id="member3-course"
                      type="text"
                      className="input"
                      placeholder="Course"
                      value={mem3Course}
                      onChange={(e) => setMem3Course(e.target.value)}
                    />
                    <div className="head4">Current Studying Year</div>
                    <div className="Dropdown">
                      <div
                        className={`dropdown-header ${
                          dropdownOpen3 ? "open" : ""
                        }`}
                        onClick={() => setDropdownOpen3(!dropdownOpen3)}
                      >
                        {mem3CurrentYear ? mem3CurrentYear : "Select an Event"}
                        <div className="custom-down-icon">
                          <FaChevronDown />
                        </div>
                      </div>
                      {dropdownOpen3 && (
                        <div className="options">
                          {options1.map((option) => (
                            <div
                              key={option}
                              className="option"
                              onChange={() => handleOptionClick3(option)}
                              onClick={() => handleOptionClick3(option)}
                              value={mem3CurrentYear}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="head4">Interested in</div>
                    <div className="checkbox">
                      <input
                        id="id47"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Internship"
                        onChange={handleMem3Interest}
                      />
                      <label htmlFor="id47" className="checkbox-label">
                        Internship
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id48"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelance"
                        onChange={handleMem3Interest}
                      />
                      <label htmlFor="id48" className="checkbox-label">
                        Freelance
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id49"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Startup"
                        onChange={handleMem3Interest}
                      />
                      <label htmlFor="id49" className="checkbox-label">
                        Startup
                      </label>
                    </div>
                    <div className="head4">Prior work experience as</div>
                    <div className="checkbox">
                      <input
                        id="id50"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Intern"
                        onChange={handleMem3PriorWork}
                      />
                      <label htmlFor="id50" className="checkbox-label">
                        Intern
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id51"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelancer"
                        onChange={handleMem3PriorWork}
                      />
                      <label htmlFor="id51" className="checkbox-label">
                        Freelancer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id52"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Founder/Co-founder"
                        onChange={handleMem3PriorWork}
                      />
                      <label htmlFor="id52" className="checkbox-label">
                        Founder/Co-founder
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id53"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Full-time"
                        onChange={handleMem3PriorWork}
                      />
                      <label htmlFor="id53" className="checkbox-label">
                        Full-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id54"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="None"
                        onChange={handleMem3PriorWork}
                      />
                      <label htmlFor="id54" className="checkbox-label">
                        None
                      </label>
                    </div>
                    <div className="head4">Currently working as</div>
                    <div className="checkbox">
                      <input
                        id="id55"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Full-time"
                        onChange={handleMem3CurrentWork}
                      />
                      <label htmlFor="id55" className="checkbox-label">
                        Full-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id56"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Part-time"
                        onChange={handleMem3CurrentWork}
                      />
                      <label htmlFor="id56" className="checkbox-label">
                        Part-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id57"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelance"
                        onChange={handleMem3CurrentWork}
                      />
                      <label htmlFor="id57" className="checkbox-label">
                        Freelance
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id58"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Intern"
                        onChange={handleMem3CurrentWork}
                      />
                      <label htmlFor="id58" className="checkbox-label">
                        Intern
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id59"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="None"
                        onChange={handleMem3CurrentWork}
                      />
                      <label htmlFor="id59" className="checkbox-label">
                        None
                      </label>
                    </div>
                    <div className="head4">Internship you're looking for</div>
                    <div className="checkbox">
                      <input
                        id="id60"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Web Development"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id60" className="checkbox-label">
                        Web Development
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id61"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="App Development"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id61" className="checkbox-label">
                        App Development
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id62"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="AI/ML"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id62" className="checkbox-label">
                        AI/ML
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id63"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Data Analyst"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id63" className="checkbox-label">
                        Data Analyst
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id64"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Graphic Designer"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id64" className="checkbox-label">
                        Graphic Designer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id65"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Content Writer"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id65" className="checkbox-label">
                        Content Writer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id66"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Business Analyst"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id66" className="checkbox-label">
                        Business Analyst
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id67"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Marketing"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id67" className="checkbox-label">
                        Marketing
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id68"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="HR"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id68" className="checkbox-label">
                        HR
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id69"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Digital Marketing/Social Media manager"
                        onChange={handleMem3Category}
                      />
                      <label htmlFor="id69" className="checkbox-label">
                        Digital Marketing/Social Media manager
                      </label>
                    </div>
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
                    <div className="head4">Age</div>
                    <input
                      id="member4-age"
                      type="number"
                      className="input"
                      placeholder="Age"
                      value={mem4Age}
                      onChange={(e) => setMem4Age(e.target.value)}
                    />
                    <div className="head4">Current Address</div>
                    <input
                      id="member4-address"
                      type="text"
                      className="input"
                      placeholder="Address"
                      value={mem4Location}
                      onChange={(e) => setMem4Location(e.target.value)}
                    />
                    <div className="head4">Current Institution</div>
                    <input
                      id="member4-institute"
                      type="text"
                      className="input"
                      placeholder="Institution"
                      value={mem4Institute}
                      onChange={(e) => setMem4Institute(e.target.value)}
                    />
                    <div className="head4">Current Course</div>
                    <input
                      id="member4-course"
                      type="text"
                      className="input"
                      placeholder="Course"
                      value={mem4Course}
                      onChange={(e) => setMem4Course(e.target.value)}
                    />
                    <div className="head4">Current Studying Year</div>
                    <div className="Dropdown">
                      <div
                        className={`dropdown-header ${
                          dropdownOpen4 ? "open" : ""
                        }`}
                        onClick={() => setDropdownOpen4(!dropdownOpen4)}
                      >
                        {mem4CurrentYear ? mem4CurrentYear : "Select an Event"}
                        <div className="custom-down-icon">
                          <FaChevronDown />
                        </div>
                      </div>
                      {dropdownOpen4 && (
                        <div className="options">
                          {options1.map((option) => (
                            <div
                              key={option}
                              className="option"
                              onChange={() => handleOptionClick4(option)}
                              onClick={() => handleOptionClick4(option)}
                              value={mem4CurrentYear}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="head4">Interested in</div>
                    <div className="checkbox">
                      <input
                        id="id70"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Internship"
                        onChange={handleMem4Interest}
                      />
                      <label htmlFor="id70" className="checkbox-label">
                        Internship
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id71"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelance"
                        onChange={handleMem4Interest}
                      />
                      <label htmlFor="id71" className="checkbox-label">
                        Freelance
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id72"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Startup"
                        onChange={handleMem4Interest}
                      />
                      <label htmlFor="id72" className="checkbox-label">
                        Startup
                      </label>
                    </div>
                    <div className="head4">Prior work experience as</div>
                    <div className="checkbox">
                      <input
                        id="id73"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Intern"
                        onChange={handleMem4PriorWork}
                      />
                      <label htmlFor="id73" className="checkbox-label">
                        Intern
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id74"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelancer"
                        onChange={handleMem4PriorWork}
                      />
                      <label htmlFor="id74" className="checkbox-label">
                        Freelancer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id75"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Founder/Co-founder"
                        onChange={handleMem4PriorWork}
                      />
                      <label htmlFor="id75" className="checkbox-label">
                        Founder/Co-founder
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id76"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Full-time"
                        onChange={handleMem4PriorWork}
                      />
                      <label htmlFor="id76" className="checkbox-label">
                        Full-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id77"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="None"
                        onChange={handleMem4PriorWork}
                      />
                      <label htmlFor="id77" className="checkbox-label">
                        None
                      </label>
                    </div>
                    <div className="head4">Currently working as</div>
                    <div className="checkbox">
                      <input
                        id="id78"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Full-time"
                        onChange={handleMem4CurrentWork}
                      />
                      <label htmlFor="id78" className="checkbox-label">
                        Full-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id79"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Part-time"
                        onChange={handleMem4CurrentWork}
                      />
                      <label htmlFor="id79" className="checkbox-label">
                        Part-time
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id80"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Freelance"
                        onChange={handleMem4CurrentWork}
                      />
                      <label htmlFor="id80" className="checkbox-label">
                        Freelance
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id81"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Intern"
                        onChange={handleMem4CurrentWork}
                      />
                      <label htmlFor="id81" className="checkbox-label">
                        Intern
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id82"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="None"
                        onChange={handleMem4CurrentWork}
                      />
                      <label htmlFor="id82" className="checkbox-label">
                        None
                      </label>
                    </div>
                    <div className="head4">Internship you're looking for</div>
                    <div className="checkbox">
                      <input
                        id="id83"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Web Development"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id83" className="checkbox-label">
                        Web Development
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id84"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="App Development"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id84" className="checkbox-label">
                        App Development
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id85"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="AI/ML"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id85" className="checkbox-label">
                        AI/ML
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id86"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Data Analyst"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id86" className="checkbox-label">
                        Data Analyst
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id87"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Graphic Designer"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id87" className="checkbox-label">
                        Graphic Designer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id88"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Content Writer"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id88" className="checkbox-label">
                        Content Writer
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id89"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Business Analyst"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id89" className="checkbox-label">
                        Business Analyst
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id90"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Marketing"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id90" className="checkbox-label">
                        Marketing
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id91"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="HR"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id91" className="checkbox-label">
                        HR
                      </label>
                    </div>
                    <div className="checkbox">
                      <input
                        id="id92"
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        name="Digital Marketing/Social Media manager"
                        onChange={handleMem4Category}
                      />
                      <label htmlFor="id92" className="checkbox-label">
                        Digital Marketing/Social Media manager
                      </label>
                    </div>
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
  );
};

export default Form;
